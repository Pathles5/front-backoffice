function getSuspender(promise) {
    let status = 'pending';
    let response;

    const suspender = promise.then(
        (res) => {
            status = 'success';
            response = res;
        },
        (err) => {
            status = 'error';
            response = err;
        }
    );

    const read = () => {
        switch (status) {
            case 'pending':
                throw suspender;
            case 'error':
                throw response;
            default:
                return response;
        }
    }
    return { read };
}


export function fetchData(url, method='GET',body,headers) {
    console.log(url, method,body,headers);
    const promise = fetch(url, {
        method: method,
        body: JSON.stringify(body),
        // headers: {
        //     'Content-Type': 'application/json',
        //     'Accept': '*/*'
        // }
        })
        .then((response) => response.json())
        .then((data) => data)
        .catch((e)=>{
            console.log('Muerte silenciosa')
            console.log(e);
            return e
        });
    return getSuspender(promise);
}