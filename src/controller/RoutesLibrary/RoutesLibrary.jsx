import {Routes, Route} from 'react-router-dom'
import { LandingPage } from '../../pages-placeholder/LandingPage';
import ListClients from '../ListClients/ListClients';
import ListInvoices from '../ListInvoices/ListInvoices';

export const RoutesLibrary = () => (
  <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/clients' element={<ListClients />} />
    <Route path='/invoices' element={<ListInvoices />} />
    
{/* 404 Not found soft: solo en apariencia, el status code y demas no cambia */}
    <Route path='*' element={ <h1>Not Found</h1>} /> 
  </Routes>
);