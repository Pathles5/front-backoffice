import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

import { fetchClients } from '../../utils/clients';
import TableClients from '../../components/Tables/TableClients/TableClients';

const queryClient = new QueryClient();

export default function ListClients() {
  return (
    <QueryClientProvider client={queryClient}>
      <DoListClients />
    </QueryClientProvider>
  );
}

function DoListClients() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['clients'],
    queryFn: fetchClients,
  });

  if (isLoading) return 'Loading...';
  if (error) return `An error has occurred: ${error.message}`;
  // const clients = data.data.items;
  return (
    <TableClients input={data.data.items} />
  );
}
