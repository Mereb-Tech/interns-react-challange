import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Actors, ActorDetails, Films, Starships } from './pages'
import {Header, Footer} from './components'
const App = () => {
  
  return (
    <div>
        <Routes>
          <Route path='/' element={<Actors/>}/>
          <Route path='/actor/:id' element={<ActorDetails/>}/>
          <Route path='/films/:id' element={<Films/>}/>
          <Route path='/starships/:id' element={<Starships/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App