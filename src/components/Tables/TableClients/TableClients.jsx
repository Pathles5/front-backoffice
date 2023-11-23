import './TableClients.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import PropTypes from 'prop-types';
import ButtonBox from '../ButtonBox/ButtonBox';

export default function TableClients(props) {
  const { input } = props;
  return (
    <DataTable value={input} /* tableStyle={} */ rows={import.meta.env.VITE_NUM_ROWS_DEFAULT} paginator>
      <Column field="id" header="ID" sortable />
      <Column field="name" header="NOMBRE" />
      <Column field="last_name" header="APELLIDO" />

      <Column headerStyle={{ width: '5rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={<ButtonBox />} />
    </DataTable>
  );
}

TableClients.propTypes = {
  input: PropTypes.array.isRequired,
};
