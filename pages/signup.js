import React from 'react'

export default function SignUp()  {
  return (
 <body>
<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
  <h1 className="display-4">Pricing</h1>
  <p className="lead">Customize your experience by picking the perfect option to suit your needs!</p>
</div>

<div className="container">
  <div className="card-deck mb-3 text-center">
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">4 weeks</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">$30 <small className="text-muted">/ week</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>8-12 Workouts</li>
          <li>Face to Face Consultations</li>
          <li>Email Support</li>
          <li>Package Add Ons</li>
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-primary" href="contact" >Sign Up</button>
      </div>
    </div>
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">8 weeks</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">$25 <small className="text-muted">/ week</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>16-24 Workouts</li>
          <li>Face to Face Consultations</li>
          <li>Email support</li>
          <li>Package Add Ons</li>
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-primary" href="contact">Get Started</button>
      </div>
    </div>
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">12 weeks</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">$20 <small className="text-muted">/ week</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>24-36 Workouts</li>
          <li>Face to Face Consultaions</li>
          <li>Email support</li>
          <li>Package Add Ons</li>
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-primary" href="contact">Contact Me</button>
      </div>
    </div>
  </div>
</div>
</body>
  );

}

