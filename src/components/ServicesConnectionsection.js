import React, { useState } from 'react';
import axios from 'axios';
import '../components/servicesconeectionsection.css';

const ServicesConnectionsection = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
   console.log(name);

   const data = {
    Name: name,
    Email: email,
    Number: number,
    Location: location
  }
  axios.post('https://sheet.best/api/sheets/fcd81388-7867-40b7-ac55-bbbded30c3f0', data).then((response) => {
  console.log(response);  
  setName('');
    setEmail('');
    setNumber('');
    setLocation('');
  })
 
  }


  return (
    <>
          <div className='style'><h3>Services</h3></div>
      <div className="container1 py-2" >
        <div className="row">
          <div className="col-lg-4 col-sm-4">
            <div className='bg py-3'>
            <div className="serviceone1"><img className='marginleft' src="/images/services/DesignConsultation.png" alt="" /><br /><p className="">Design Consultation</p></div>
            </div>
            </div>
            <div className="col-lg-4 col-sm-4 text-center">
            <div className='bg py-3'>
            <div className="serviceone1"><img src="/images/services/3DModellingandRendering.png" /><br /><p className="">3D Modelling and Rendering</p></div>
            </div>
            </div>
            <div className="col-lg-4 col-sm-4">
            <div className='bg py-3'>
            <div className="serviceone1 rightside"><img src="/images/services/Carpentry.png" /><br /><p className="">Furnishing</p></div>
            </div>
            </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-4">
            <div className='bg py-3'>
            <div className="serviceone1"><img className='marginleft' src="/images/services/Flooring.png" alt="" /><br /><p className="marginlefttext">Flooring</p></div>
            </div>
            </div>
            <div className="col-lg-4 col-sm-4 text-center">
            <div className='bg py-3'>
            <div className="serviceone1"><img src="/images/services/Ceiling.png" /><br /><p className="">Ceiling</p></div>
            </div>
            </div>
            <div className="col-lg-4 col-sm-4 rightside">
            <div className='bg py-3'>
            <div className="serviceone1 rightside"><img src="/images/services/ElectricFitting.png" /><br /><p className="">Electric Fitting</p></div>
            </div>
            </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-4">
            <div className='bg py-3'>
            <div className="serviceone1"><img className='marginleft' src="/images/services/Plumbing.png" alt="" /><br /><p className="marginlefttext">Plumbing</p></div>
            </div>
            </div>
            <div className="col-lg-4 col-sm-4 text-center">
            <div className='bg py-3'>
            <div className="serviceone1"><img src="/images/services/SoftFurnishing.png" /><br /><p className="">Soft Furnishing</p></div>
            </div>
            </div>
            <div className="col-lg-4 col-sm-4 rightside">
            <div className='bg py-3'>
            <div className="serviceone1 rightside"><img src="/images/services/ModularKitchen.png" /><br /><p className="">Modular Kitchen</p></div>
            </div>
            </div>
        </div>
      </div>
      <br/><br/>


      <h3 className='text-center'>Connect Us</h3>
      <br />
      <form autoComplete='off' className='form-group' onSubmit={handleChange}>
        <input type="text" placeholder='Enter your Name' required
          className='form-control'
          onChange={(e) => setName(e.target.value)} value={name}></input>
        <br />
        <input type="text" placeholder='Enter Email Id' required
          className='form-control'
          onChange={(e) => setEmail(e.target.value)} value={email}></input>
        <br />
        <input type="text" placeholder='Enter Contact Number' required
          className='form-control'
          onChange={(e) => setNumber(e.target.value)} value={number}></input>
        <br />
        <input type="text" placeholder='Enter Site Location' required
          className='form-control'
          onChange={(e) => setLocation(e.target.value)} value={location}></input>
        <br />
        <div className='text-center'>
          <button type='submit' className='btn btn-dark'>Submit</button>
        </div>
        <br />
      </form>



    </>

  );
};
export default ServicesConnectionsection;