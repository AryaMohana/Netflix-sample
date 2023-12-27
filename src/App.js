import React from 'react'
import  "./App.css";
import NavBar from './Components/Navbar/NavBar'
import Banner from './Components/Banner/Banner';
import Row from './Components/Row/Row';
import{action,original,comedy,horror,documentery}from'./urls'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Row url={original} title='Netfix Originals'/>
      <Row url={comedy} title='Comedy' isSmall/>
     < Row url={action} title='Action'isSmall/>
     < Row url={horror} title='Horror'isSmall/>
     < Row url={documentery} title='Documentery'isSmall/>

    </div>
  )
}

export default App
