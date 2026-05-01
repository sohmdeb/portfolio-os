import React, { useState, useRef } from 'react';
import ResumeDownload from '../ResumeDownload';

export interface TypographyProjectsProps {}

interface VideoCardProps {
    src: string;
    title: string;
    description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, title, description }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div style={styles.videoCard}>
            <div style={styles.videoWrapper} onMouseDown={handlePlay}>
                <video
                    ref={videoRef}
                    src={src}
                    style={styles.video}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                />
                {!isPlaying && (
                    <div style={styles.playOverlay}>
                        <div style={styles.playButton}>▶</div>
                    </div>
                )}
            </div>
            <div style={styles.videoInfo}>
                <h3 style={styles.videoTitle}>{title}</h3>
                <p style={styles.videoDesc}>{description}</p>
            </div>
        </div>
    );
};

const videos = [
    {
        src: process.env.PUBLIC_URL + '/typography/grade.mp4',
        title: 'Grade — Motion Graphics',
        description: 'Typography-driven motion piece with kinetic text and color grading.',
    },
    {
        src: process.env.PUBLIC_URL + '/typography/gin.mp4',
        title: 'Gin — Stylized Edit',
        description: 'Fast-paced edit with dynamic typography and visual effects.',
    },
    {
        src: process.env.PUBLIC_URL + '/typography/bleach.mp4',
        title: 'Bleach — Drip Edit',
        description: 'Clean typography work with smooth transitions and visual rhythm.',
    },
    {
        src: process.env.PUBLIC_URL + '/typography/bad_edit.mp4',
        title: 'Bad Edit Pt. 2',
        description: 'Experimental typography layout with rapid cuts.',
    },
    {
        src: process.env.PUBLIC_URL + '/typography/uchiha.mp4',
        title: 'Uchiha — After Effects',
        description: 'After Effects composition with heavy typography focus.',
    },
    {
        src: process.env.PUBLIC_URL + '/typography/majima.mp4',
        title: 'Majima & Kiryu',
        description: 'Short-form edit with bold text overlays and timing.',
    },
    {
        src: process.env.PUBLIC_URL + '/typography/umang.mp4',
        title: 'Umang — Event Promo',
        description: 'Promotional video with clean typography and pacing.',
    },
    {
        src: process.env.PUBLIC_URL + '/typography/unwind.mov',
        title: 'Unwind — Promo',
        description: 'Smooth event promo piece with branded text design.',
    },
    {
        src: process.env.PUBLIC_URL + '/typography/valo.mp4',
        title: 'Valorant — Montage',
        description: 'High-energy montage with kinetic text overlays.',
    },
];

const TypographyProjects: React.FC<TypographyProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Typography & Motion</h1>
            <h3>Showcase</h3>
            <br />
            <p>
                A curated gallery of my best typography and motion graphics work.
                Each clip highlights key editing techniques — kinetic text, smooth
                transitions, and impactful visual storytelling. Click any video to play.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div style={styles.gallery}>
                {videos.map((video, index) => (
                    <VideoCard
                        key={index}
                        src={video.src}
                        title={video.title}
                        description={video.description}
                    />
                ))}
            </div>
            <br />
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    gallery: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%',
    },
    videoCard: {
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid #ccc',
        backgroundColor: '#fafafa',
        overflow: 'hidden',
    },
    videoWrapper: {
        position: 'relative',
        width: '100%',
        cursor: 'pointer',
        backgroundColor: '#000',
    },
    video: {
        width: '100%',
        display: 'block',
        maxHeight: 300,
        objectFit: 'cover',
    },
    playOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.35)',
    },
    playButton: {
        width: 48,
        height: 48,
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        color: '#333',
    },
    videoInfo: {
        padding: '12px 16px',
        flexDirection: 'column',
    },
    videoTitle: {
        fontSize: 16,
        marginBottom: 4,
    },
    videoDesc: {
        fontSize: 13,
        color: '#666',
    },
};

export default TypographyProjects;
