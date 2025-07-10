export async function login(authdetail){
    const response = await fetch(`${process.env.REACT_APP_API_KEY}/login`,{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(authdetail)
      }
      )
      if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status; // attach custom info if needed
        throw error;
      }
      const data = await response.json();
      if(data.accessToken){
        sessionStorage.setItem('token',data.accessToken)
        sessionStorage.setItem('cbid',data.user.id)
      }
      return data;
}

export async function register(authdetail){

    const response = await fetch(`${process.env.REACT_APP_API_KEY}/register`,{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(authdetail)
        }
      )

      if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status; // attach custom info if needed
        throw error;
      }
  
      const data = await response.json();
      if(data.accessToken){
        sessionStorage.setItem('token',data.accessToken)
        sessionStorage.setItem('cbid',data.user.id)
      }
      return data;
}

export async function logout(){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('cbid')
}