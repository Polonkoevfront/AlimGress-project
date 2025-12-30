import { Route, Routes } from "react-router-dom"
import { AboutUsPage, LoginPage, BlogPage, BulkOrdersPage, ContactUsPage, CooperationPage, DealersAuthPage, DesignersOthersPage, HomePage, MyAccountPage, ProductPage, RegisterPage, SearchPage } from "../../../pages"
import { CollectionPage } from "../../../pages/CollectionPage/ui/CollectionPage"
import { KeramogranitPage } from "../../../pages/KeramogranitPage/KeramogranitPage"

export const Routing = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/keramogranit" element={<KeramogranitPage />} />
        <Route path="/my:account" element={<MyAccountPage />} />
        <Route path="/cooperation" element={<CooperationPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/dealers:auth" element={<DealersAuthPage />} />
        <Route path="/designers:others" element={<DesignersOthersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/bulkorders" element={<BulkOrdersPage />} />
        <Route path="/about:us" element={<AboutUsPage />} />
        <Route path="/contact:us" element={<ContactUsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />

      </Routes>
    </>
  )
}