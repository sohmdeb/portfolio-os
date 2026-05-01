import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Video Editing</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite video editing projects I have
                worked on over the last few years. Each project showcases
                different aspects of my editing style and capabilities.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Client Work</h2>
                <br />
                <p>
                    Over the past 2+ years, I've worked with various clients
                    delivering professional video content. From promotional
                    videos to social media reels, I bring a polished,
                    cinematic quality to every project. My workflow typically
                    involves Premiere Pro for cutting and pacing, After
                    Effects for motion graphics, and DaVinci Resolve for
                    color grading.
                </p>
                <br />
                <p>
                    I pride myself on fast turnaround times without
                    compromising quality. Most projects are delivered within
                    48-72 hours, with revisions completed same-day.
                </p>
                <br />
                <h3>Services:</h3>
                <ul>
                    <li>
                        <p>Promotional Videos & Brand Content</p>
                    </li>
                    <li>
                        <p>Social Media Reels & Short-Form Content</p>
                    </li>
                    <li>
                        <p>Event Coverage & Highlight Reels</p>
                    </li>
                    <li>
                        <p>Color Grading & Sound Design</p>
                    </li>
                    <li>
                        <p>Motion Graphics & Title Design</p>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Northstar Robotics</h2>
                <br />
                <p>
                    Video production and content creation for{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://instagram.com/northstarrobotics.ai"
                    >
                        Northstar Robotics
                    </a>
                    , an AI and robotics organization. Created brand videos,
                    product demos, and social media content showcasing
                    cutting-edge robotics and AI technology. Developed a
                    cohesive visual identity that aligns with the brand's
                    modern, tech-forward aesthetic.
                </p>
            </div>
            <div className="text-block">
                <h2>Nexis Intelligence</h2>
                <br />
                <p>
                    Produced promotional and explainer video content for{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://nexisintelligence.co.in/"
                    >
                        Nexis Intelligence
                    </a>
                    , a data intelligence and AI infrastructure company.
                    Created polished content for their AI-enhanced data
                    infrastructure products, field intelligence systems,
                    and conversational revenue engines — delivering
                    client-facing and social media ready material.
                </p>
            </div>
            <div className="text-block">
                <h2>Ataraxia</h2>
                <br />
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
                    . Created promotional teasers, event coverage videos,
                    and the official aftermovie. This was one of my most
                    ambitious projects, requiring coordination with
                    photographers, designers, and the organizing committee.
                </p>
                <br />
                <p>
                    The aftermovie involved syncing footage from multiple
                    camera angles, color grading over 200 clips, and
                    creating a cohesive narrative that captured the energy
                    of the event in under 3 minutes.
                </p>
            </div>
            <div className="text-block">
                <h2>Event Coverage & Promotional Reels</h2>
                <br />
                <p>
                    Beyond specific clients, I regularly produce video
                    content for events and organizations including festival
                    coverage, departmental events, and institutional
                    promotional material. These projects helped me develop
                    skills in interview editing, documentary-style
                    storytelling, and working with tight deadlines.
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

export default SoftwareProjects;
