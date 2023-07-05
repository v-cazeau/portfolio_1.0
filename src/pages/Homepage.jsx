import Intro from '../layout/Intro';
import Portfolio from '../layout/Portfolio';
import FutureProjectCarousel from '../layout/FutureProjectCarousel';
import InternshipProjectCarousel from '../layout/InternshipProjectCarousel';
import About from '../layout/About';
import CertGallery from '../layout/CertGallery';
import Skills from '../layout/Skills';
import AppLayout from '../layout/AppLayout';

export default function Homepage() {
    return (
        <AppLayout>
            <Intro />
            <section id="portfolio">
            <h2 className="text-center">Portfolio</h2>
            <Portfolio />
            <FutureProjectCarousel />
            <InternshipProjectCarousel />
            </section>
            <About />
            <Skills />
            <CertGallery />
            {/* <div className="bottom-scene-container">
                <Social />
                <Footer />
            </div> */}
        </AppLayout>
    )
}