import { Route, Routes } from "react-router";
import { HomePage, ProductsList ,ProductDetail} from "../pages";

export const AllRouters = () => {

    return(
            <>
            <Routes>
                <Route path="/" element = {<HomePage/>}/>
                <Route path="/products" element = {<ProductsList/>}/>
                <Route path="/products/:id" element = {<ProductDetail/>}/>
            </Routes>
            </>

    )

}