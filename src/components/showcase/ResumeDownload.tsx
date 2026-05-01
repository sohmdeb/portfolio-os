import React from 'react';
import printer from '../../assets/resume/printer.gif';
import { useNavigate } from 'react-router';
// Showreel on Google Drive
const Showreel = 'https://drive.google.com/drive/folders/1CvtyeCTe6bw7KMmHAW3t-_P1YNzDF4IA?usp=drive_link';

export interface ResumeDownloadProps {
    altText?: string;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ altText }) => {
    const navigate = useNavigate();

    return (
        <div style={styles.resumeContainer}>
            <img style={styles.resumePrinter} alt="" src={printer} />
            <div style={styles.resumeContainerText}>
                <h3>{altText ? altText : 'Looking for my showreel?'}</h3>
                <a rel="noreferrer" target="_blank" href={Showreel}>
                    <p>Click here to view it!</p>
                </a>
                <p
                    style={styles.typographyLink}
                    onMouseDown={() => navigate('/projects/typography')}
                >
                    Or check out my Typography & Motion showcase →
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    resumeContainer: {
        backgroundColor: 'white',
        padding: 12,
        boxSizing: 'border-box',
        border: '2px solid black',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '100%',
        alignItems: 'center',
    },
    resumeContainerText: {
        flexDirection: 'column',
    },
    resumePrinter: {
        width: 56,
        height: 48,
        paddingRight: 24,
    },
    typographyLink: {
        cursor: 'pointer',
        color: '#0066cc',
        fontSize: 13,
        marginTop: 4,
        textDecoration: 'underline',
    },
};

export default ResumeDownload;
