import './TableInvoices.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import PropTypes from 'prop-types';

export default function TableInvoices(props) {
  const { input } = props;
  input.filter((item)=>item.total).forEach((item)=>item.total=parseInt(item.total)/100);
  return (
    <DataTable value={input} /* tableStyle={} */ rows={import.meta.env.VITE_NUM_ROWS_DEFAULT} paginator>
      <Column field="id" header="ID" sortable />
      <Column field="client_id" header="ID CLIENTE" />
      <Column field="car_id" header="ID COCHE" />
      <Column field="total" header="IMPORTE" />
      <Column field="is_paid" header="PAGADO" />
      <Column field="print_date" header="CREACION FACTURA" />
      <Column field="is_paid" header="FACTURA CERRADA" />
    </DataTable>
  );
}

TableInvoices.propTypes = {
  input: PropTypes.array.isRequired,
};
