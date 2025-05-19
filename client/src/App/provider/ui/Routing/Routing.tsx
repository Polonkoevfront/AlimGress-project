import { Route, Routes } from "react-router-dom"
import { HomePage } from "../../../pages/HomePage/HomePage"
import { AccountPage, BulkOrdersPage, SearchPage } from "../../../pages"
import { CooperationPage } from "../../../pages/CooperationPage/CooperationPage"
import { ContactUsPage } from "../../../pages/ContactUsPage/ContactUsPage"
import { DealersAuthPage } from "../../../pages/CooperationPage/DealersAuthPage/DealersAuthPage"

export const Routing = () => {
  return (
    <>
    <Routes>

      <Route path="/" element={<HomePage/>}/>
      <Route path="/account" element={<AccountPage/>}/>
      <Route path="/cooperation" element={<CooperationPage/>}/>
      <Route path="/dealers:auth" element={<DealersAuthPage/>}/>
      {/* <Route path="/cooperation" element={<CooperationPage/>}/> */}
      <Route path="/search" element={<SearchPage/>}/>
      <Route path="/bulkorders" element={<BulkOrdersPage/>}/>
      <Route path="/contac:tus" element={<ContactUsPage/>}/>

    </Routes>      
    </>
  )
}

