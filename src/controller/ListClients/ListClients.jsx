import TableClients from '../../components/Tables/TableClients/TableClients';
import { updateHeaderH1 } from '../../utils/applicationTools';
import { CATEGORY } from '../../enums/EnumCategory';

import { fetchData } from '../../utils/generic/fetchData';
import { Suspense } from 'react';

const apiData = fetchData(`${import.meta.env.VITE_API_URL_DOMAIN_DEV}${import.meta.env.VITE_API_CLIENT_LIST_ENDPOINT}`);

export default function ListClients() {
  updateHeaderH1(CATEGORY.CLIENTS);
  const data = apiData.read();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TableClients input={data.data.items} />
    </Suspense>
  );
}
