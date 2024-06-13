import { Routes,  Route } from "react-router-dom";
import { HomePage, ProductsList } from "../pages";

export const ALLRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Products" element={<ProductsList />}></Route>
    </Routes>
    </>
  )
}
