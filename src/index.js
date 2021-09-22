import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import './index.css';

const expertList = [
  {
    "name": faker.name.firstName(),
    "description": faker.name.jobDescriptor(),
    "stars": 69,
    "image": faker.image.avatar()
  },
  {
    "name": faker.name.firstName(),
    "description": faker.name.jobDescriptor(),
    "stars": 420,
    "image": faker.image.avatar()
  },
  {
    "name": faker.name.firstName(),
    "description": faker.name.jobDescriptor(),
    "stars": 69,
    "image": faker.image.avatar()
  },
  {
    "name": faker.name.firstName(),
    "description": faker.name.jobDescriptor(),
    "stars": 420,
    "image": faker.image.avatar()
  },
  {
    "name": faker.name.firstName(),
    "description": faker.name.jobDescriptor(),
    "stars": 69,
    "image": faker.image.avatar()
  },
  {
    "name": faker.name.firstName(),
    "description": faker.name.jobDescriptor(),
    "stars": 420,
    "image": faker.image.avatar()
  }
]

const imageList = [
  "https://picsum.photos/1980/600",
  "https://picsum.photos/1980/600",
  "https://picsum.photos/1980/600"
]

function IServiceNav() {
  return (
    <nav class="navbar navbar-inverse">
      <div class="header-container">
       <div class="container-fluid">
         <div class="navbar-header">
           <a class="navbar-brand" href="#">IService</a>
         </div>
         <ul class="nav navbar-nav">
          <li><a href="#">Post a task</a></li>
          <li><a href="#">Become an expert</a></li>
          <li><a href="#">Find tasks</a></li>
          <li><a href="#">How it works</a></li>
         </ul>
         <ul class="nav navbar-nav navbar-right">
           <li><a href="#">Sign Up</a></li>
         </ul>
       </div>
      </div>
    </nav>
  )
}

function IServiceCarousel() {
  return (
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner">
        <div class="item active">
          <img src={imageList[0]} alt="" />
        </div>

        <div class="item">
          <img src={imageList[2]} alt="" />
        </div>

        <div class="item">
          <img src={imageList[2]} alt="" />
        </div>
      </div>

      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  )
}

function Expert(props) {
  return (
    <div class="expert-container">
    <img src={props.image} alt="" />
      <h5>{props.name}</h5>
      <p>Description: {props.description}</p>
      <p>e.g., delivery</p>
      <div class="flex-container">
        <span class="glyphicon glyphicon-star"></span>
        <p> {props.stars} Stars</p>
      </div>
    </div>
  )
}

function ExpertList() {
  return (
    <div class="row">
      <h2>Featured Experts</h2>
      <div class="flex-container">
        <Expert
          name = {expertList[0].name}
          description = {expertList[0].description}
          stars = {expertList[0].stars}
          image = {expertList[0].image}
        />
        <Expert
          name = {expertList[1].name}
          description = {expertList[1].description}
          stars = {expertList[1].stars}
          image = {expertList[1].image}
        />
        <Expert
          name = {expertList[2].name}
          description = {expertList[2].description}
          stars = {expertList[2].stars}
          image = {expertList[2].image}
        />
      </div>
      <div class="flex-container">
        <Expert
          name = {expertList[3].name}
          description = {expertList[3].description}
          stars = {expertList[3].stars}
          image = {expertList[3].image}
        />
        <Expert
          name = {expertList[4].name}
          description = {expertList[4].description}
          stars = {expertList[4].stars}
          image = {expertList[4].image}
        />
        <Expert
          name = {expertList[5].name}
          description = {expertList[5].description}
          stars = {expertList[5].stars}
          image = {expertList[5].image}
        />
      </div>
    </div>
  )
}

function IServiceFooter() {
  return (
    <nav class="navbar navbar-inverse">
      <div class="footer-container">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">NEWSLETTER SIGN</a>
          </div>
          <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Enter your email" name="search"/>
              <div class="input-group-btn">
                <button class="btn btn-default" type="submit">Subscribe</button>
              </div>
            </div>
          </form>
          <div class="navbar-header">
            <a class="navbar-brand" href="#">CONNECT US</a>
          </div>
          <ul class="nav navbar-nav">
            <li><a href="#"><span class="glyphicon glyphicon-list-alt" /></a></li>
            <li><a href="#"><span class="glyphicon glyphicon-flag" /></a></li>
            <li><a href="#"><span class="glyphicon glyphicon-download-alt" /></a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

ReactDOM.render(
  <div>
    <IServiceNav />
    <IServiceCarousel />
    <ExpertList />
    <IServiceFooter />
  </div>, document.getElementById('root'))
