import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
// Pages
import Home from './components/Home'
import Account from './components/Account'
import Asset from './components/Asset'
import AssetAssignment from './components/AssetAssignment'
import CostCenter from './components/CostCenter'
import Department from './components/Department'
import Disposed from './components/Disposed'
import Employee from './components/Employee'
import Login from './components/Login'
import Logs from './components/Logs'
import Print from './components/Print'
import Settings from './components/Settings.jsx'
import User from './components/User'

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/asset" element={<Asset/>}/>
        <Route path="/asset_assignment" element={<AssetAssignment/>}/>
        <Route path="/cost_center" element={<CostCenter/>}/>
        <Route path="/department" element={<Department/>}/>
        <Route path="/disposed" element={<Disposed/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logs" element={<Logs/>}/>
        <Route path="/print" element={<Print/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
    </>
  )
}

export default App
