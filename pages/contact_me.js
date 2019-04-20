import React from 'react'

<form id="msform">

<ul id="progressbar">
  <li className="active">Account Setup</li>
  <li>Social Profiles</li>
  <li>Personal Details</li>
</ul>

<fieldset>
  <h2 className="fs-title">Create your account</h2>
  <h3 className="fs-subtitle">Step 1</h3>
  <input type="text" name="email" placeholder="Email" />
  <input type="password" name="pass" placeholder="Password" />
  <input type="password" name="cpass" placeholder="Confirm Password" />
  <input type="button" name="next" className="next action-button" value="Next" />
</fieldset>
<fieldset>
  <h2 className="fs-title">Goals and Interests!</h2>
  <h3 className="fs-subtitle">Tell Me More!</h3>
  <input type="text" name="goals" placeholder="What are your goals?" />
  <input type="button" name="previous" className="previous action-button" value="Previous" />
  <input type="button" name="next" className="next action-button" value="Next" />
</fieldset>
<fieldset>
  <h2 className="fs-title">Personal Information</h2>
  <h3 className="fs-subtitle">Let's Get Started!</h3>
  <input type="text" name="fname" placeholder="First Name" />
  <input type="text" name="lname" placeholder="Last Name" />
  <input type="text" name="phone" placeholder="Phone" />
  <textarea name="address" placeholder="Email Address"></textarea>
  <input type="button" name="previous" className="previous action-button" value="Previous" />
  <input type="submit" name="submit" className="submit action-button" value="Submit" />
</fieldset>
</form>

export default ContactMe


