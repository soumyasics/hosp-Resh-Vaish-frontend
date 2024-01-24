import React, { useState } from 'react';
import axios from 'axios'
import './Patient_log.css';


function Patient_log() {

    const[patientlog,setpatientlog]=useState({
        username:'',
        patientpassword:'',
    })

    const handlechange=(e)=>
    {setpatientlog({...patientlog,[e.target.name]:e.target.value});
    };
    console.log(patientlog);

    const sublog=(e)=>
    {
      e.preventDefault()
        axios.post('http://localhost:4000/loginpatient',patientlog)
        .then(res=>{
                console.log(res);
        })
        .catch(err=>{
                console.log(err);
        })
        alert("Login successful"); 
      
    }
  return (
    <div className="patientlog_Body">
      
    <div className="patientlog_maindiv">
      <form>
        <h1 className="patientlog_Ul">User Login</h1>

                    <div className='patientlog_userpswd'>
                    <input
                    className="patientlog_userpswd_box"
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={handlechange}
                  /><br />


                  <input
                    className="patientlog_userpswd_box"
                    type="password"
                    placeholder="Password"
                    name="patientpassword"
                    onChange={handlechange}
                  />
  </div>

  <div className="patientlog_Rememberdiv">
          <input className="chkbox" type="checkbox" />
            Remember me
          <a className="patientlog_FRlink"href="">Forgot password?</a>
  </div>

        <button  onClick={sublog} className="patientlog_Loginbtn">Login</button>

        <div className="patientlog_Register">
          <p>
            Not a member?<a className='patientlog_FRlink' href="">Register here!</a>
          </p>
        </div>
      </form>
    </div>
  </div>
);
  }
export default Patient_log