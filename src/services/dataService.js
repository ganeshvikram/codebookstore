async function getAuthDetails(){
    const token = sessionStorage.getItem('token');
    const cbid = sessionStorage.getItem('cbid');

    return {token,cbid}
}



export async function getUser(){

    const browseAuth = await getAuthDetails();


        const response = await fetch(`${process.env.REACT_APP_API_KEY}/600/users/${browseAuth.cbid}`,{
          method:"GET",
          headers:{"Content-Type": "application/json", Authorization: `Bearer ${browseAuth.token}`},
        });
        if (!response.ok) {
            const error = new Error(response.statusText);
            error.status = response.status; // attach custom info if needed
            throw error;
          }
        const data = await response.json();
        return data;


}

export async function createOrder(orderdetail){
    const browseAuth = await getAuthDetails();

    const response = await fetch(`${process.env.REACT_APP_API_KEY}/660/orders`,{  method:"POST",
        headers:{"Content-Type": "application/json", Authorization: `Bearer ${browseAuth.token}`},
        body:JSON.stringify(orderdetail)
    });
    if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status; // attach custom info if needed
        throw error;
      }
    const data = await response.json();

    return data;

}