import React, { useState } from 'react';
import Window from '../os/Window';
import Colors from '../../constants/colors';

export interface DisplayPropertiesProps extends WindowAppProps {}

const TABS = ['Background', 'Screen Saver', 'Appearance', 'Settings'];

const PATTERNS = ['(None)', 'Bricks', 'Buttons', 'Cargo Net', 'Circuits', 'Cobblestone'];
const WALLPAPERS = ['(None)', 'Black Thatch', 'Blue Rivets', 'Bubbles', 'Carved Stone', 'Clouds'];
const SCREENSAVERS = ['(None)', '3D Maze', '3D Pipes', 'Beziers', 'Flying Windows', 'Mystify'];
const SCHEMES = ['Windows Standard', 'Desert', 'Rainy Day', 'Rose', 'Slate', 'Spruce'];

const DisplayProperties: React.FC<DisplayPropertiesProps> = (props) => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedPattern, setSelectedPattern] = useState(0);
    const [selectedWallpaper, setSelectedWallpaper] = useState(0);
    const [selectedScreenSaver, setSelectedScreenSaver] = useState(0);
    const [selectedScheme, setSelectedScheme] = useState(0);
    const [displayMode, setDisplayMode] = useState('Center');
    const [resolution, setResolution] = useState(75);

    const renderMonitorPreview = (content: React.ReactNode) => (
        <div style={styles.monitorOuter}>
            <div style={styles.monitorBezel}>
                <div style={styles.monitorScreen}>
                    {content}
                </div>
            </div>
            <div style={styles.monitorStand} />
            <div style={styles.monitorBase} />
        </div>
    );

    const renderBackground = () => (
        <div style={styles.tabContent}>
            {renderMonitorPreview(
                <div style={{
                    width: '100%', height: '100%',
                    background: selectedWallpaper === 0 ? '#008080' : '#1a5276',
                }} />
            )}
            <div style={styles.listsRow}>
                <div style={styles.listGroup}>
                    <p style={styles.groupLabel}>Pattern</p>
                    <div style={styles.listBox}>
                        {PATTERNS.map((p, i) => (
                            <div
                                key={p}
                                style={{
                                    ...styles.listItem,
                                    ...(selectedPattern === i ? styles.listItemSelected : {}),
                                }}
                                onMouseDown={() => setSelectedPattern(i)}
                            >
                                <p style={{
                                    ...styles.listItemText,
                                    ...(selectedPattern === i ? { color: 'white' } : {}),
                                }}>{p}</p>
                            </div>
                        ))}
                    </div>
                    <button style={styles.smallBtn}>Edit Pattern...</button>
                </div>
                <div style={styles.listGroup}>
                    <p style={styles.groupLabel}>Wallpaper</p>
                    <div style={styles.listBox}>
                        {WALLPAPERS.map((w, i) => (
                            <div
                                key={w}
                                style={{
                                    ...styles.listItem,
                                    ...(selectedWallpaper === i ? styles.listItemSelected : {}),
                                }}
                                onMouseDown={() => setSelectedWallpaper(i)}
                            >
                                <p style={{
                                    ...styles.listItemText,
                                    ...(selectedWallpaper === i ? { color: 'white' } : {}),
                                }}>{w}</p>
                            </div>
                        ))}
                    </div>
                    <div style={styles.wallpaperControls}>
                        <button style={styles.smallBtn}>Browse...</button>
                        <div style={styles.displayRow}>
                            <p style={styles.smallLabel}>Display:</p>
                            <label style={styles.radioLabel}>
                                <input
                                    type="radio"
                                    checked={displayMode === 'Tile'}
                                    onChange={() => setDisplayMode('Tile')}
                                />
                                <p style={styles.radioText}>Tile</p>
                            </label>
                            <label style={styles.radioLabel}>
                                <input
                                    type="radio"
                                    checked={displayMode === 'Center'}
                                    onChange={() => setDisplayMode('Center')}
                                />
                                <p style={styles.radioText}>Center</p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderScreenSaver = () => (
        <div style={styles.tabContent}>
            {renderMonitorPreview(
                <div style={{
                    width: '100%', height: '100%',
                    background: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div style={{
                        width: 20, height: 20,
                        background: '#ff0',
                        transform: 'rotate(45deg)',
                        animation: 'none',
                    }} />
                </div>
            )}
            <div style={styles.fieldset}>
                <p style={styles.fieldsetLabel}>Screen Saver</p>
                <div style={styles.ssRow}>
                    <select
                        style={styles.selectBox}
                        value={selectedScreenSaver}
                        onChange={(e) => setSelectedScreenSaver(Number(e.target.value))}
                    >
                        {SCREENSAVERS.map((s, i) => (
                            <option key={s} value={i}>{s}</option>
                        ))}
                    </select>
                    <button style={styles.smallBtn}>Settings...</button>
                    <button style={styles.smallBtn}>Preview</button>
                </div>
                <div style={styles.ssRow}>
                    <label style={styles.checkLabel}>
                        <input type="checkbox" />
                        <p style={styles.radioText}>Password protected</p>
                    </label>
                    <button style={styles.smallBtn}>Change...</button>
                    <p style={styles.radioText}>Wait:</p>
                    <input type="number" defaultValue={1} style={styles.numberInput} />
                    <p style={styles.radioText}>minutes</p>
                </div>
            </div>
            <div style={styles.fieldset}>
                <p style={styles.fieldsetLabel}>Energy saving features of monitor</p>
                <div style={styles.ssRow}>
                    <label style={styles.checkLabel}>
                        <input type="checkbox" />
                        <p style={styles.radioText}>Low-power standby</p>
                    </label>
                    <input type="number" defaultValue={15} style={styles.numberInput} />
                    <p style={styles.radioText}>minutes</p>
                </div>
                <div style={styles.ssRow}>
                    <label style={styles.checkLabel}>
                        <input type="checkbox" />
                        <p style={styles.radioText}>Shut off monitor</p>
                    </label>
                    <input type="number" defaultValue={30} style={styles.numberInput} />
                    <p style={styles.radioText}>minutes</p>
                </div>
            </div>
        </div>
    );

    const renderAppearance = () => (
        <div style={styles.tabContent}>
            <div style={styles.appearancePreview}>
                <div style={styles.inactiveWindow}>
                    <div style={styles.inactiveTitleBar}>
                        <p style={styles.titleBarTextInactive}>Inactive Window</p>
                    </div>
                </div>
                <div style={styles.activeWindow}>
                    <div style={styles.activeTitleBar}>
                        <p style={styles.titleBarTextActive}>Active Window</p>
                    </div>
                    <div style={styles.windowBody}>
                        <p style={styles.windowBodyLinks}>
                            Normal &nbsp; <span style={{ color: '#808080' }}>Disabled</span> &nbsp;
                            <span style={{
                                background: '#000080', color: 'white',
                                padding: '0 4px',
                            }}>Selected</span>
                        </p>
                        <p style={styles.windowBodyText}>Window Text</p>
                        <div style={styles.messageBox}>
                            <div style={styles.messageBoxTitle}>
                                <p style={styles.titleBarTextActive}>Message Box</p>
                                <span style={styles.messageBoxClose}>✕</span>
                            </div>
                            <div style={styles.messageBoxBody}>
                                <p style={styles.messageBoxText}>Message Text</p>
                                <button style={styles.okBtn}>OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={styles.schemeRow}>
                <p style={styles.smallLabel}>Scheme:</p>
                <select
                    style={{ ...styles.selectBox, flex: 1 }}
                    value={selectedScheme}
                    onChange={(e) => setSelectedScheme(Number(e.target.value))}
                >
                    {SCHEMES.map((s, i) => (
                        <option key={s} value={i}>{s}</option>
                    ))}
                </select>
                <button style={styles.smallBtn}>Save As...</button>
                <button style={styles.smallBtn}>Delete</button>
            </div>
        </div>
    );

    const renderSettings = () => (
        <div style={styles.tabContent}>
            {renderMonitorPreview(
                <div style={{
                    width: '100%', height: '100%',
                    background: 'linear-gradient(135deg, #4a86c8, #6ba5d7)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    padding: 2,
                    boxSizing: 'border-box',
                }}>
                    <div style={{
                        width: '60%', height: 6,
                        background: '#c0c0c0',
                        borderTop: '1px solid white',
                    }} />
                </div>
            )}
            <div style={styles.settingsInfo}>
                <p style={styles.smallLabel}>Display:</p>
                <p style={styles.settingsDesc}>
                    Default Monitor on DebOS Graphics
                </p>
            </div>
            <div style={styles.settingsControls}>
                <div style={styles.settingsLeft}>
                    <p style={styles.groupLabel}>Screen resolution</p>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={resolution}
                        onChange={(e) => setResolution(Number(e.target.value))}
                        style={styles.slider}
                    />
                    <div style={styles.sliderLabels}>
                        <p style={styles.tinyText}>Less</p>
                        <p style={styles.tinyText}>More</p>
                    </div>
                    <p style={styles.resText}>
                        {resolution < 33 ? '800 by 600' : resolution < 66 ? '1024 by 768' : '1920 by 1440'} pixels
                    </p>
                </div>
                <div style={styles.settingsRight}>
                    <p style={styles.groupLabel}>Color quality</p>
                    <select style={styles.selectBox}>
                        <option>Highest (32 bit)</option>
                        <option>High (24 bit)</option>
                        <option>Medium (16 bit)</option>
                    </select>
                    <div style={styles.colorBar} />
                </div>
            </div>
            <div style={styles.settingsButtons}>
                <button style={styles.smallBtn}>Troubleshoot...</button>
                <button style={styles.smallBtn}>Advanced...</button>
            </div>
        </div>
    );

    const tabRenderers = [renderBackground, renderScreenSaver, renderAppearance, renderSettings];

    return (
        <Window
            top={80}
            left={200}
            width={420}
            height={500}
            windowTitle="Display Properties"
            windowBarIcon="displayIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div style={styles.container}>
                <div style={styles.tabs}>
                    {TABS.map((tab, i) => (
                        <div
                            key={tab}
                            style={{
                                ...styles.tab,
                                ...(activeTab === i ? styles.tabActive : {}),
                            }}
                            onMouseDown={() => setActiveTab(i)}
                        >
                            <p style={styles.tabText}>{tab}</p>
                        </div>
                    ))}
                </div>
                <div style={styles.tabBody}>
                    {tabRenderers[activeTab]()}
                </div>
                <div style={styles.bottomButtons}>
                    <button style={styles.bottomBtn} onMouseDown={props.onClose}>OK</button>
                    <button style={styles.bottomBtn} onMouseDown={props.onClose}>Cancel</button>
                    <button style={styles.bottomBtn}>Apply</button>
                </div>
            </div>
        </Window>
    );
};

const styles: StyleSheetCSS = {
    container: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        padding: 8,
        boxSizing: 'border-box',
        background: Colors.lightGray,
        fontFamily: 'MSSerif',
        fontSize: 12,
    },
    tabs: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: -1,
        zIndex: 1,
    },
    tab: {
        padding: '4px 12px',
        cursor: 'pointer',
        border: `1px solid ${Colors.darkGray}`,
        borderBottom: 'none',
        background: Colors.lightGray,
        marginRight: 2,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
    },
    tabActive: {
        background: Colors.lightGray,
        borderBottom: `1px solid ${Colors.lightGray}`,
        fontWeight: 'bold',
        position: 'relative',
        zIndex: 2,
    },
    tabText: {
        fontFamily: 'MSSerif',
        fontSize: 12,
    },
    tabBody: {
        flex: 1,
        border: `2px solid`,
        borderColor: `${Colors.white} ${Colors.darkGray} ${Colors.darkGray} ${Colors.white}`,
        padding: 12,
        background: Colors.lightGray,
        flexDirection: 'column',
        overflow: 'auto',
    },
    tabContent: {
        flexDirection: 'column',
        flex: 1,
        gap: 10,
    },
    monitorOuter: {
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 8,
    },
    monitorBezel: {
        width: 180,
        height: 130,
        background: '#b8b8a8',
        border: '3px solid',
        borderColor: '#d4d4c8 #808070 #808070 #d4d4c8',
        borderRadius: 4,
        padding: 12,
        boxSizing: 'border-box',
        boxShadow: 'inset 0 0 4px rgba(0,0,0,0.2)',
    },
    monitorScreen: {
        width: '100%',
        height: '100%',
        background: '#008080',
        border: '2px solid',
        borderColor: '#404040 #c0c0c0 #c0c0c0 #404040',
        overflow: 'hidden',
    },
    monitorStand: {
        width: 40,
        height: 10,
        background: '#b8b8a8',
        borderLeft: '2px solid #d4d4c8',
        borderRight: '2px solid #808070',
    },
    monitorBase: {
        width: 80,
        height: 6,
        background: '#b8b8a8',
        border: '1px solid',
        borderColor: '#d4d4c8 #808070 #808070 #d4d4c8',
        borderRadius: 1,
    },
    listsRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        flex: 1,
    },
    listGroup: {
        flex: 1,
        flexDirection: 'column',
        gap: 4,
    },
    groupLabel: {
        fontFamily: 'MSSerif',
        fontSize: 12,
        marginBottom: 2,
    },
    listBox: {
        flexDirection: 'column',
        border: '2px solid',
        borderColor: `${Colors.darkGray} ${Colors.white} ${Colors.white} ${Colors.darkGray}`,
        background: 'white',
        height: 90,
        overflow: 'auto',
    },
    listItem: {
        padding: '1px 4px',
        cursor: 'pointer',
    },
    listItemSelected: {
        background: '#000080',
    },
    listItemText: {
        fontFamily: 'MSSerif',
        fontSize: 12,
    },
    smallBtn: {
        fontFamily: 'MSSerif',
        fontSize: 11,
        padding: '2px 8px',
        background: Colors.lightGray,
        border: '2px solid',
        borderColor: `${Colors.white} ${Colors.darkGray} ${Colors.darkGray} ${Colors.white}`,
        cursor: 'pointer',
    },
    wallpaperControls: {
        flexDirection: 'column',
        gap: 4,
        marginTop: 4,
    },
    displayRow: {
        alignItems: 'center',
        gap: 6,
        marginTop: 4,
    },
    smallLabel: {
        fontFamily: 'MSSerif',
        fontSize: 12,
    },
    radioLabel: {
        alignItems: 'center',
        gap: 2,
        cursor: 'pointer',
    },
    radioText: {
        fontFamily: 'MSSerif',
        fontSize: 11,
    },
    checkLabel: {
        alignItems: 'center',
        gap: 4,
        cursor: 'pointer',
    },
    fieldset: {
        flexDirection: 'column',
        border: `2px solid`,
        borderColor: `${Colors.darkGray} ${Colors.white} ${Colors.white} ${Colors.darkGray}`,
        padding: 8,
        marginBottom: 8,
        gap: 6,
        position: 'relative',
    },
    fieldsetLabel: {
        fontFamily: 'MSSerif',
        fontSize: 12,
        position: 'absolute',
        top: -8,
        left: 8,
        background: Colors.lightGray,
        padding: '0 4px',
    },
    ssRow: {
        alignItems: 'center',
        gap: 6,
        marginTop: 4,
    },
    selectBox: {
        fontFamily: 'MSSerif',
        fontSize: 12,
        padding: '1px 4px',
        border: '2px solid',
        borderColor: `${Colors.darkGray} ${Colors.white} ${Colors.white} ${Colors.darkGray}`,
        background: 'white',
        minWidth: 120,
    },
    numberInput: {
        fontFamily: 'MSSerif',
        fontSize: 12,
        width: 40,
        border: '2px solid',
        borderColor: `${Colors.darkGray} ${Colors.white} ${Colors.white} ${Colors.darkGray}`,
        textAlign: 'center',
    },
    appearancePreview: {
        border: '2px solid',
        borderColor: `${Colors.darkGray} ${Colors.white} ${Colors.white} ${Colors.darkGray}`,
        background: '#008080',
        height: 180,
        padding: 12,
        position: 'relative',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    inactiveWindow: {
        position: 'absolute',
        top: 8,
        left: 8,
        width: '65%',
        flexDirection: 'column',
    },
    inactiveTitleBar: {
        background: '#808080',
        padding: '2px 4px',
    },
    titleBarTextInactive: {
        fontFamily: 'MSSerif',
        fontSize: 11,
        color: '#c0c0c0',
    },
    activeWindow: {
        position: 'absolute',
        top: 30,
        left: 30,
        width: '75%',
        flexDirection: 'column',
        border: '2px solid',
        borderColor: `${Colors.white} ${Colors.darkGray} ${Colors.darkGray} ${Colors.white}`,
    },
    activeTitleBar: {
        background: '#000080',
        padding: '2px 4px',
    },
    titleBarTextActive: {
        fontFamily: 'MSSerif',
        fontSize: 11,
        color: 'white',
        fontWeight: 'bold',
    },
    windowBody: {
        background: 'white',
        padding: 6,
        flexDirection: 'column',
    },
    windowBodyLinks: {
        fontFamily: 'MSSerif',
        fontSize: 11,
        marginBottom: 4,
    },
    windowBodyText: {
        fontFamily: 'MSSerif',
        fontSize: 11,
        marginBottom: 6,
    },
    messageBox: {
        flexDirection: 'column',
        border: '2px solid',
        borderColor: `${Colors.white} ${Colors.darkGray} ${Colors.darkGray} ${Colors.white}`,
        width: '70%',
        alignSelf: 'center',
    },
    messageBoxTitle: {
        background: '#000080',
        padding: '1px 4px',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    messageBoxClose: {
        color: 'white',
        fontSize: 10,
        cursor: 'pointer',
    },
    messageBoxBody: {
        background: Colors.lightGray,
        padding: 6,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
    },
    messageBoxText: {
        fontFamily: 'MSSerif',
        fontSize: 11,
    },
    okBtn: {
        fontFamily: 'MSSerif',
        fontSize: 11,
        padding: '2px 16px',
        background: Colors.lightGray,
        border: '2px solid',
        borderColor: `${Colors.white} ${Colors.darkGray} ${Colors.darkGray} ${Colors.white}`,
        cursor: 'pointer',
    },
    schemeRow: {
        alignItems: 'center',
        gap: 6,
        marginTop: 8,
    },
    settingsInfo: {
        flexDirection: 'column',
        gap: 4,
        marginBottom: 8,
    },
    settingsDesc: {
        fontFamily: 'MSSerif',
        fontSize: 11,
        color: '#404040',
    },
    settingsControls: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
    },
    settingsLeft: {
        flex: 1,
        flexDirection: 'column',
        gap: 4,
    },
    settingsRight: {
        flex: 1,
        flexDirection: 'column',
        gap: 4,
    },
    slider: {
        width: '100%',
    },
    sliderLabels: {
        justifyContent: 'space-between',
    },
    tinyText: {
        fontFamily: 'MSSerif',
        fontSize: 10,
    },
    resText: {
        fontFamily: 'MSSerif',
        fontSize: 11,
        textAlign: 'center',
        marginTop: 2,
    },
    colorBar: {
        height: 12,
        marginTop: 4,
        background: 'linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)',
        border: '1px solid #808080',
    },
    settingsButtons: {
        justifyContent: 'flex-end',
        gap: 6,
        marginTop: 12,
    },
    bottomButtons: {
        justifyContent: 'flex-end',
        gap: 6,
        marginTop: 8,
        paddingTop: 8,
    },
    bottomBtn: {
        fontFamily: 'MSSerif',
        fontSize: 12,
        padding: '3px 20px',
        background: Colors.lightGray,
        border: '2px solid',
        borderColor: `${Colors.white} ${Colors.darkGray} ${Colors.darkGray} ${Colors.white}`,
        cursor: 'pointer',
        minWidth: 70,
    },
};

export default DisplayProperties;
