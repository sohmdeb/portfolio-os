import React, { useEffect } from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    useEffect(() => {
        const audio = new Audio(process.env.PUBLIC_URL + '/intro.mp3');
        audio.volume = 0.5;
        audio.play().catch(() => {});
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Soham Deb</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a video editor and creative professional with over 5
                    years of experience crafting compelling visual stories.
                    I'm currently majoring CS in IIITB, and I blend
                    technical expertise with artistic vision.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:soham.deb@iiitb.ac.in">
                        soham.deb@iiitb.ac.in
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    My journey into video editing started over 5 years ago when
                    I first experimented with Sony Vegas Pro, creating montages
                    and edits for fun. What began as a hobby quickly evolved
                    into a passion — I taught myself Adobe Premiere Pro,
                    After Effects, DaVinci Resolve, and Blender, constantly
                    pushing the boundaries of what I could create.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={{ ...styles.image, maxWidth: 300 }} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Me just being cool like that :)
                        </sub>
                    </p>
                </div>

                <p>
                    Over the past 2+ years, I've been freelancing professionally,
                    working with clients across various domains — from
                    promotional content and brand videos to event coverage and
                    highlight reels. I've produced work for organizations
                    like Northstar Robotics, Nexis Intelligence, and events
                    like Ataraxia, delivering polished content that drives
                    engagement and tells a story.
                </p>
                <br />
                <p>
                    My work spans multiple genres: cinematic event coverage,
                    3D animation with Blender, promotional reels, and
                    professional client deliverables. I also run a YouTube
                    channel with over 23,000 subscribers. I pride myself on
                    fast turnaround times, attention to detail, and an innate
                    sense of pacing and rhythm that makes each edit feel
                    alive.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond video editing, I have a lot of interests
                            that keep me creative. I enjoy{' '}
                            <Link to="/projects/blender">3D Art in Blender</Link>{' '}
                            — modeling cars, creating motion graphics, and
                            experimenting with shader effects. You can check
                            out my Blender work under the projects tab. I'm
                            also into gaming, music, and exploring new visual
                            styles and motion design trends.
                        </p>
                        <br />
                        <p>
                            I love collaborating with other creatives and
                            pushing each other to produce better work. Whether
                            it's a brand video, an event reel, or a 3D car
                            animation, I bring the same level of dedication
                            and polish to every project.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, 2024
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on Instagram{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://instagram.com/sohmdeb"
                    >
                        @sohmdeb
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:soham.deb@iiitb.ac.in">
                        soham.deb@iiitb.ac.in
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
