import React, { useState } from 'react'
import './Patient_Doctor_Schedule.css'

function Patient_Doctor_Schedule() {
const[Patientscheduledata,setPatientscheduledata]=useState({
    Token:'',
    Date:'',
    Patientname:'',
    Department:'',
    Doctor:''
})

const handlechange=(e)=>
{
setPatientscheduledata({...Patientscheduledata,[e.target.name]:e.target.value});
};
console.log(Patientscheduledata);

  return (
    <form  >
    <div className='Patient-doctor-Body'>
    <h1 className= 'Patient-doctor-schedule-head'>PATIENT APPOINMENT STATUS</h1>
       <table class="Patient-doctor-schedule-table-bordered">
 <thead>
   <tr>
     <th scope="col">Token No</th>
     <th scope="col">Date</th>
     <th scope="col">Patient name</th>
     <th scope="col">Department</th>
     <th scope="col">Doctor</th>
     <th scope="col">Status</th>
   </tr>
 </thead>
 <tbody>
   <tr>
   <th scope="row"><td><input type="text" name="Token" onChange={handlechange}/></td></th>
     <td><input type="date" name="Date" onChange={handlechange} /></td>
     <td><input type="text" name="Patientname" onChange={handlechange}/></td>
     <td><input type="text" name="Department" onChange={handlechange}/></td>                  
     <td><select name="Doctor" ><option  selected>Select menu</option>
                         <option value="1">Dr.</option>
                         <option value="2">Dr.</option>
                         <option value="3">Dr.</option>
                         <option value="4">Dr.</option>
                         <option value="5">Dr.</option>
                         <option value="6">Dr.</option>
                         <option value="7">Dr.</option>
                         </select></td>
    <td><button className='Patient-doctor-schedule-button1'>Approval</button></td>
    <td><button className='Patient-doctor-schedule-button2'>Pending</button></td>
   </tr>
   <tr>
   <th scope="row"><td><input type="text" name="Token"/></td></th>
     <td><input type="date"name="Date"/></td>
     <td><input type="text" name="Patientname"/></td>
     <td><input type="text"name="Department"/></td>                 
     <td><select name="Doctor"><option selected>Select menu</option>
                         <option value="1">Dr.</option>
                         <option value="2">Dr.</option>
                         <option value="3">Dr.</option>
                         <option value="4">Dr.</option>
                         <option value="5">Dr.</option>
                         <option value="6">Dr.</option>
                         <option value="7">Dr.</option>
                         </select></td>
     <td><button className='Patient-doctor-schedule-button1'>Approval</button></td>
     <td><button className='Patient-doctor-schedule-button2'>Pending</button></td>
   </tr>
   <tr>
   <th scope="row"><td><input type="text" name="Token"/></td></th>
     <td><input type="date" name="Date"/></td>
     <td><input type="text" name="Patientname"/></td>
     <td><input type="text" name="Department"/></td>                 
     <td><select name="Doctor"><option selected>Select menu</option>
                         <option value="1">Dr.</option>
                         <option value="2">Dr.</option>
                         <option value="3">Dr.</option>
                         <option value="4">Dr.</option>
                         <option value="5">Dr.</option>
                         <option value="6">Dr.</option>
                         <option value="7">Dr.</option>
                         </select></td>
     <td><button className='Patient-doctor-schedule-button1'>Approval</button></td>
     <td><button className='Patient-doctor-schedule-button2'>Pending</button></td>
   </tr>
   <tr>
   <th scope="row"><td><input type="text" name="Token"/></td></th>
     <td><input type="date" name="Date"/></td>
     <td><input type="text" name="Patientname"/></td>
     <td><input type="text" name="Department"/></td>                 
     <td><select name="Doctor"><option selected>Select menu</option>
                         <option value="1">Dr.</option>
                         <option value="2">Dr.</option>
                         <option value="3">Dr.</option>
                         <option value="4">Dr.</option>
                         <option value="5">Dr.</option>
                         <option value="6">Dr.</option>
                         <option value="7">Dr.</option>
                         </select></td>
     <td><button className='Patient-doctor-schedule-button1'>Approval</button></td>
     <td><button className='Patient-doctor-schedule-button2'>Pending</button></td>
   </tr>
   <tr>
   <th scope="row"><td><input type="text" name="Token"/></td></th>
     <td><input type="date" name="Date"/></td>
     <td><input type="text" name="Patientname"/></td>
     <td><input type="text" name="Department"/></td>                 
     <td><select name="Doctor"><option selected>Select menu</option>
                         <option value="1">Dr.</option>
                         <option value="2">Dr.</option>
                         <option value="3">Dr.</option>
                         <option value="4">Dr.</option>
                         <option value="5">Dr.</option>
                         <option value="6">Dr.</option>
                         <option value="7">Dr.</option>
                         </select></td>
     <td><button className='Patient-doctor-schedule-button1'>Approval</button></td>
     <td><button className='Patient-doctor-schedule-button2'>Pending</button></td>
   </tr>
   <tr>
   <th scope="row"><td><input type="text" name="Token"/></td></th>
     <td><input type="date" name="Date"/></td>
     <td><input type="text" name="Patientname"/></td>
     <td><input type="text" name="Department"/></td>                 
     <td><select name="Doctor"><option selected>Select menu</option>
                         <option value="1">Dr.</option>
                         <option value="2">Dr.</option>
                         <option value="3">Dr.</option>
                         <option value="4">Dr.</option>
                         <option value="5">Dr.</option>
                         <option value="6">Dr.</option>
                         <option value="7">Dr.</option>
                         </select></td>
     <td><button className='Patient-doctor-schedule-button1'>Approval</button></td>
     <td><button className='Patient-doctor-schedule-button2'>Pending</button></td>
   </tr>
   <tr>
   <th scope="row"><td><input type="text" name="Token"/></td></th>
     <td><input type="date" name="Date"/></td>
     <td><input type="text" name="Patientname"/></td>
     <td><input type="text" name="Department"/></td>                 
     <td><select name="Doctor"><option selected>Select menu</option>
                         <option value="1">Dr.</option>
                         <option value="2">Dr.</option>
                         <option value="3">Dr.</option>
                         <option value="4">Dr.</option>
                         <option value="5">Dr.</option>
                         <option value="6">Dr.</option>
                         <option value="7">Dr.</option>
                         </select></td>
     <td><button className='Patient-doctor-schedule-button1'>Approval</button></td>
     <td><button className='Patient-doctor-schedule-button2'>Pending</button></td>
   </tr>
    <tr>
   <th scope="row"><td><input type="text" name="Token"/></td></th>
     <td><input type="date" name="Date"/></td>
     <td><input type="text" name="Patientname"/></td>
     <td><input type="text" name="Department"/></td>                 
     <td><select name="Doctor"><option selected>Select menu</option>
                         <option value="1">Dr.</option>
                         <option value="2">Dr.</option>
                         <option value="3">Dr.</option>
                         <option value="4">Dr.</option>
                         <option value="5">Dr.</option>
                         <option value="6">Dr.</option>
                         <option value="7">Dr.</option>
                         </select></td>
     <td><button className='Patient-doctor-schedule-button1'>Approval</button></td>
     <td><button className='Patient-doctor-schedule-button2'>Pending</button></td>
   </tr>
 </tbody>
</table>
   </div>
   </form>
 )
}


export default Patient_Doctor_Schedule