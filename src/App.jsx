import { useState } from 'react'

import Header from "./components/Header/Header"
import Aboutme from "./components/Aboutme"
import Works from "./components/Works"


function App() {


  return (
    <>
      <Header/>
      <main>
          <Aboutme/>
          <Works/>
      </main>
    </>
  )
}

export default App
