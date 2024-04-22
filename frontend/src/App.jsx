import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Signup } from '../pages/Signup';
import { Signin } from '../pages/Signin';
import { Dashboard } from '../pages/Dashboard';
import { SendMoney } from '../pages/SendMoney';
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    console.log("rerender");
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/signin" element={<Signin />} />
        
        <Route path="/Dashboard" element={<Dashboard />} />
        
        <Route path="/send" element={<SendMoney />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
