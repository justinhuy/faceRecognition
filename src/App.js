import React, { Component } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import 'tachyons'
import Particles from 'react-particles-js'

class App extends Component {
 render() {
  return (
   <div className="App">
    <Particles
     params={{
      particles: {
       line_linked: {
        shadow: {
         enable: true,
         color: '#3CA9D1',
         blur: 5,
        },
       },
      },
     }}
    />
    <Navigation />
    <Logo />
    <Rank />
    <ImageLinkForm />

    {/* <FaceRecognition /> */}
   </div>
  )
 }
}

export default App
