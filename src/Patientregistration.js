import { useState } from 'react';
import axios from 'axios'
import './Patientregistration.css'

function Patientregistration() {
    
const[Patientregistrationdata,setPatientregistrationdata]=useState({
        patientfirstname:'',  
        patientlastname:'',   
        patientaddress:'', 
        patientage:'',
        patientdob:'',
        patientgender:'',
        patientbloodgroup:'',
        patientoccupation:'',
        patientemail:'',
        patientpassword:'',
        guardianrelationship:'',
        guardianfirstname:'',
        guardianlastname:'',
        emergencyname:'',
        emergencyrelationship:'',
        emergencyaddress:'',
        emergencycontactno:'',
        emergencyemail:'',
        identityproof:'',
        identitycardno:'',
        identityauthority:'',
        chkyes:'',
        chkno:'',
        chkagree:''
            })


            
 const handlechange=(e)=>
 {setPatientregistrationdata({...Patientregistrationdata,[e.target.name]:e.target.value});
 };
 console.log(Patientregistrationdata);


 const subFun=()=>{
        console.log("PatientRegistrationdata",Patientregistrationdata);
        axios.post('http://localhost:4000/addpatient',Patientregistrationdata)
        .then(res=>{
                console.log(res);
        })
        .catch(err=>{
                console.log(err);
        })
        alert("Registration successful");               //Register Button
 }



        return (
        <div className='Body'>
        <div className="container">
         <form>
{/* <input type="text" name="fn" onchange={handlechange2}></input> */}
        <header className='header'>PATIENT REGISTRATION FORM</header>
        <div className="titlebar_div">
        <h4>PERSONAL DETAILS </h4>
        </div>

        <div className='Patient_details_div'>
                <label className='lbl'>Patient name:</label> 
               <input className='txtbxfname' 
                type='text'
                placeholder='First name'
                name='patientfirstname'
                onChange={handlechange}
               /> 

               <input className='txtbxlname'
                type='text'
                placeholder='Last name'
                name='patientlastname'
                onChange={handlechange}
               /><br/>
               
        <label className='lbl'>Address:</label> 
                <input className='txtbxaddress'
                type='text'
                name='patientaddress'
                onChange={handlechange}
                /><br/>
        
        <label className='lbl'>Age:</label>
        <input className='txtbxage'
                type='text'
                name='patientage'
                onChange={handlechange}
                />

       <label className='lbldob'>Date of birth:
       <input className='txtbxdob' type="date" name='patientdob' onChange={handlechange}/></label><br/>
       
       <label className='lblgndr'>Gender:</label> 
                <select className='selectgender' name='patientgender' onChange={handlechange}>
                <option selected>Select menu</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Transgender</option>
                </select><br/>

       <label className='lblbloodgrp'>Blood group:</label>
                <select className='selectbloodgroup' name='patientbloodgroup' onChange={handlechange}>
                <option selected>Select menu</option>
                <option value="1">A+ve</option>
                <option value="2">B+ve</option>
                <option value="3">AB+ve</option>
                <option value="4">AB-ve</option>
                <option value="5">O+ve</option>
                <option value="6">O-ve</option>
                </select><br/>

  <label className='lbloccupation'>Occupation:</label> 
                <input className='txtbxoccupation'
                type='text'
                name='patientoccupation'
                onChange={handlechange}
                /><br/>
   <label className='lblemail'>Email id</label> 
                <input className='txtbxemail'
                type='text'
                name='patientemail'
                onChange={handlechange}
                />

   <label className='lblpswd'>Password:</label> 
                <input className='txtpswd'
                type='password'
                name='patientpassword'
                onChange={handlechange}
                /><br/>

   

        <label className='lbl'>Guardian name:</label> 
               <input className='txtbx_guardian_fname' 
                type='text'
                placeholder='First name'
                name='guardianfirstname'
                onChange={handlechange}
               /> 
               <input className='txtbx_guardian_lname'
                type='text'
                placeholder='Last name'
                name='guardianlastname'
                onChange={handlechange}
               /><br/>

<label className='lblguardianship'>Guardianship:</label>
                <select className='selectguardian' name='guardianrelationship' onChange={handlechange}>
                <option selected>Select menu</option>
                <option value="1">Father</option>
                <option value="2">Mother</option>
                <option value="3">Husband</option>
                <option value="4">Wife</option>
                <option value="5">Son</option>
                <option value="6">Daughter</option>
                <option value="7">Friend</option>
                <option value="8">Relative</option>
                </select><br/>

 <div className="titlebar_div">
                <h4>EMERGENCY CONTACT DETAILS</h4>
                </div>
        <div className='Emergency_contact_div'>
        <label>Contact's person's Name: </label>
                <input className='txtbx_emergency_contact_name' 
                type='text'
                name='emergencyname'
                onChange={handlechange}
               />
        <label className='lbl_relationship'>Relationship:</label>
                <select className='select_emergency_name' name='emergencyrelationship' onChange={handlechange}>
                <option selected>Select menu</option>
                <option value="1">Father</option>
                <option value="2">Mother</option>
                <option value="3">Husband</option>
                <option value="4">Wife</option>
                <option value="5">Son</option>
                <option value="6">Daughter</option>
                <option value="7">Friend</option>
                <option value="8">Relative</option>
                </select><br/>

      <label className='lbl'>Address:</label> 
                <input className='txtbxaddress'
                type='text'
                name='emergencyaddress'
                onChange={handlechange}
                /><br/>

        <label className='lblemail'>Email id</label> 
                <input className='txtbxemail'
                type='text'
                name='emergencyemail'
                onChange={handlechange}
                />

        <label className='lblcontactno'>Contact no:</label> 
                <input className='txtbxcontactno'
                type='text'
                name='emergencycontactno'
                onChange={handlechange}
                /><br/>

        </div>
        
        <div className="titlebar_div">
        <h4>PATIENT IDENTITY INFORMATION</h4>
        </div>
        <div className='Patient_identity_div'>
        
        <label>Identity proof:</label>
                <select className='select_Identity_proof' name='identityproof' onChange={handlechange}>
                <option selected>Select menu</option>
                <option value="1">Aadhar</option>
                <option value="2">Voter ID</option>
                <option value="3">Pan card</option>
                <option value="4">Passport</option>
                <option value="5">Driving license</option>
                <option value="6">Ration card</option>
                </select><br/>
      <label>Identity card number: </label>
                <input className='txtbx_Identity_number' 
                type='text'
                name='identitycardno'
                onChange={handlechange}
               />
      <label className='lbl_Issue_authority'>Authority:</label> 
                <select className='select_Issue_Authority' name='identityauthority' onChange={handlechange}>
                <option selected>Select menu</option>
                <option value="1">Central Government</option>
                <option value="2">Kerala Government</option>
                <option value="3">Election commission</option>
                </select><br/>
        </div>
        <div className="titlebar_div">
        <h4>MEDICAL CLAIM</h4>
        </div>
        <div className='Medical_claim_div'>
          <p>
            Currently covered by anyother Mediclaim/Health Insurance?<br/>
          <input type="radio" value="Yes" name='chkyes'  onChange={handlechange}/>Yes
          <input type="radio" value="No" name='chkno' onChange={handlechange}/>No
          </p>
        </div>
        <hr/>
        <p><input type="checkbox" value="Yes" name='chkagree'  onChange={handlechange}/>I here by declare that all the above information is correct and complete.</p>
        <button className='btn_Register' type="button" onClick={subFun}>REGISTER</button>
    </div>
        </form>
        </div>
        </div>


  )
}

export default Patientregistration