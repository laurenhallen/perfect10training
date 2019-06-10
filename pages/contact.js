import React from 'react';

function Contact() {
    return (
      
        <div className="container contact">
        <div className="row">
            <div className="col-md-3">
                <div className="contact-info">
                    <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
                    <h2>Contact Me</h2>
                    <h4>Let's start YOUR fitness journey together!</h4>
                </div>
            </div>
            <div className="col-md-9">
			<div className="contact-form" action="contactform.php" method="post">
				<div className="form-group">
				  <label className="control-label col-sm-2" for="name">Full Name:</label>
				  <div className="col-sm-10">       
					<input type="text" className="form-control" id="name" placeholder="Enter Full Name" name="name" ></input>
				  </div>
				</div>
				
				<div className="form-group">
				  <label className="control-label col-sm-2" for="email">Email:</label>
				  <div className="col-sm-10">
					<input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" ></input>
				  </div>
				</div>
                <div className="form-group">
				  <label className="control-label col-sm-2" for="trainer">Trainer's Name:</label>
				  <div className="col-sm-10">
					<input type="text" className="form-control" id="trainer" placeholder="Preferred Trainer" name="trainer" ></input>
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" for="comment">Tell me why you are interested:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" id="comment"></textarea>
				  </div>
				</div>
				<div className="form-group">        
				  <div className="col-sm-offset-2 col-sm-10">
					<button type="submit" className="btn btn-default">Submit</button>
				  </div>
				</div>
			</div>
		</div>
	</div>  
</div>

    )
}

export default Contact
