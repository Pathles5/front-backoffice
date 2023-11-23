import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

import { fetchInvoices } from '../../utils/invoices';
import TableInvoices from '../../components/Tables/TableInvoices/TableInvoices';

const queryClient = new QueryClient();

export default function ListInvoices() {
  return (
    <QueryClientProvider client={queryClient}>
      <DoListInvoices />
    </QueryClientProvider>
  );
}

function DoListInvoices() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['bills'],
    queryFn: fetchInvoices,
  });

  if (isLoading) return 'Loading...';
  if (error) return `An error has occurred: ${error.message}`;
  // const clients = data.data.items;
  return (
    <TableInvoices input={data.data.items} />
  );
}
