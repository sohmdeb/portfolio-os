import React, { useState, useRef } from 'react';
import Window from '../os/Window';
import Colors from '../../constants/colors';
import { useDesktopSettings } from '../../constants/DesktopSettingsContext';

export interface DisplayPropertiesProps extends WindowAppProps {}

const TABS = ['Background', 'Screen Saver', 'Appearance', 'Settings'];

const WALLPAPERS = [
    { name: '(None)', url: null },
    { name: 'Clouds', url: '/wallpapers/clouds.png' },
    { name: 'Forest', url: '/wallpapers/forest.png' },
    { name: 'Setup', url: '/wallpapers/setup.png' },
    { name: 'Wallpaper 1', url: '/wallpapers/wallpaper1.png' },
    { name: 'Wallpaper 2', url: '/wallpapers/wallpaper2.png' },
    { name: 'Wallpaper 3', url: '/wallpapers/wallpaper3.png' },
    { name: 'Wallpaper 4', url: '/wallpapers/wallpaper4.png' },
    { name: 'Wallpaper 5', url: '/wallpapers/wallpaper5.png' },
];

const SOLID_COLORS = [
    '#008080', '#000080', '#800000', '#808000',
    '#008000', '#800080', '#000000', '#C0C0C0',
];

const SCREENSAVERS = ['(None)', '3D Maze', 'Starfield', 'Flying Windows', 'Mystify', 'Beziers'];
const SCHEMES = ['Windows Standard', 'Desert', 'Rainy Day', 'Rose', 'Slate', 'Spruce', 'High Contrast Black'];

