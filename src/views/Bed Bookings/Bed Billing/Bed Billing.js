import React, { useState } from "react";
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";

const Bed_billing =()=>{
    return(
        <>
         <div className="container-fluid">
        <div className="Bedbilling">
            <div className="row d-flex"> 
            <div className="col-sm-10"><h6>Bed Billing</h6></div>
            
            </div> 
            <div class="row clearfix" style={{paddingTop:'20px', marginLeft:'5px'}}>
            <table class="table">
                 <thead>
                   <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Patient Name</th>
                      <th scope="col">Bed charges per day</th>
                      <th scope="col">miscellaneous</th>
                      <th scope="col">Total charges</th>
                   </tr>
                 </thead>
               <tbody>
             <tr>
                <th scope="row">1</th>
                <td>Dipanshu</td>
                <td>400</td>
                <td>300</td>
                <td>700 </td>
            </tr>
            <tr>
              <th scope="row">2</th>
                <td>Dewesh</td>
                <td>4000</td>
                <td>300</td>
                <td>4300 </td>
                
            </tr>
            <tr>
             <th scope="row">3</th>
                <td>Raju</td>
                <td>2000</td>
                <td>500</td>
                <td>2500 </td>
            </tr>
            
            <tr>
                <th scope="row">4</th>
                <td>Ashish</td>
                <td>1000</td>
                <td>500</td>
                <td>1500 </td>
            </tr>
  
   
              </tbody>
            </table>
               

            </div>
           {/* <div className=" texta align-center"><button style={{background:'#056078', color:'white', borderRadius:'5px'}} type="button">Save</button></div>*/}
            

        </div>
        </div>
        

        </>

    )
}
export default Bed_billing;