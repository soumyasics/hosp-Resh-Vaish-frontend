import React, { useState } from 'react'
import './Patient_Newappointment.css'

function Patient_Newappointment() {
    const[Patientsnewappointment,setPatientsnewappointment]=useState({
        Date:'',
        Time:'',
        Doctor:'',
        Department:'',
        Patientname:'',
        Patientemail:'',
        Patientcontactno:''
    })
    
    const handlechange=(e)=>
    {                        
       setPatientsnewappointment({...Patientsnewappointment,[e.target.name]:e.target.value});
    };
    console.log(Patientsnewappointment);  

    const subFun=()=>{
        alert("Token request sent");               //submit
     }
    
  return (

    <form  >
    <div className='Patient-newappointment-Body'>
    <h1 className='Patient-newappointment-head'>NEW APPOINTMENT</h1>
    <div className='Patient-newappointment-Maindiv'>

      <label className='Patient-newappointment-lbldate'>Date:</label> 
      <input className='Patient-newappointment-date'
                    type="Date"
                    name='Date'
                    onChange={handlechange}>
                    </input>

      <label className='Patient-newappointment-lbltime'>Time:</label> 
      <input className='Patient-newappointment-time'
                    type="time"
                    name='Time'
                    onChange={handlechange}>
                    </input><br/>

      <label className='Patient-newappointment-lbldoctorlist'>Doctor:</label> 
      <select className='Patient-newappointment-doctorlist' name='Doctor' onChange={handlechange}>
                <option selected>Select menu</option>
                <option value="1">Dr.</option>
                <option value="2">Dr.</option>
                <option value="3">Dr.</option>
                <option value="4">Dr.</option>
                <option value="5">Dr.</option>
                <option value="6">Dr.</option>
                </select>

      <label className='Patient-newappointment-lbldepartment'>Department:</label> 
      <select className='Patient-newappointment-department' name='Department' onChange={handlechange}>
                <option selected>Select menu</option>
                  <option value='1'>Cardiology</option>
                  <option value='2'>Neurology</option>
                  <option value='3'>Radiology</option>
                  <option value='4'>General medicine</option>
                  <option value='5'>Urology</option>
                  <option value='6 '>General Surgery</option>
                  <option value='7'>Nephrology</option>
                  <option value='8'>Orthopedics</option>
                  <option value='9'>Ophthalmology</option>
                </select><br/>      

        <h3 className='patient-subtitle'>PATIENT DETAILS</h3>
      <label className='Patient-newappointment-lblpatientname'>Name:</label> 
      <input className='Patient-newappointment-patientname'
                    type="string"
                    name='Patientname'
                    onChange={handlechange}>
                    </input><br/>


     <label className='Patient-newappointment-lblpatientemail'>EmailID:</label> 
      <input className='Patient-newappointment-patientemail'
                    type="email"
                    name='Patientemail'
                    onChange={handlechange}>
                    </input>

      <label className='Patient-newappointment-lblpatientcontactno'>Contactno:</label> 
      <input className='Patient-newappointment-patientcontactno'
                    type="number"
                    name='Patientcontactno'
                    onChange={handlechange}>
                    </input><br/>



    <button className='Patientbtn' type="button" onClick={subFun}>Submit</button>
   </div>
   </div>
   </form>
 )
}

  


export default Patient_Newappointment