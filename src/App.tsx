import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import SkillsSection from './components/SkillSection/SkillsSection';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import Timeline from './components/Timeline/Timeline';
import ProjectsSection from './components/ProjectSection/ProjectSection';
import EventSection from './components/EventSection/EventSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <SkillsSection />
      <ExperienceSection />
      <Timeline />
      <ProjectsSection />
      <EventSection />
      <Footer />
    </>
  );
}

export default App;