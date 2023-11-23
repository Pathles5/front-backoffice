import { CATEGORY } from "../enums/EnumCategory";
import { updateHeaderH1 } from "../utils/applicationTools";

export const LandingPage = () => {
  // console.log(CATEGORY.INDEX);
  updateHeaderH1(CATEGORY.INDEX);
  return (
    <>
      <h1>Inicio</h1>
      <p>This is a place for LandingPage</p>
    </>
  );
};