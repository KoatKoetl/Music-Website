import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import Tools from "@/components/tools";
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
