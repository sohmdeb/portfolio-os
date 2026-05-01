import './App.css';
import Desktop from './components/os/Desktop';
import { DesktopSettingsProvider } from './constants/DesktopSettingsContext';

function App() {
    return (
        <div className="App">
            <DesktopSettingsProvider>
                <Desktop />
            </DesktopSettingsProvider>
        </div>
    );
}

export default App;
