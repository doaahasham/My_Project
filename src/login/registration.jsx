import React, { useState } from 'react'

export default function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthdate: '',
    gender: '',
    email: '',
    mobileNumber: '',
    country: '',
    agreeTerms: false
  });


  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    country: ''
  });

  
  const countryPrefixes = {
    Egypt: "01",
    "Saudi Arabia": "05",
    UAE: "05",
    USA: "1",
    France: "06",
    Germany: "01",
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
      return;
    }

    let fieldErrors = { ...errors };

  
    if (/\s/.test(value)) {
      fieldErrors[name] = 'Spaces are not allowed.';
    } else {
      fieldErrors[name] = '';
    }

    if (name === 'email') {
      setFormData({ ...formData, [name]: value });
      
      if (!/\s/.test(value)) {
        if (value.length > 0 && !value.toLowerCase().endsWith('@gmail.com')) {
          fieldErrors.email = 'Email must be a valid Gmail address (ending in @gmail.com)';
        } else {
          fieldErrors.email = '';
        }
      }
      setErrors(fieldErrors);
      return;
    }

   
    if (name === 'mobileNumber') {
      setFormData({ ...formData, [name]: value });
      validatePhoneNumber(value, formData.country, fieldErrors);
      return;
    }

    
    if (name === 'country') {
      setFormData({ ...formData, [name]: value });
      if (!value) {
        fieldErrors.country = 'Country selection is required.';
      } else {
        fieldErrors.country = '';
      }
      validatePhoneNumber(formData.mobileNumber, value, fieldErrors);
      return;
    }

   
    setFormData({ ...formData, [name]: value });
    setErrors(fieldErrors);
  };

  const validatePhoneNumber = (number, country, currentErrors) => {
    if (/\s/.test(number)) {
      setErrors(currentErrors);
      return;
    }

    if (country && countryPrefixes[country]) {
      const standardPrefix = countryPrefixes[country];

     
      if (!number.startsWith(standardPrefix)) {
        currentErrors.mobileNumber = `For ${country}, the mobile number must start with "${standardPrefix}"`;
      } 
     
      else if (country === 'Egypt' && number.length >= 3 && !/^(011|012|010|101)/.test(number)) {
        currentErrors.mobileNumber = 'Egyptian numbers must begin with 010, 011, 012, or 101';
      } 

      else if (number.length > 0 && number.length !== 11) {
        currentErrors.mobileNumber = 'Phone number must be 11 digits';
      } 
      else {
        currentErrors.mobileNumber = '';
      }
    } else {
      currentErrors.mobileNumber = '';
    }

    setErrors(currentErrors);
  };


  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      birthdate: '',
      gender: '',
      email: '',
      mobileNumber: '',
      country: '',
      agreeTerms: false
    });
    setErrors({
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      country: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let fieldErrors = { ...errors };
    let validationIssueFound = false;

    if (!formData.country) {
      fieldErrors.country = 'Country selection is required.';
      validationIssueFound = true;
    }

    if (!formData.email.toLowerCase().endsWith('@gmail.com')) {
      fieldErrors.email = 'Email must be a valid Gmail address (ending in @gmail.com)';
      validationIssueFound = true;
    }

    if (formData.country && countryPrefixes[formData.country]) {
      const standardPrefix = countryPrefixes[formData.country];
      if (!formData.mobileNumber.startsWith(standardPrefix)) {
        fieldErrors.mobileNumber = `For ${formData.country}, the mobile number must start with "${standardPrefix}"`;
        validationIssueFound = true;
      } else if (formData.mobileNumber.length !== 11) {
        fieldErrors.mobileNumber = 'Phone number must be 11 digits';
        validationIssueFound = true;
      }
    }

    const hasActiveErrors = Object.values(errors).some(err => err !== '');
    if (validationIssueFound || hasActiveErrors) {
      setErrors((prev) => ({ ...prev, ...fieldErrors }));
      return;
    }

    console.log('Form Submitted successfully:', formData);
  };

  return (
    <div className="container my-5 pt-5 mb-5 ">
      <div className="card p-2 shadow-sm border-0 bg-light">
        <h2 className="text-danger fw-normal mb-4" style={{ color: '#dc3545' }}>
          Registration Form
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="row g-2">
            
           
            <div className="col-md-6">
              <label className="form-label fw-bold">First Name:</label>
              <input
                type="text"
                className={`form-control ${errors.firstName ? 'is-invalid border-danger text-danger' : ''}`}
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                minLength={3}
                maxLength={9}
                pattern="^[A-Za-z]+$"
                title="Letters only. No spaces allowed."
                required
              />
              {errors.firstName && (
                <div className="invalid-feedback fw-bold d-block">{errors.firstName}</div>
              )}
            </div>
            
            
            <div className="col-md-6">
              <label className="form-label fw-bold">Last Name:</label>
              <input
                type="text"
                className={`form-control ${errors.lastName ? 'is-invalid border-danger text-danger' : ''}`}
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                minLength={3}
                maxLength={9}
                pattern="^[A-Za-z]+$"
                title="Letters only. No spaces allowed."
                required
              />
              {errors.lastName && (
                <div className="invalid-feedback fw-bold d-block">{errors.lastName}</div>
              )}
            </div>

           
            <div className="col-md-6">
              <label className="form-label fw-bold">Birthdate :</label>
              <input
                type="date"
                className="form-control text-danger"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
                required
              />
            </div>

           
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <label className="form-label fw-bold mb-2">Gender :</label>
              <div>
                <div className="form-check form-check-inline me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="genderMale"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="genderMale">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="genderFemale"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="genderFemale">Female</label>
                </div>
              </div>
            </div>

            
            <div className="col-md-3 col-sm-6">
              <label className="form-label fw-bold">Email :</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid border-danger text-danger' : ''}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <div className="invalid-feedback fw-bold d-block">{errors.email}</div>
              )}
            </div>
            
            <div className="col-md-4 col-sm-6">
              <label className="form-label fw-bold">Mobile Number :</label>
              <div className="input-group">
               
                <input
                  type="number"
                  className={`form-control ${errors.mobileNumber ? 'is-invalid border-danger text-danger' : ''}`}
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
                
              </div>
              {errors.mobileNumber && (
                <div className="invalid-feedback fw-bold d-block">
                  {errors.mobileNumber}
                </div>
              )}
            </div>
            <div className="col-md-5 d-none d-md-block"></div>

           
            <div className="col-12">
              <label className="form-label fw-bold">Select Your Country :</label>
              <select
                className={`form-select ${errors.country ? 'is-invalid border-danger text-danger' : ''}`}
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value=""></option>
                <option value="Egypt">Egypt</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="UAE">UAE</option>
                <option value="USA">USA</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
              </select>
              {errors.country && (
                <div className="invalid-feedback fw-bold d-block">{errors.country}</div>
              )}
            </div>

          
            <div className="col-12 my-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label text-secondary" htmlFor="agreeTerms">
                  By signing up, you agree to the <a href="#terms" className="text-primary text-decoration-none">Terms of Service</a> and <a href="#privacy" className="text-primary text-decoration-none">Privacy Policy</a>, including Cookie Use.
                </label>
              </div>
            </div>

           
            <div className="col-12 d-flex flex-column gap-2" style={{ maxWidth: '120px' }}>
              <button
                type="button"
                className="btn text-white"
                style={{ backgroundColor: '#dc3545' }}
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                type="submit"
                className="btn text-white"
                style={{ backgroundColor: '#dc3545' }}
              >
                Sign Up
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}