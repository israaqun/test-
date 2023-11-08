import React from 'react'
import {Route ,Routes} from 'react-router-dom'
import Create from './components/users/Create'
import Index from './components/users'
import Details from './components/Details'

export default function App() {
  return (
   <Routes>
<Route path="/" element={<Index/>}/>
<Route path="/users/index" element={<Index/>} />
<Route path="/users/:id" element={<Details/>} />


<Route path="/users/create" element={<Create/>} />


   </Routes>
  )
}
