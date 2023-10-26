import React from 'react';
import Button from 'react-bootstrap/Button';
import FormComponent from '../components/FormComponent';


const pricingStyle = {
  fontFamily: 'Montserrat, sans-serif', // Apply Montserrat font
  fontSize: '1rem',
};
const getStartedButtonStyle = {
    fontFamily: 'Montserrat',
    fontSize: '1.5rem', // Increase the font size
    borderRadius: '10px',
    backgroundColor: '#005200',
    color: 'white',
    marginRight: '10px', // Add space between buttons
    border: '2px solid #005200', // Add border with the #005200 color
    transition: 'background-color 0.3s',
  };
const Pricing = () => {
  return (
    <div className="container mt-5" style={pricingStyle}>
      <h1 className="text-center text-white font-weight-bold">Pricing for your projects</h1>
      <hr className="text-white" />

<div className="container mt-5">
  <h2  className="text-center text-white font-weight-bold"><Button style={getStartedButtonStyle} onMouseEnter={e => e.target.style.backgroundColor = '#008300'} onMouseLeave={e => e.target.style.backgroundColor = '#005200'}>
              Development
            </Button></h2>
 
  <div className="row mt-5">
        {/* Portfolio */}
<div className="col-md-3 mb-4">
  <div className="card text-bg-dark mb-3">
    <div className="card-header text-white">
      <h5 className="text-center">Portfolio</h5>
    </div>
    <div className="card-body text-white">
      <ul>
        <li>Up to 10 pages development</li>
        <li>Image gallery</li>
        <li>Contact form</li>
        <li>Resume or Catalog File download</li>
        <li>Responsive design</li>
        <li>SEO optimization</li>
        <li>1 year FREE Custom Domain</li>

        {/* Add more features here */}
      </ul>
    </div>
    <hr className="text-white" />
    <div className="text-center text-white">
      <p>Price: $100 - $500</p>
    </div>
  </div>
</div>

    {/* Blog */}
    <div className="col-md-3 mb-4">
      <div className="card text-bg-dark mb-3">
        <div className="card-header text-white">
          <h5 className="text-center">Blog</h5>
        </div>
        <div className="card-body text-white">
          <ul>
            <li>WordPress or Custom development</li>
            <li>User Frindly Admin Panel</li>
            <li>Like/comment/share functionality</li>
            <li>Responsive design</li>
            <li>SEO optimization</li>
            <li>1 year FREE Custom Domain</li>

            {/* Add more features here */}
          </ul>
        </div>
        <hr className="text-white" />
        <div className="text-center text-white">
          <p>Price: $1,000 - $5,000</p>
        </div>
      </div>
    </div>




{/* Ecommerce */}
<div className="col-md-3 mb-4">
  <div className="card text-bg-dark mb-3">
    <div className="card-header text-white">
      <h5 className="text-center">Ecommerce</h5>
    </div>
    <div className="card-body text-white">
      <ul>
        <li>Custom ecommerce website</li>
        <li>Product catalog</li>
        <li>Shopping cart functionality</li>
        <li>Secure payment processing</li>
        <li>Inventory management</li>
        <li>Responsive design</li>
            <li>SEO optimization</li>
            <li>1 year FREE Custom Domain</li>
        {/* Add more ecommerce-related features here */}
      </ul>
    </div>
    <hr className="text-white" />
    <div className="text-center text-white">
      <p>$4,500 - $20,000</p>
    </div>
  </div>
</div>


    {/* Enterprise */}
    <div className="col-md-3 mb-4">
      <div className="card text-bg-dark mb-3">
        <div className="card-header text-white">
          <h5 className="text-center">Enterprise</h5>
        </div>
        <div className="card-body text-white">
          <ul>
        <li>Custom development website</li>
        <li>System design</li>
        <li>Database management</li>
        <li>Server management</li>
        <li>Network Administrator</li>
        <li>Data analysis</li>
        <li>Data visualization</li>

            {/* Add enterprise-related features here */}
          </ul>
        </div>
        <hr className="text-white" />
        <div className="text-center text-white">
          <p>Price: $ Contact us</p>
        </div>
      </div>
    </div>
  </div>
</div>
<hr className="text-white" />
<br></br>
<h2  className="text-center text-white font-weight-bold"><Button style={getStartedButtonStyle} onMouseEnter={e => e.target.style.backgroundColor = '#008300'} onMouseLeave={e => e.target.style.backgroundColor = '#005200'}>
Security
            </Button></h2>

      {/* Security Section */}
      <div className="row mt-5">
        <div className="col-md-12">
          <p className="text-white text-center">
            If you are concerned about your website's security, we provide comprehensive security testing and solutions.
          </p>
          <FormComponent />

        </div>
      </div>

      <hr className="text-white" />
<br></br>
<h2  className="text-center text-white font-weight-bold"><Button style={getStartedButtonStyle} onMouseEnter={e => e.target.style.backgroundColor = '#008300'} onMouseLeave={e => e.target.style.backgroundColor = '#005200'}>
Software
            </Button></h2>

      {/* Software Pricing */}
      <div className="row mt-5">
  <div className="col-md-4 mb-4">
    <div className="card text-bg-dark mb-3">
      <div className="card-header text-white">
        <h5 className="text-center">Standard</h5>
      </div>
      <div className="card-body text-white">
        <ul>
          <li>Basic Web Application: Development of a simple web application.</li>
          <li>Responsive Design: Ensure the web app is accessible on various devices.</li>
          <li>Basic API Integration: Integrate with essential third-party services.</li>
          <li>Scalability: Plan for future growth.</li>
          {/* Add more features here */}
        </ul>
      </div>
      <hr className="text-white" />
      <div className="text-center text-white">
        <p>Price: $2,000 - $5,000</p>
      </div>
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <div className="card text-bg-dark mb-3">
      <div className="card-header text-white">
        <h5 className="text-center">Pro</h5>
      </div>
      <div className="card-body text-white">
        <ul>
          <li>Android Application with wide range of functionality</li>
          <li>Responsive Design: Ensure the web app is accessible on various devices.</li>
          <li>User Authentication: Implement basic user authentication.</li>
          <li>User frindly Desgin</li>
          {/* Add more features here */}
        </ul>
      </div>
      <hr className="text-white" />
      <div className="text-center text-white">
        <p>Price: $X,XXX</p>
      </div>
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <div className="card text-bg-dark mb-3">
      <div className="card-header text-white">
        <h5 className="text-center">Premium</h5>
      </div>
      <div className="card-body text-white">
        <ul>
          <li>Android, ios, windows, MacOS Application</li>
          <li>Multi-Tenancy: Develop multi-tenant applications for large organizations.</li>
          <li>Load Balancing: Ensure high availability and fault tolerance.
</li>
<li>Performance Optimization: Optimize for high performance and scalability.
</li>
          {/* Add more features here */}
        </ul>
      </div>
      <hr className="text-white" />
      <div className="text-center text-white">
        <p>Price: $X,XXX</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Pricing;
