export async function login(authdetail){

    const response = await fetch("http://localhost:3001/login",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(authdetail)
      }
      )
  
      const data = await response.json();

      if(data.accessToken){
  
        sessionStorage.setItem('token',data.accessToken)
        sessionStorage.setItem('cbid',data.user.id)
  
      }

      return data;

}

export async function register(authdetail){

    const response = await fetch("http://localhost:3001/register",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(authdetail)
      }
      )
  
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