import { CATEGORY } from "../enums/EnumCategory";
import { updateHeaderH1 } from "../utils/applicationTools";

export const Invoices = () => {
  // console.log(CATEGORY.INVOICES);
  updateHeaderH1(CATEGORY.INVOICES);
  return (
    <>
      <h1>Facturas</h1>
      <p>This is a place for Invoices</p>
    </>
  );
};