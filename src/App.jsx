import React from 'react'
import './App.css'

function App() {
    const header = {
      
      display: "flex",
      flexDirection: "row",
      aligItems: "center",
      
      justifyContent: "space-between",
      marginBottom: '10px',
      width: '100%',
    }
    const info = {
      marginTop: '20px',
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      position: 'relative'
    }
    const text = {
      textAlign: "left",                                                                                    
      fontFamily: 'Roboto, sans-serif',
      width: '50%',
      marginBottom: '30px'
    }
    const buttons = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    }
    const whiteOne = {
      backgroundColor: 'white',
      color: 'black',
      marginBottom: '20px'
    }
    const imagen = {
      aligItems: 'flex-end',
      position: 'absolute',
      
      right: '0px',
      bottom: '0px'
    }

  return (
    <>
    <div className="App">
      <div style={header}>
          <img className='discord-logo' src="./src/assets/discord-logo-white.png" alt="" />
          <img src="./src/assets/menu-icon.png" alt="" />
      </div>
 <div style={{display:'flex'}}>
      <div style={info} className='info-container'>
         <h1>IMAGINE A PLACE...</h1>
          <p style={text}>
            ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to
            talk every day and hang out more often.</p>
        <div style={buttons}>
          <button style={whiteOne}>Download for Mac</button>
          <button>Open Discord on your browser</button>
        </div>
      </div>
         
       
       <div style={imagen} className='imagen'>
          <img src="./src/assets/discord-background.png" alt=""  height={'300px'} />
        </div>
</div>
      </div>    
        
    </>
  )
} export default App
