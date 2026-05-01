import React, { useEffect } from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    useEffect(() => {
        const audio = new Audio(process.env.PUBLIC_URL + '/experience.mp3');
        audio.volume = 0.5;
        audio.play().catch(() => {});
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Freelance Video Editor</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Self-Employed</h3>
                        <b>
                            <p>2022 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Professional freelance video editing for clients across
                    multiple industries. Delivering polished, high-quality
                    content with fast turnaround times.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Edited promotional videos, social media content,
                            brand reels, and highlight videos for individual
                            clients and businesses.
                        </p>
                    </li>
                    <li>
                        <p>
                            Delivered over 50+ projects with consistently
                            positive client feedback and repeat business.
                        </p>
                    </li>
                    <li>
                        <p>
                            Specialized in fast-paced edits with dynamic
                            transitions, color grading, and sound design
                            using Premiere Pro, After Effects, and DaVinci
                            Resolve.
                        </p>
                    </li>
                    <li>
                        <p>
                            Created 3D motion graphics and animations using
                            Blender for client projects and personal work.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>YouTube Creator — xZyn</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>23,000+ Subscribers</h3>
                        <b>
                            <p>2020 - 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Built and grew the YouTube channel{' '}
                    <a href="https://www.youtube.com/@ConnersHowTo" target="_blank" rel="noreferrer">xZyn</a>{' '}
                    to over 23,000 subscribers, creating Discord-focused
                    tutorial content including how-to guides, tips
                    & tricks, and feature showcases. The channel
                    accumulated over 57 videos and significant
                    viewership.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Full creative ownership — scripting, screen
                            recording (OBS Studio), editing (Sony Vegas
                            Pro), thumbnail design (Adobe Photoshop),
                            and publishing.
                        </p>
                    </li>
                    <li>
                        <p>
                            Hit 5K subscribers in April 2021, 10K later
                            that same month, and crossed 20K by July
                            2021 — driven by viral Discord tutorial
                            content.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed a consistent visual style and
                            editing rhythm optimized for audience
                            retention and engagement.
                        </p>
                    </li>
                    <li>
                        <p>
                            Channel was successfully sold in 2022 after
                            building it to a sustainable, monetized
                            audience.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Northstar Robotics</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Video Editor & Content Creator</h3>
                        <b>
                            <p>2026 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Producing promotional video content and social media
                    material for{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://instagram.com/northstarrobotics.ai"
                    >
                        Northstar Robotics
                    </a>
                    , an AI and robotics organization.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Created brand videos, product demos, and
                            social media reels showcasing robotics and AI
                            technology.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed a cohesive visual identity across
                            video content, aligning with the brand's
                            modern, tech-forward aesthetic.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Nexis Intelligence</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Video Production</h3>
                        <b>
                            <p>2026 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Producing video content for{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://nexisintelligence.co.in/"
                    >
                        Nexis Intelligence
                    </a>
                    , a data intelligence and AI infrastructure company.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Created promotional and explainer videos for
                            AI-enhanced data infrastructure products.
                        </p>
                    </li>
                    <li>
                        <p>
                            Delivered polished content for social media and
                            client-facing presentations.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Ataraxia</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Lead Video Editor</h3>
                        <b>
                            <p>2023 - 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Lead video editor for{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://instagram.com/ataraxia.social"
                    >
                        Ataraxia
                    </a>
                    {' '}({' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://ataraxia-lilac.vercel.app/"
                    >
                        Website
                    </a>
                    {' '})
                    , producing promotional teasers, event coverage, and
                    aftermovies.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Created promotional teasers and reels that
                            drove event registrations and social media
                            engagement.
                        </p>
                    </li>
                    <li>
                        <p>
                            Produced the official aftermovie — syncing
                            footage from 4+ camera angles, color grading
                            over 200 clips.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated with photography and design teams
                            to deliver cohesive visual branding.
                        </p>
                    </li>
                    <li>
                        <p>
                            A fresher's/farewell event hosted and curated
                            by me.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
