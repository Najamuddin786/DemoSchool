import { Route,Routes } from "react-router-dom"
import Home from "../pages/Home"
import Enquiry from "../pages/Enquiry"


export default function AllRoutes(){

        return <>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/enquiry" element={<Enquiry/>}/>
                </Routes>
                
        </>
}