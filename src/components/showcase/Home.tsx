import React, { useState, useEffect, useRef } from 'react';
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

// Fisher-Yates shuffle
const shuffleArray = (arr: string[]): string[] => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const CYCLE_INTERVAL = 8000; // 8 seconds per GIF

const Home: React.FC<HomeProps> = (props) => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const shuffledRef = useRef<string[]>(shuffleArray(ANIME_GIFS));

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => {
                const next = prev + 1;
                if (next >= shuffledRef.current.length) {
                    // Re-shuffle for the next cycle, ensuring no repeat at boundary
                    const lastShown = shuffledRef.current[shuffledRef.current.length - 1];
                    let newShuffle = shuffleArray(ANIME_GIFS);
                    while (newShuffle[0] === lastShown) {
                        newShuffle = shuffleArray(ANIME_GIFS);
                    }
                    shuffledRef.current = newShuffle;
                    return 0;
                }
                return next;
            });
        }, CYCLE_INTERVAL);
        return () => clearInterval(timer);
    }, []);

    const currentGif = shuffledRef.current[currentIndex];

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
