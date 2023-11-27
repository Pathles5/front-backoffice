import TableInvoices from '../../components/Tables/TableInvoices/TableInvoices';
import { updateHeaderH1 } from '../../utils/applicationTools';
import { CATEGORY } from '../../enums/EnumCategory';

import { fetchData } from '../../utils/fetchData';
import { Suspense } from 'react';

const apiData = fetchData(`${import.meta.env.VITE_API_URL_DOMAIN_DEV}${import.meta.env.VITE_API_INVOICES_LIST_ENDPOINT}`);

export default function ListInvoices() {
  updateHeaderH1(CATEGORY.INVOICES);
  const data = apiData.read();
  return (
    <Suspense fallback={<>Loading...</>}>
      <TableInvoices input={data.data.items} />
    </Suspense>
  );
}
