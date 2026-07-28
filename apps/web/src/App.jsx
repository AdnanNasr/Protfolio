import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import { LanguageProvider } from '@/lib/LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/:locale" element={<HomePage />} />
                </Routes>
            </Router>
        </LanguageProvider>
    );
}

export default App;
