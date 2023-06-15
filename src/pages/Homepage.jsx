import Intro from '../layout/Intro';
import FutureProjectCarousel from '../layout/FutureProjectCarousel';
import InternshipProjectCarousel from '../layout/InternshipProjectCarousel';
import BCProjectCarousel from '../layout/BCProjectCarousel';
import About from '../layout/About';
import SkillCertGallery from '../layout/SkillCertGallery';
import AppLayout from '../layout/AppLayout';

export default function Homepage() {
    return (
        <AppLayout>
            <Intro />
            <FutureProjectCarousel />
            <InternshipProjectCarousel />
            <BCProjectCarousel />
            <About />
            <SkillCertGallery />
        </AppLayout>
    )
}