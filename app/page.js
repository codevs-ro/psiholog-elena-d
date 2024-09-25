import HomeFirst from "./components/HomePage/HomeFirst";
import HomeSecond from "./components/HomePage/HomeSecond";
import Contact from "./components/Contact";
const HomePage = () => {
  return (
    <main>
      <HomeFirst />
      <HomeSecond />
      <Contact image="/contact-img-1.png" />
    </main>
  );
};

export default HomePage;
