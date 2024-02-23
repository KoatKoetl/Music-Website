import KINOSection from "/src/components/KINO-Section/bandSection";
import NautilusPompiliusSection from "/src/components/NautilusPompilius-Section/bandSection";
import Footer from "/src/components/footer";
import Header from "/src/components/header";
import Main from "/src/components/main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <KINOSection />
      <NautilusPompiliusSection />
      <Footer />
    </>
  );
};

export default App;
