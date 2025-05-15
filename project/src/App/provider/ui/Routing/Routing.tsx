import { Route, Routes } from "react-router-dom"
import { HomePage } from "../../../pages/HomePage/HomePage"
import { AccountPage } from "../../../pages"

export const Routing = () => {
  return (
    <>
    <Routes>

      <Route path="/" element={<HomePage/>}/>
      <Route path="/account" element={<AccountPage/>}/>

    </Routes>      
    </>
  )
}

