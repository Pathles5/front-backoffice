// const API_URL_DEV = 'https://3j0l1da1ib.execute-api.eu-west-1.amazonaws.com/dev/';

// const API_INVOICES_METHODS = {
//   LIST: {
//     METHOD: 'GET',
//     ENDPOINT: 'api/v1/bill/list',
//   },
// };

// export const fetchInvoices = () => fetch(`${API_URL_DEV}${API_INVOICES_METHODS.LIST.ENDPOINT}`).then((res) => res.json());

export const fetchInvoices = () => fetch(`${import.meta.env.VITE_API_URL_DOMAIN_DEV}${import.meta.env.VITE_API_INVOICES_LIST_ENDPOINT}`).then((res) => res.json());
