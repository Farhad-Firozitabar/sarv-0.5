import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    projectDescription: '',
    projectType: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
    email: false,
    projectDescription: false,
    projectType: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [name]: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if all fields are filled
    let hasErrors = false;
    const updatedFormErrors = {};
  
    for (const [key, value] of Object.entries(formData)) {
      if (value === '') {
        updatedFormErrors[key] = true;
        hasErrors = true;
      }
    }
  
    setFormErrors(updatedFormErrors);
  
    if (hasErrors) {
      return;
    }
  
    // Send the form data to the server
    fetch('http://localhost:3001/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submitted successfully:', data);
        alert('Form submitted successfully!');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('Error submitting the form.');
      });
  };
  
  


  return (
    <div className="container">
<h2 id='order' className='mb-4'  style={{ textAlign: 'center', textDecoration: 'underline', color: '#ffffff', fontFamily: 'Montserrat' }}> Place your order </h2>
       <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label" style={{ color: 'white' }}>
            First Name
          </label>
          <input
            type="text"
            className={`form-control ${
              formErrors.firstName ? 'is-invalid' : ''
            }`}
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            style={{ backgroundColor: '#212529', color: 'white' }}
          />
          {formErrors.firstName && (
            <div className="invalid-feedback">First Name is required</div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label" style={{ color: 'white' }}>
            Last Name
          </label>
          <input
            type="text"
            className={`form-control ${
              formErrors.lastName ? 'is-invalid' : ''
            }`}
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            style={{ backgroundColor: '#212529', color: 'white' }}
          />
          {formErrors.lastName && (
            <div className="invalid-feedback">Last Name is required</div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="phoneNumber" className="form-label" style={{ color: 'white' }}>
            Phone Number
          </label>
          <input
            type="tel"
            className={`form-control ${
              formErrors.phoneNumber ? 'is-invalid' : ''
            }`}
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            style={{ backgroundColor: '#212529', color: 'white' }}
          />
          {formErrors.phoneNumber && (
            <div className="invalid-feedback">Phone Number is required</div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label" style={{ color: 'white' }}>
            Email
          </label>
          <input
            type="email"
            className={`form-control ${
              formErrors.email ? 'is-invalid' : ''
            }`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            style={{ backgroundColor: '#212529', color: 'white' }}
          />
          {formErrors.email && (
            <div className="invalid-feedback">Email is required</div>
          )}
        </div>
        <div className="col-12">
          <label htmlFor="projectDescription" className="form-label" style={{ color: 'white' }}>
            Project Description
          </label>
          <textarea
            className={`form-control ${
              formErrors.projectDescription ? 'is-invalid' : ''
            }`}
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Project Description"
            required
            style={{ backgroundColor: '#212529', color: 'white' }}
          />
          {formErrors.projectDescription && (
            <div className="invalid-feedback">Project Description is required</div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="projectType" className="form-label" style={{ color: 'white' }}>
            Project Type
          </label>
          <select
            className={`form-select ${
              formErrors.projectType ? 'is-invalid' : ''
            }`}
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            style={{ backgroundColor: '#212529', color: 'white' }}
          >
            <option value="">Choose...</option>
            <option value="website">Website</option>
            <option value="security">Security</option>
            <option value="software">Software</option>
            <option value="other">Other</option>
          </select>
          {formErrors.projectType && (
            <div className="invalid-feedback">Project Type is required</div>
          )}
        </div>

        <div className="col-12 mb-5">
  <button type="submit" className="btn btn-success btn-lg" style={{ width: '100%' }}>
    Submit
  </button>
</div>
      </form>
    </div>
  );
};

export default FormComponent;
