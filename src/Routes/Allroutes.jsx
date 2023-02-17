import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Mapview from "./Mapview";
import Signup from "./Signup";


export default function Allroutes(){

    return (
        <Routes>
            <Route path='/mapview' element={
             
                <Mapview/>
                
            }/>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path="/dashboard" element={
                <PrivateRoute>
                 <Dashboard/>
               </PrivateRoute>
            }/>

        </Routes>
    )
}