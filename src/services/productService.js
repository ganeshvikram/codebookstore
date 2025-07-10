export async function getProductList(searchTrem){
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products?${searchTrem || ''}`);
    if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status; // attach custom info if needed
        throw error;
      }
    const data = await response.json();
    return data

}

export async function getProduct(id){

    const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`);
    if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status; // attach custom info if needed
        throw error;
      }
      const data = await response.json();
      return data
    
}

export async function getFeatureProductList(){
    const response = await fetch(`${process.env.REACT_APP_API_URL}/featured_products`);
    if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status; // attach custom info if needed
        throw error;
      }
    const data = await response.json();
    //console.log(data);
    return data
    
}