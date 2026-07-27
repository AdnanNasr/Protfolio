import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import AboutMe from '@/components/portfolio/AboutMe';
import Education from '@/components/portfolio/Education';
import AreaOfExperience from '@/components/portfolio/AreasOfExperience';
import TechStack from '@/components/portfolio/TechStack';
import Projects from '@/components/portfolio/Projects';
import Services from '@/components/portfolio/Services';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-[#0B0C10] text-slate-200 antialiased selection:bg-cyan-400/30">
            {/* Ambient background glows */}
            <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full bg-indigo-600/10 blur-[130px]" />
            </div>

            <div className="relative z-10">
                <Navbar />
                <main>
                    <Hero />
                    <AboutMe />
                    <Education/>
                    <AreaOfExperience/>
                    <Projects />
                    <TechStack />
                    <Services/>
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;
