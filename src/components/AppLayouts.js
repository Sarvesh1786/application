import React from 'react'
import {Outlet} from "react-router-dom";
import Topmenu from './Topmenu';

 const AppLayouts = () => {
  return (
    <>
<Topmenu/>
  {/* // main  html  hai  */}

       <main>
        <Outlet />

     {/*  <-- nested routes rendered here
       */}
        
        
        </main> 
    </>
  )
}
export default AppLayouts ;