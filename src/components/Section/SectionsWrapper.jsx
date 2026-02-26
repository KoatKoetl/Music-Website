import BandSection from "./BandSection";
import { bandsData } from "../../assets/BandsData/BandsData";

const SectionsWrapper = () => {
  return bandsData.map((bandObj, index) => {
    return (
      <BandSection key={index} bandData={bandObj[Object.keys(bandObj)[0]]} />
    );
  });
};

export default SectionsWrapper;
