import Footer from "/src/components/footer";
import Header from "/src/components/header";
import Main from "/src/components/main";
import Tools from "/src/components/tools";
import SectionsWrapper from "./components/Section/SectionsWrapper";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <SectionsWrapper />
      <Tools />
      <Footer />
    </>
  );
};

export default App;
