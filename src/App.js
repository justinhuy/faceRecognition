import React, { Component } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import 'tachyons'
import ParticleBackground from './components/ParticleBackground/ParticleBackground'

class App extends Component {
 render() {
  return (
   <div className="App">
    <ParticleBackground />
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
