import logo from './logo.svg';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';

 

function App() {
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + '/imgs/a1.png'}
      alt="First slide"
      style={{height: window.screen.height}}
    />
    <Carousel.Caption>
      <h3>1</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + '/imgs/a2.png'}
      alt="Second slide"
      style={{height: window.screen.height}}
    />

    <Carousel.Caption>
      <h3>2</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + '/imgs/a3.png'}
      alt="Third slide"
      style={{height: window.screen.height}}
    />

    <Carousel.Caption>
      <h3>3</h3>
    
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + '/imgs/a4.png'}
      alt="Third slide"
      style={{height: window.screen.height}}
    />

    <Carousel.Caption>
      <h3>4</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + '/imgs/a5.png'}
      alt="Third slide"
      style={{height: window.screen.height}}
    />

    <Carousel.Caption>
      <h3>5</h3>
 
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + '/imgs/a6.png'}
      alt="Third slide"
      style={{height: window.screen.height}}
    />

    <Carousel.Caption>
      <h3>6</h3>
     
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + '/imgs/a7.png'}
      alt="Third slide"
      style={{height: window.screen.height}}
    />

    <Carousel.Caption>
      <h3>7</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + '/imgs/a8.png'}
      alt="Third slide"

      style={{height: window.screen.height}}
    />

    <Carousel.Caption>
      <h3>8</h3>
     
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + '/imgs/a9.png'}
      alt="Third slide"
      style={{height: window.screen.height}}
    />

    <Carousel.Caption>
      <h3>9</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + '/imgs/a10.png'}
      alt="Third slide"
      style={{height: window.screen.height}}
    />

    <Carousel.Caption>
      <h3>10</h3>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + '/imgs/a11.png'}
      alt="Third slide"
      style={{height: window.screen.height}}
    />

    <Carousel.Caption>
      <h3>11</h3>
     
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + '/imgs/a12.png'}
      alt="Third slide"
      style={{height: window.screen.height}}
    />

    <Carousel.Caption>
      <h3>12</h3>
 
    </Carousel.Caption>
  </Carousel.Item>


</Carousel>


  );
}

export default App;
