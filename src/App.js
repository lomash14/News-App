import React from 'react'
import "./App.css"
import ResponsiveAppBar from './components/Nav'
import Home from './components/Home'
import { Route,Routes } from 'react-router-dom'
import FetchData from './components/FetchData'

const App = () => {
  return (
    <>
    <ResponsiveAppBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sports" element={<FetchData cat={"sports"}/>}/>
      <Route path="/business" element={<FetchData cat={"business"}/>}/>
      <Route path="/FetchData" element={<FetchData cat="general"/>}/>
      <Route path="/entertainment" element={<FetchData cat="entertainment"/>}/>
      <Route path="/science" element={<FetchData cat="science"/>}/>
      <Route path="/technology" element={<FetchData cat="technology"/>}/>
      <Route path="/health" element={<FetchData cat="health"/>}/>

      

    </Routes>
    </>
  )
}

export default App