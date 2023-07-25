import React, {useState} from 'react';
import axios from 'axios';
import '../components/contactus.css';


function Contactus() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [location, setLocation] = useState('');
  
    const handleChange = (e) => {
      e.preventDefault();
      console.log(name);
  
      const data = {
        name: name,
        email: email,
        number: number,
        location: location
      }
      axios.post('https://sheet.best/api/sheets/fcd81388-7867-40b7-ac55-bbbded30c3f0', data).then((response) => {
        setName('');
        setEmail('');
        setNumber('');
        setLocation('');
      })
    }
  

    return (
        <>
        <div className='container text-center lll'>
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
      </div>
        </>
    );
}
export default Contactus;