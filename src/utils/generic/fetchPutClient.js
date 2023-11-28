export async  function fetchPutClient(url, method='GET',body,headers) {
    console.log(url, method,body,headers);
    let promise = 'ojete';
    try {
        promise = await fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
        });
        // .then((response) => response.json())
        // .then((data) => data)
        // .catch((e)=>{
        //     console.log('Muerte silenciosa')
        //     console.log(e);
        //     return e
        // });
        // const result = promise.json();
    } catch (error) {
        console.log('error');
        console.log(error);
        promise = error
    }
    return promise;
}