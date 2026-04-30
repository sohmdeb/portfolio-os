import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Gaming & More</h1>
            <h3>Skills & Side Projects</h3>
            <br />
            <p>
                Beyond professional client work, here are some of the other
                areas where I apply my editing skills.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Gaming Content</h2>
                <br />
                <p>
                    I create gaming highlight edits and montages, primarily
                    from titles like Valorant. These edits combine clean
                    in-game footage with cinematic camera angles,
                    slow-motion effects, and beat-synced transitions.
                    Gaming content is where I hone my pacing and rhythm
                    skills, since every cut needs to land perfectly with
                    the music.
                </p>
                <br />
                <h3>Key Skills Demonstrated:</h3>
                <ul>
                    <li><p>Beat-synced transitions & velocity ramping</p></li>
                    <li><p>Time remapping & slow-motion effects</p></li>
                    <li><p>Dynamic camera shake & zoom effects</p></li>
                    <li><p>Custom color grading per scene</p></li>
                    <li><p>Typography & text animations</p></li>
                </ul>
            </div>
            <div className="text-block">
                <h2>AMVs</h2>
                <br />
                <p>
                    I also create AMVs (Anime Music Videos) as a creative
                    outlet. This style of editing demands precise
                    synchronization between visuals and music, and it's
                    where I originally developed my instinct for pacing,
                    rhythm, and visual storytelling.
                </p>
            </div>
            <div className="text-block">
                <h2>Editing Toolkit</h2>
                <br />
                <p>
                    Across all my work, I leverage a professional-grade
                    toolkit to deliver the highest quality output:
                </p>
                <br />
                <ul>
                    <li><p>Adobe Premiere Pro — Primary NLE</p></li>
                    <li><p>Adobe After Effects — Motion graphics & VFX</p></li>
                    <li><p>DaVinci Resolve — Color grading</p></li>
                    <li><p>Blender — 3D modeling & animation</p></li>
                    <li><p>Adobe Photoshop — Thumbnails & compositing</p></li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

export default ArtProjects;
