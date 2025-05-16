import { Route, Routes } from "react-router-dom"
import { HomePage } from "../../../pages/HomePage/HomePage"
import { AccountPage, BulkOrdersPage, SearchPage } from "../../../pages"
import { CooperationPage } from "../../../pages/CooperationPage/CooperationPage"

export const Routing = () => {
  return (
    <>
    <Routes>

      <Route path="/" element={<HomePage/>}/>
      <Route path="/account" element={<AccountPage/>}/>
      <Route path="/cooperation" element={<CooperationPage/>}/>
      <Route path="/search" element={<SearchPage/>}/>
      <Route path="/bulkorders" element={<BulkOrdersPage/>}/>

    </Routes>      
    </>
  )
}

