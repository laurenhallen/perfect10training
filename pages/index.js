import React from 'react'


    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content=""/>
        <meta name="author" content=""/>
        <link rel="icon" href="../../../../favicon.ico"/>

        <title>Perfect 10 Training</title>

        <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/carousel/"/>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>

        <link href="carousel.css" rel="stylesheet"/>
    </head>
    
function Home() {
    return (

    <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="/index.js">Perfect 10</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/index.js">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contact_me.js">Sign Up <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/about_me.js">Trainers <span className="sr-only">(current)</span></a>
            </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
    </header>

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
                <p><a className="btn btn-lg btn-primary" href="../website/signup.html" role="button">Sign Up Today</a></p>
                </div>
            </div>
            </div>
            <div className="carousel-item carousel-item-next carousel-item-left">
            <img className="second-slide" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/54728745_10216963570109027_8045256468837957632_o.jpg?_nc_cat=102&_nc_ht=scontent-atl3-1.xx&oh=721689ae65569ab9f9dc60413c848453&oe=5D4D3559" alt="Second slide" width="auto"/>
            <div className="container">
                <div className="carousel-caption">
                <h1>Luxuries</h1>
                <p>Train in the comfort of your own gym!</p>
                <p><a className="btn btn-lg btn-primary" href="../website/howitworks.html" role="button">How It Works</a></p>
                </div>
            </div>
            </div>
            <div className="carousel-item">
            <img className="third-slide" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/54421002_10216963579669266_4920770088593784832_o.jpg?_nc_cat=104&_nc_ht=scontent-atl3-1.xx&oh=9b230a4559072e7416493c391cc85e2d&oe=5D419A8F" alt="Third slide" width="auto"/>
            <div className="container">
                <div className="carousel-caption text-right">
                <h1>Ease</h1>
                <p>Enjoy the ease of walking into the gym with a routine tailored to you!</p>
                <p><a className="btn btn-lg btn-primary" href="../website/trainers.html" role="button">Meet Your Trainer</a></p>
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
    </main>
    );
}

export default Home