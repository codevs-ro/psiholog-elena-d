import Contact from "../components/Contact";
import AboutFirst from "../components/AboutPage/AboutFirst";
import AboutSecond from "../components/AboutPage/AboutSecond";
const AboutPage = () => {
  return (
    <main>
      <AboutFirst />
      <AboutSecond />
      <Contact image="/contact-img-2.png" />
    </main>
  );
};

export default AboutPage;
