import { CATEGORY } from '../enums/EnumCategory';
import { updateHeaderH1 } from '../utils/applicationTools';

export const Clients = () => {
  // console.log(CATEGORY.CLIENTS);
  updateHeaderH1(CATEGORY.CLIENTS);
  return (
    <>
      <h1>Clientes</h1>
      <p>This is a place for Clients</p>
    </>
  )
};