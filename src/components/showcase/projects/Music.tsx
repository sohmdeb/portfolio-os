import React from 'react';
import ResumeDownload from '../ResumeDownload';
import blenderRx7 from '../../../assets/pictures/projects/blender_rx7.jpg';
import blenderPorsche from '../../../assets/pictures/projects/blender_porsche.jpg';
import blenderFerrari from '../../../assets/pictures/projects/blender_ferrari.jpg';
import ps5Render from '../../../assets/pictures/projects/ps5_render.png';
import blenderBmw from '../../../assets/pictures/projects/blender_bmw.jpg';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>3D & Blender</h1>
            <h3>Creations</h3>
            <br />
            <p>
                Beyond video editing, I create 3D art and animations
                in Blender. Here are some of my favorite 3D projects.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>RX7 Car Animation</h2>
                <br />
                <div className="captioned-image">
                    <img src={blenderRx7} style={styles.image} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Mazda RX7 — Blender render
                        </sub>
                    </p>
                </div>
                <p>
                    A fully modeled and animated Mazda RX7 with realistic
                    lighting, reflections, and camera work. This project
                    taught me a lot about car modeling, HDRI lighting, and
                    Eevee/Cycles rendering optimization. The final render
                    was composited in After Effects with additional color
                    grading and sound design.
                </p>
            </div>
            <div className="text-block">
                <h2>Porsche Render</h2>
                <br />
                <div className="captioned-image">
                    <img src={blenderPorsche} style={styles.image} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Porsche — Blender render
                        </sub>
                    </p>
                </div>
                <p>
                    A cinematic Porsche render focusing on reflections,
                    surface materials, and dramatic lighting. Created
                    entirely in Blender with Cycles rendering.
                </p>
            </div>
            <div className="text-block">
                <h2>Ferrari Animation</h2>
                <br />
                <div className="captioned-image">
                    <img src={blenderFerrari} style={styles.image} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Ferrari — Blender render
                        </sub>
                    </p>
                </div>
                <p>
                    A high-energy Ferrari animation with dynamic camera
                    movement and stylized lighting. Showcases my ability
                    to create automotive content with impact.
                </p>
            </div>
            <div className="text-block">
                <h2>BMW Render</h2>
                <br />
                <div className="captioned-image">
                    <img src={blenderBmw} style={styles.image} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 4:</b> BMW — Blender render
                        </sub>
                    </p>
                </div>
                <p>
                    A clean BMW render demonstrating my skills in
                    automotive visualization, paint materials, and
                    environmental lighting.
                </p>
            </div>
            <div className="text-block">
                <h2>PS5 Render</h2>
                <br />
                <div className="captioned-image">
                    <img src={ps5Render} style={styles.image} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 5:</b> PS5 — Blender render
                        </sub>
                    </p>
                </div>
                <p>
                    I'm constantly expanding my 3D portfolio with more
                    complex scenes and animations. My goal is to
                    integrate 3D elements seamlessly into my video
                    editing work, creating hybrid 2D/3D compositions
                    that push creative boundaries.
                </p>
                <br />
                <h3>Tools Used:</h3>
                <ul>
                    <li><p>Blender 3.x / 4.x</p></li>
                    <li><p>Cycles & Eevee Rendering</p></li>
                    <li><p>Geometry Nodes</p></li>
                    <li><p>Shader Editor</p></li>
                    <li><p>Compositing & Post-Processing</p></li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    image: {
        width: '100%',
        maxWidth: 400,
        height: 'auto',
    },
    caption: {
        width: '80%',
    },
};

export default MusicProjects;
