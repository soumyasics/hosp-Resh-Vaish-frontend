import React from 'react'
import './Patient_Homepage.css'

function Patient_Homepage() {
  return (
    <div className='Body'>
    <form>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Profile</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Appointment
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">New appointment</a></li>
            <li><a class="dropdown-item" href="#">Appointment Status</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </form>
    </div>
  )
}

export default Patient_Homepage