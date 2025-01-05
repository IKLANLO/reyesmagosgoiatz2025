import React from 'react'

const App = () => {
  return (
    // <div className="h-screen w-screen relative">
    <div className="gif-container">
      {/* GIF que ocupa toda la pantalla */}
      <img
        src={process.env.PUBLIC_URL + '/christmas500.gif'}
        alt="Christmas animation"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Mensaje superpuesto en la parte superior */}
      <div className="message-container">
        <p className="text-gradient">Vale por una comida para dos en Basuki</p>
        <span className="emojis">😘</span>
        <br />
        <span className="emojis emojis2">😘</span>
        <br />
        <span className="emojis emojis3">😘</span>
        <br />
      </div>
    </div>
  )
}

export default App
