import { useState } from "react";

const useClientPOST = (/* { additionalData } */) =>{
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
        setStatus('loading');
        setMessage('');
    
        const data = Array.from(e.target.elements)
          .filter((input) => input.name)
          .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});
    
        /* if (additionalData) {
          Object.assign(data, additionalData); //copia las propiedades de uno a otro.
        } */
    
        const finalFormEndpoint = e.target.action;
        // const finalFormEndpoint = `https://3j0l1da1ib.execute-api.eu-west-1.amazonaws.com/dev/api/v1/client/id/${data.id}`

        fetch(finalFormEndpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }).then((response) => {
            if (response.status !== 200) {
              throw new Error(response.statusText);
            }
    
            return response.json();
          })
          .then(() => {
            setMessage("We'll be in touch soon.");
            setStatus('success');
          })
          .catch((err) => {
            setMessage(err.toString());
            setStatus('error');
          });
      };
      return { handleSubmit, status, message };
};

export default useClientPOST;