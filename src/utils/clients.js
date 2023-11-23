// const API_URL_DEV = 'https://3j0l1da1ib.execute-api.eu-west-1.amazonaws.com/dev/';

// const API_CLIENTS_METHODS = {
//   LIST: {
//     METHOD: 'GET',
//     ENDPOINT: 'api/v1/client/list',
//   },
// };

// export const fetchClients = () => fetch(`${API_URL_DEV}${API_CLIENTS_METHODS.LIST.ENDPOINT}`).then((res) => res.json());
export const fetchClients = () => fetch(`${import.meta.env.VITE_API_URL_DOMAIN_DEV}${import.meta.env.VITE_API_CLIENT_LIST_ENDPOINT}`).then((res) => res.json());
