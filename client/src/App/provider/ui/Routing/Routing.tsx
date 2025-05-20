import { Route, Routes } from "react-router-dom"
import { HomePage } from "../../../pages/HomePage/HomePage"
import { AccountPage, BulkOrdersPage, SearchPage } from "../../../pages"
import { CooperationPage } from "../../../pages/CooperationPage/CooperationPage"
import { ContactUsPage } from "../../../pages/ContactUsPage/ContactUsPage"
import { DealersAuthPage } from "../../../pages/CooperationPage/DealersAuthPage/DealersAuthPage"
import { DesignersOthersPage } from "../../../pages/CooperationPage/DesignersOthersPage/DesignersOthersPage"
import { MyAccountPage } from "../../../pages/AccountPage/MyAccountPage/MyAccountPage"

export const Routing = () => {
  return (
    <>
    <Routes>

      <Route path="/" element={<HomePage/>}/>
      <Route path="/account" element={<AccountPage/>}/>
      <Route path="/my:account" element={<MyAccountPage/>}/>
      <Route path="/cooperation" element={<CooperationPage/>}/>
      <Route path="/dealers:auth" element={<DealersAuthPage/>}/>
      <Route path="/designers:others" element={<DesignersOthersPage/>}/>
      <Route path="/search" element={<SearchPage/>}/>
      <Route path="/bulkorders" element={<BulkOrdersPage/>}/>
      <Route path="/contact:us" element={<ContactUsPage/>}/>

    </Routes>      
    </>
  )
}

