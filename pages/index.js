import React from 'react'

    
function Home() {
    return (


    <main role="main">

        <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1" className=""></li>
            <li data-target="#myCarousel" data-slide-to="2" className=""></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active carousel-item-left">
            <img className="first-slide" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/55446927_10216963569869021_2041636476797583360_o.jpg?_nc_cat=108&_nc_ht=scontent-atl3-1.xx&oh=0bd40297667c2f8198e10475d3c09217&oe=5D41FC09" alt="First slide" width="auto"/>
            <div className="container">
                <div className="carousel-caption text-left">
                <h1>Comfort</h1>
                <p>Personalized programs that meet your needs and abilities!</p>
                <p><a className="btn btn-lg btn-primary" href="signup" role="button">Sign Up Today</a></p>
                </div>
            </div>
            </div>
            <div className="carousel-item carousel-item-next carousel-item-left">
            <img className="second-slide" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/54728745_10216963570109027_8045256468837957632_o.jpg?_nc_cat=102&_nc_ht=scontent-atl3-1.xx&oh=721689ae65569ab9f9dc60413c848453&oe=5D4D3559" alt="Second slide" width="auto"/>
            <div className="container">
                <div className="carousel-caption">
                <h1>Luxuries</h1>
                <p>Train in the comfort of your own gym!</p>
                <p><a className="btn btn-lg btn-primary" href="about" role="button">How It Works</a></p>
                </div>
            </div>
            </div>
            <div className="carousel-item">
            <img className="third-slide" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/54421002_10216963579669266_4920770088593784832_o.jpg?_nc_cat=104&_nc_ht=scontent-atl3-1.xx&oh=9b230a4559072e7416493c391cc85e2d&oe=5D419A8F" alt="Third slide" width="auto"/>
            <div className="container">
                <div className="carousel-caption text-right">
                <h1>Ease</h1>
                <p>Enjoy the ease of walking into the gym with a routine tailored to you!</p>
                <p><a className="btn btn-lg btn-primary" href="trainers" role="button">Meet Your Trainer</a></p>
                </div>
            </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img className="rounded-circle" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/52158504_10216693458036394_214761803752669184_n.jpg?_nc_cat=100&_nc_ht=scontent-atl3-1.xx&oh=08fb6ea8049f95bbe862debf09eecd6d&oe=5D36DC8B" alt="Generic placeholder image" width="140" height="140"/>
            <h2>Trainers</h2>
            <p>Meet your personal trainer Lauren Allen. Lauren has a B.S. degree in Exercise Science from Florida Gulf Coast University with a background in gymnastics and cheerleading, she has experience in sports training, general fitness, and the senior population. With over a year's worth of personal training experience, Lauren is ready to help you reach your fitness goals through online workout programs.</p>
            <p><a className="btn btn-secondary" href="trainers" role="button">View details »</a></p>
          </div>
          <div className="col-lg-4">
            <img className="rounded-circle" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/56800696_10217059830795484_4153844961395081216_n.jpg?_nc_cat=110&_nc_ht=scontent-atl3-1.xx&oh=2ff01feddf2dc0d666cadf8ceb3ec5b5&oe=5D356C84" alt="Generic placeholder image" width="140" height="140"/>
            <h2>Programs</h2>
            <p>Programs are tailored to the client's needs and goals. Right now we offer 4 week, 8 week, and 12 week programs. Inquire today for the best fit for you. </p>
            <p><a className="btn btn-secondary" href="about" role="button">View details »</a></p>
          </div>
          <div className="col-lg-4">
            <img className="rounded-circle" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Up_Hand_Sign_Emoji_large.png?v=1480481047" alt="Generic placeholder image" width="140" height="140"/>
            <h2>Sign up</h2>
            <p>Sign up today to start your journey to a healthy lifestyle with a program set for you by a professional who wants to help YOU!</p>
            <p><a className="btn btn-secondary" href="signup" role="button">View details »</a></p>
          </div>
        </div>
        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Testimony <span className="text-muted">Kendra Miller</span></h2>
            <p className="lead">Lauren is helping me completely change my life by focusing on fitness and overall health. She is the most motivating, encouraging, helpful, and knowledgeable trainer I have ever worked with. She listens to my goals and every workout gets me closer to where I want to be. I am so grateful she is the trainer I was paired with and I will train with her for as long as I can! I tell everyone she is the best!</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" data-src="" height="200px" width="200px"  src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/59039478_10217165468036349_1652222241724694528_o.jpg?_nc_cat=103&_nc_ht=scontent-mia3-2.xx&oh=c8a913a7ce277d1d22d8ad5435a14eb5&oe=5D75723F" data-holder-rendered="true"/>
          </div>
        </div>
        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Testimony <span className="text-muted">Mimi Hoffer</span></h2>
            <p className="lead">Lauren really knows how to train and to inspire me! She helps me understand what exercises I am training. She has helped me TREMENDOUSLY!! She also really knows all the muscles in the body and how to stretch them appropriately. She is such a wonderful, positive inspiration! </p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" data-src="" height="200px" width="200px"  src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/58374658_10217165464876270_7635539751558184960_o.jpg?_nc_cat=103&_nc_ht=scontent-mia3-2.xx&oh=d276de0ae2178ab680646e7d58706083&oe=5D2F4F3B" data-holder-rendered="true"/>
          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Testimony <span className="text-muted">Tammy Crews</span></h2>
            <p className="lead">Lauren has been my trainer since Feb 2018. She is such a positive and bright personality that it has been easy for me to get up twice a week at 4 in the morning to work out with her at 6. I am stronger and feel better for knowing her- a bright young person with a very positive future.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" data-src="" height="200px" width="200px"   src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/58383022_10217165466436309_1589878055529086976_o.jpg?_nc_cat=104&_nc_ht=scontent-mia3-2.xx&oh=a19f081a3c506ca68245d91738193441&oe=5D293BE4" data-holder-rendered="true"/>
          </div>
        </div>

        <hr className="featurette-divider"></hr>
    
    </main>
    );
}

export default Home