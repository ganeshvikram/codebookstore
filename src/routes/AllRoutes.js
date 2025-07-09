import { Route, Routes } from "react-router";
import { HomePage, ProductsList ,ProductDetail,Login,Register,CartPage, OrderPage} from "../pages";
import { ProtuctedRoutes } from "./ProtuctedRoutes";

export const AllRouters = () => {

    return(
            <>
            <Routes>
                <Route path="/" element = {<HomePage/>}/>
                <Route path="/products" element = {<ProductsList/>}/>
                <Route path="/products/:id" element = {<ProductDetail/>}/>
                <Route path="/cart" element = {<ProtuctedRoutes><CartPage/></ProtuctedRoutes>}/>
                <Route path="/order" element = {<ProtuctedRoutes><OrderPage/></ProtuctedRoutes>}/>
                <Route path="/login" element = {<Login/>}/>
                <Route path="/register" element = {<Register/>}/>
            </Routes>
            </>

    )

}