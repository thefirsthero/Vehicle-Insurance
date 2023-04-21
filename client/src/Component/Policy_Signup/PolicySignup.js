
import React, { useState } from 'react';
// import './PolicySignup.css'; //this css is breaking other css... why???
import axios from 'axios';


const PolicySignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [carMake, setcarMake] = useState('');
  const [coverageOptions, setcoverageOptions] = useState('');
  const [carModel, setcarModel] = useState('');
  const [paymentInfo, setpaymentInfo] = useState('');
  const [VIN, setVIN] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Extract the form data from the event object and log it to the console
    const formData = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      phone: event.target.elements.phone.value,
      address: event.target.elements.address.value,
      city: event.target.elements.city.value,
      carMake: event.target.elements.carMake.value,
      coverageOptions: event.target.elements.coverageOptions.value,
      carModel: event.target.elements.carModel.value,
      paymentInfo: event.target.elements.paymentInfo.value,
      VIN: event.target.elements.VIN_NUMBER.value,
    };
    await axios.post('http://localhost:3033/api/register', formData)
    console.log(formData);

    // Reset the form input fields to their initial state
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCity('');
    setcarMake('');
    setcoverageOptions('');
    setcarModel('');
    setpaymentInfo('');
    setVIN('');
  };

  return (

    <>

    <h2>Register</h2>


    <form onSubmit={handleSubmit}>

       
      <div>
        <label htmlFor="name">Driver's Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter enter your email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>


      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter your phone"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
      </div>


      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          id="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter City"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          required
        />
      </div>

      <div>
      <label  htmlFor="carMake">
        Car Make
      </label>
      <input
        type="text"
        placeholder="Enter car make"
        name="carMake"
        value={carMake}
        onChange={(event) => setcarMake(event.target.value)}
      />
      </div>

      <div>
      <label  htmlFor="carModel">
        Car Model
      </label>
      <input
        type="text"
        placeholder="Enter car model"
        name="carModel"
        value={carModel}
        onChange={(event) => setcarModel(event.target.value)}
      />
      </div>

      <div>
<label  htmlFor="VIN NUMBER">
  VIN Number
</label>
<input
  type="text"
  placeholder="Enter car VIN"
  name="VIN_NUMBER"
  value={VIN}
  onChange={(event) => setVIN(event.target.value)}
/>
</div>





      <div>
      <label htmlFor="coverageOptions">
        Coverage Options
      </label>
      <select
        name="coverageOptions"
        value={coverageOptions}
        onChange={(event) => setcoverageOptions}
      >
        <option value="">Select coverage options</option>
        <option value="basic">Basic Coverage</option>
        <option value="full">Full Coverage</option>
      </select>
      </div>


      <div>  
      <label  htmlFor="paymentInfo">
        Payment Information
      </label>
      <input
        type="text"
        placeholder="Enter payment information"
        name="paymentInfo"
        value={paymentInfo}
        onChange={(event) => setpaymentInfo}
      />
       </div>

      <button type="submit" style={{color:'black'}}>Submit</button>
    </form>



    </>


  );
};

export default PolicySignup;