const DisplayProperties: React.FC<DisplayPropertiesProps> = (props) => {
    const { settings, applySettings } = useDesktopSettings();

    const [activeTab, setActiveTab] = useState(0);
    const [selWallpaper, setSelWallpaper] = useState(() =>
        WALLPAPERS.findIndex(w => w.name === settings.wallpaperName) || 0
    );
    const [dispMode, setDispMode] = useState<'tile'|'center'|'stretch'>(settings.wallpaperMode);
    const [bgColor, setBgColor] = useState(settings.backgroundColor);
    const [selSS, setSelSS] = useState(0);
    const [ssTimeout, setSsTimeout] = useState(settings.screenSaverTimeout);
    const [selScheme, setSelScheme] = useState(0);
    const [resolution, setResolution] = useState(75);
    const [customWallpapers, setCustomWallpapers] = useState<{name:string;url:string}[]>([]);
    const fileRef = useRef<HTMLInputElement>(null);

    const allWallpapers = [...WALLPAPERS, ...customWallpapers];
    const currentWP = allWallpapers[selWallpaper] || allWallpapers[0];

    const handleBrowse = () => fileRef.current?.click();

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        const newWP = { name: file.name, url };
        setCustomWallpapers(prev => [...prev, newWP]);
        setSelWallpaper(allWallpapers.length); // select the new one
    };

    const handleApply = () => {
        const wp = allWallpapers[selWallpaper] || allWallpapers[0];
        applySettings({
            wallpaper: wp.url ? (wp.url.startsWith('blob:') ? wp.url : process.env.PUBLIC_URL + wp.url) : null,
            wallpaperName: wp.name,
            wallpaperMode: dispMode,
            backgroundColor: bgColor,
            screenSaver: SCREENSAVERS[selSS],
            screenSaverTimeout: ssTimeout,
            colorScheme: SCHEMES[selScheme],
            resolution: resolution < 33 ? '800 by 600' : resolution < 66 ? '1024 by 768' : '1920 by 1440',
        });
    };

    const handleOK = () => { handleApply(); props.onClose(); };

    const getPreviewBg = (): React.CSSProperties => {
        if (currentWP.url) {
            const url = currentWP.url.startsWith('blob:') ? currentWP.url : process.env.PUBLIC_URL + currentWP.url;
            if (dispMode === 'tile') return { backgroundImage: `url(${url})`, backgroundSize: '40%', backgroundRepeat: 'repeat' };
            if (dispMode === 'stretch') return { backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center' };
            return { backgroundImage: `url(${url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: bgColor };
        }
        return { backgroundColor: bgColor };
    };

    const renderMonitor = (content: React.CSSProperties) => (
        <div style={s.monitorOuter}>
            <div style={s.monitorBezel}>
                <div style={{ ...s.monitorScreen, ...content }} />
            </div>
            <div style={s.monitorStand} /><div style={s.monitorBase} />
        </div>
    );

    const renderBackground = () => (
        <div style={s.tabContent}>
            {renderMonitor(getPreviewBg())}
            <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFileUpload} />
            <div style={s.listsRow}>
                <div style={s.listGroup}>
                    <p style={s.label}>Solid Color</p>
                    <div style={s.colorGrid}>
                        {SOLID_COLORS.map(c => (
                            <div key={c} onMouseDown={() => { setBgColor(c); setSelWallpaper(0); }}
                                style={{ ...s.colorSwatch, backgroundColor: c, ...(bgColor === c && selWallpaper === 0 ? s.swatchSelected : {}) }} />
                        ))}
                    </div>
                </div>
                <div style={s.listGroup}>
                    <p style={s.label}>Wallpaper</p>
                    <div style={s.listBox}>
                        {allWallpapers.map((w, i) => (
                            <div key={w.name + i} style={{ ...s.listItem, ...(selWallpaper === i ? s.listItemSel : {}) }}
                                onMouseDown={() => setSelWallpaper(i)}>
                                <p style={{ ...s.listText, ...(selWallpaper === i ? { color: '#fff' } : {}) }}>{w.name}</p>
                            </div>
                        ))}
                    </div>
                    <div style={s.wpControls}>
                        <button style={s.btn} onMouseDown={handleBrowse}>Browse...</button>
                        <div style={s.radioRow}>
                            <p style={s.smallText}>Display:</p>
                            {(['tile','center','stretch'] as const).map(m => (
                                <label key={m} style={s.radioLabel}>
                                    <input type="radio" checked={dispMode===m} onChange={()=>setDispMode(m)} />
                                    <p style={s.smallText}>{m.charAt(0).toUpperCase()+m.slice(1)}</p>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderScreenSaver = () => (
        <div style={s.tabContent}>
            {renderMonitor({ background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' })}
            <div style={s.fieldset}>
                <p style={s.fieldsetLabel}>Screen Saver</p>
                <div style={s.row}>
                    <select style={s.select} value={selSS} onChange={e => setSelSS(+e.target.value)}>
                        {SCREENSAVERS.map((ss, i) => <option key={ss} value={i}>{ss}</option>)}
                    </select>
                    <button style={s.btn}>Settings...</button>
                    <button style={s.btn}>Preview</button>
                </div>
                <div style={s.row}>
                    <label style={s.checkLabel}><input type="checkbox" /><p style={s.smallText}>Password protected</p></label>
                    <button style={s.btn}>Change...</button>
                    <p style={s.smallText}>Wait:</p>
                    <input type="number" value={ssTimeout} onChange={e => setSsTimeout(+e.target.value)} style={s.numInput} />
                    <p style={s.smallText}>minutes</p>
                </div>
            </div>
            <div style={s.fieldset}>
                <p style={s.fieldsetLabel}>Energy saving features of monitor</p>
                <div style={s.row}><label style={s.checkLabel}><input type="checkbox" /><p style={s.smallText}>Low-power standby</p></label><input type="number" defaultValue={15} style={s.numInput} /><p style={s.smallText}>minutes</p></div>
                <div style={s.row}><label style={s.checkLabel}><input type="checkbox" /><p style={s.smallText}>Shut off monitor</p></label><input type="number" defaultValue={30} style={s.numInput} /><p style={s.smallText}>minutes</p></div>
            </div>
        </div>
    );

    const renderAppearance = () => (
        <div style={s.tabContent}>
            <div style={s.appPreview}>
                <div style={{ position: 'absolute', top: 8, left: 8, width: '60%', flexDirection: 'column' }}>
                    <div style={{ background: '#808080', padding: '2px 4px' }}><p style={{ ...s.smallText, color: '#c0c0c0' }}>Inactive Window</p></div>
                </div>
                <div style={{ position: 'absolute', top: 28, left: 28, width: '72%', flexDirection: 'column', border: `2px solid`, borderColor: `${Colors.white} ${Colors.darkGray} ${Colors.darkGray} ${Colors.white}` }}>
                    <div style={{ background: '#000080', padding: '2px 4px' }}><p style={{ ...s.smallText, color: '#fff', fontWeight: 'bold' }}>Active Window</p></div>
                    <div style={{ background: '#fff', padding: 6, flexDirection: 'column' }}>
                        <p style={s.smallText}>Normal &nbsp;<span style={{ color: '#808080' }}>Disabled</span>&nbsp;<span style={{ background: '#000080', color: '#fff', padding: '0 4px' }}>Selected</span></p>
                        <p style={{ ...s.smallText, marginTop: 4 }}>Window Text</p>
                        <div style={{ flexDirection: 'column', border: `2px solid`, borderColor: `${Colors.white} ${Colors.darkGray} ${Colors.darkGray} ${Colors.white}`, width: '65%', alignSelf: 'center', marginTop: 6 }}>
                            <div style={{ background: '#000080', padding: '1px 4px', justifyContent: 'space-between', alignItems: 'center' }}><p style={{ ...s.smallText, color: '#fff', fontWeight: 'bold' }}>Message Box</p><span style={{ color: '#fff', fontSize: 10, cursor: 'pointer' }}>✕</span></div>
                            <div style={{ background: Colors.lightGray, padding: 6, flexDirection: 'column', alignItems: 'center', gap: 4 }}><p style={s.smallText}>Message Text</p><button style={s.btn}>OK</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={s.row}>
                <p style={s.label}>Scheme:</p>
                <select style={{ ...s.select, flex: 1 }} value={selScheme} onChange={e => setSelScheme(+e.target.value)}>
                    {SCHEMES.map((sc, i) => <option key={sc} value={i}>{sc}</option>)}
                </select>
                <button style={s.btn}>Save As...</button><button style={s.btn}>Delete</button>
            </div>
        </div>
    );

    const renderSettings = () => (
        <div style={s.tabContent}>
            {renderMonitor({ background: 'linear-gradient(135deg, #4a86c8, #6ba5d7)', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', padding: 2, boxSizing: 'border-box' })}
            <p style={s.smallText}>Display: Default Monitor on DebOS Graphics</p>
            <div style={{ ...s.listsRow, marginTop: 8 }}>
                <div style={s.listGroup}>
                    <p style={s.label}>Screen resolution</p>
                    <input type="range" min={0} max={100} value={resolution} onChange={e => setResolution(+e.target.value)} style={{ width: '100%' }} />
                    <div style={{ justifyContent: 'space-between' }}><p style={s.tinyText}>Less</p><p style={s.tinyText}>More</p></div>
                    <p style={{ ...s.smallText, textAlign: 'center' }}>{resolution < 33 ? '800 by 600' : resolution < 66 ? '1024 by 768' : '1920 by 1440'} pixels</p>
                </div>
                <div style={s.listGroup}>
                    <p style={s.label}>Color quality</p>
                    <select style={s.select}><option>Highest (32 bit)</option><option>High (24 bit)</option><option>Medium (16 bit)</option></select>
                    <div style={{ height: 12, marginTop: 4, background: 'linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)', border: '1px solid #808080' }} />
                </div>
            </div>
            <div style={{ justifyContent: 'flex-end', gap: 6, marginTop: 12 }}><button style={s.btn}>Troubleshoot...</button><button style={s.btn}>Advanced...</button></div>
        </div>
    );

    const tabs = [renderBackground, renderScreenSaver, renderAppearance, renderSettings];

    return (
        <Window top={80} left={200} width={430} height={510} windowTitle="Display Properties" windowBarIcon="displayIcon"
            closeWindow={props.onClose} onInteract={props.onInteract} minimizeWindow={props.onMinimize}>
            <div style={s.container}>
                <div style={s.tabs}>{TABS.map((t, i) => (
                    <div key={t} style={{ ...s.tab, ...(activeTab === i ? s.tabActive : {}) }} onMouseDown={() => setActiveTab(i)}>
                        <p style={s.tabText}>{t}</p></div>
                ))}</div>
                <div style={s.tabBody}>{tabs[activeTab]()}</div>
                <div style={s.bottomBtns}>
                    <button style={s.bottomBtn} onMouseDown={handleOK}>OK</button>
                    <button style={s.bottomBtn} onMouseDown={props.onClose}>Cancel</button>
                    <button style={s.bottomBtn} onMouseDown={handleApply}>Apply</button>
                </div>
            </div>
        </Window>
    );
};

const s: StyleSheetCSS = {
    container: { flexDirection: 'column', width: '100%', height: '100%', padding: 8, boxSizing: 'border-box', background: Colors.lightGray, fontFamily: 'MSSerif', fontSize: 12 },
    tabs: { display: 'flex', flexDirection: 'row', marginBottom: -1, zIndex: 1 },
    tab: { padding: '4px 12px', cursor: 'pointer', border: `1px solid ${Colors.darkGray}`, borderBottom: 'none', background: Colors.lightGray, marginRight: 2, borderTopLeftRadius: 2, borderTopRightRadius: 2 },
    tabActive: { background: Colors.lightGray, borderBottom: `1px solid ${Colors.lightGray}`, fontWeight: 'bold', position: 'relative', zIndex: 2 },
    tabText: { fontFamily: 'MSSerif', fontSize: 12 },
    tabBody: { flex: 1, border: `2px solid`, borderColor: `${Colors.white} ${Colors.darkGray} ${Colors.darkGray} ${Colors.white}`, padding: 12, background: Colors.lightGray, flexDirection: 'column', overflow: 'auto' },
    tabContent: { flexDirection: 'column', flex: 1, gap: 8 },
    monitorOuter: { alignSelf: 'center', flexDirection: 'column', alignItems: 'center', marginBottom: 6 },
    monitorBezel: { width: 170, height: 120, background: '#b8b8a8', border: '3px solid', borderColor: '#d4d4c8 #808070 #808070 #d4d4c8', borderRadius: 4, padding: 12, boxSizing: 'border-box' },
    monitorScreen: { width: '100%', height: '100%', background: '#008080', border: '2px solid', borderColor: '#404040 #c0c0c0 #c0c0c0 #404040', overflow: 'hidden' },
    monitorStand: { width: 36, height: 8, background: '#b8b8a8', borderLeft: '2px solid #d4d4c8', borderRight: '2px solid #808070' },
    monitorBase: { width: 72, height: 5, background: '#b8b8a8', border: '1px solid', borderColor: '#d4d4c8 #808070 #808070 #d4d4c8' },
    listsRow: { display: 'flex', flexDirection: 'row', gap: 10, flex: 1 },
    listGroup: { flex: 1, flexDirection: 'column', gap: 4 },
    label: { fontFamily: 'MSSerif', fontSize: 12, marginBottom: 2 },
    listBox: { flexDirection: 'column', border: '2px solid', borderColor: `${Colors.darkGray} ${Colors.white} ${Colors.white} ${Colors.darkGray}`, background: 'white', height: 85, overflow: 'auto' },
    listItem: { padding: '1px 4px', cursor: 'pointer' },
    listItemSel: { background: '#000080' },
    listText: { fontFamily: 'MSSerif', fontSize: 12 },
    colorGrid: { display: 'flex', flexWrap: 'wrap', gap: 3 },
    colorSwatch: { width: 20, height: 20, border: '2px solid', borderColor: `${Colors.darkGray} ${Colors.white} ${Colors.white} ${Colors.darkGray}`, cursor: 'pointer' },
    swatchSelected: { borderColor: `${Colors.white} ${Colors.darkGray} ${Colors.darkGray} ${Colors.white}` },
    btn: { fontFamily: 'MSSerif', fontSize: 11, padding: '2px 8px', background: Colors.lightGray, border: '2px solid', borderColor: `${Colors.white} ${Colors.darkGray} ${Colors.darkGray} ${Colors.white}`, cursor: 'pointer' },
    wpControls: { flexDirection: 'column', gap: 4, marginTop: 4 },
    radioRow: { alignItems: 'center', gap: 6, marginTop: 4 },
    radioLabel: { alignItems: 'center', gap: 2, cursor: 'pointer' },
    smallText: { fontFamily: 'MSSerif', fontSize: 11 },
    tinyText: { fontFamily: 'MSSerif', fontSize: 10 },
    checkLabel: { alignItems: 'center', gap: 4, cursor: 'pointer' },
    fieldset: { flexDirection: 'column', border: `2px solid`, borderColor: `${Colors.darkGray} ${Colors.white} ${Colors.white} ${Colors.darkGray}`, padding: 8, paddingTop: 14, marginBottom: 8, gap: 6, position: 'relative' },
    fieldsetLabel: { fontFamily: 'MSSerif', fontSize: 12, position: 'absolute', top: -8, left: 8, background: Colors.lightGray, padding: '0 4px' },
    row: { alignItems: 'center', gap: 6, marginTop: 4 },
    select: { fontFamily: 'MSSerif', fontSize: 12, padding: '1px 4px', border: '2px solid', borderColor: `${Colors.darkGray} ${Colors.white} ${Colors.white} ${Colors.darkGray}`, background: 'white', minWidth: 110 },
    numInput: { fontFamily: 'MSSerif', fontSize: 12, width: 40, border: '2px solid', borderColor: `${Colors.darkGray} ${Colors.white} ${Colors.white} ${Colors.darkGray}`, textAlign: 'center' },
    appPreview: { border: '2px solid', borderColor: `${Colors.darkGray} ${Colors.white} ${Colors.white} ${Colors.darkGray}`, background: '#008080', height: 170, padding: 12, position: 'relative', flexDirection: 'column', overflow: 'hidden' },
    bottomBtns: { justifyContent: 'flex-end', gap: 6, marginTop: 8, paddingTop: 8 },
    bottomBtn: { fontFamily: 'MSSerif', fontSize: 12, padding: '3px 20px', background: Colors.lightGray, border: '2px solid', borderColor: `${Colors.white} ${Colors.darkGray} ${Colors.darkGray} ${Colors.white}`, cursor: 'pointer', minWidth: 70 },
};

export default DisplayProperties;
