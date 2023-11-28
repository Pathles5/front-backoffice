// const API_URL_DEV = 'https://3j0l1da1ib.execute-api.eu-west-1.amazonaws.com/dev/';

// const API_CLIENTS_METHODS = {
//   LIST: {
//     METHOD: 'GET',
//     ENDPOINT: 'api/v1/client/list',
//   },
// };

// export const fetchClients = () => fetch(`${API_URL_DEV}${API_CLIENTS_METHODS.LIST.ENDPOINT}`).then((res) => res.json());
// export const fetchClients = () => fetch(`${import.meta.env.VITE_API_URL_DOMAIN_DEV}${import.meta.env.VITE_API_CLIENT_LIST_ENDPOINT}`).then((res) => res.json());

const transformFormClient = (clientForm) => {
    return {
        born_date: clientForm.born_date, //"1992-07-29",
        last_name: clientForm.last_name, //"Cobos Garrido",
        phone2: clientForm.phone2, //"",
        document_id: clientForm.document_id, //"12312312A",
        address: {
            street_number: clientForm.street_number, //"34",
            postal_code: clientForm.postal_code, //"28915",
            province: clientForm.province, //"Madrid",
            city: clientForm.city, //"Leganes",
            street_name: clientForm.street_name, //"Calle Alpujarras"
        },
        id: clientForm.id, //"1234",
        email: clientForm.email, //"alopez@example.com",
        phone: clientForm.phone, //"666999666",
        name: clientForm.name, //"Estela",
        ldpd: clientForm.ldpd==='on', //true,
        type: clientForm.type, //"person"
    };
};

export { transformFormClient };