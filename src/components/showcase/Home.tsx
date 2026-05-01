import React from 'react';
import { Link } from '../general';

import { useNavigate } from 'react-router';

export interface HomeProps {}

const ANIME_GIFS = [
    '/backgrounds/anime1.gif',
    '/backgrounds/anime2.gif',
    '/backgrounds/anime3.gif',
    '/backgrounds/anime4.gif',
    '/backgrounds/anime5.gif',
];

// Module-level counter: persists across mount/unmount, advances each time Home mounts
let mountCount = 0;

const Home: React.FC<HomeProps> = () => {
    const navigate = useNavigate();

    // Pick the current GIF based on how many times this component has mounted
    const currentGif = ANIME_GIFS[mountCount % ANIME_GIFS.length];
    // Increment for next open — runs once per mount since this is module-level
    React.useEffect(() => {
        mountCount++;
    }, []);

    const goToContact = () => {
        navigate('/contact');
    };

    return (
        <div
            style={{
                ...styles.page,
                backgroundImage: `url(${process.env.PUBLIC_URL + currentGif})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div style={styles.header}>
                <h1 style={styles.name}>Soham Deb</h1>
                <h2 style={styles.subtitle}>Video Editor & 3D Designer</h2>
            </div>
            <div style={styles.buttons} className="home-white-links">
                <Link containerStyle={styles.link} to="about" text="ABOUT" />
                <Link
                    containerStyle={styles.link}
                    to="experience"
                    text="EXPERIENCE"
                />
                <Link
                    containerStyle={styles.link}
                    to="projects"
                    text="PROJECTS"
                />
                <Link
                    containerStyle={styles.link}
                    to="contact"
                    text="CONTACT"
                />
            </div>
            <div style={styles.forHireContainer} onMouseDown={goToContact}>
                {/* <img src={forhire} alt="" /> */}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
    },
    header: {
        textAlign: 'center',
        marginBottom: 64,
        marginTop: 64,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        justifyContent: 'space-between',
    },
    image: {
        width: 800,
    },
    link: {
        padding: 16,
    },
    nowHiring: {
        backgroundColor: 'red',
        padding: 16,
    },
    forHireContainer: {
        marginTop: 64,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    name: {
        fontSize: 72,
        marginBottom: 16,
        lineHeight: 0.9,
        color: '#ffffff',
    },
    subtitle: {
        color: '#ffffff',
    },
};

export default Home;
