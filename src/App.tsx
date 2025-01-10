import './App.css'
import {Route, Routes} from "react-router";
import {Navbar} from "./components/Navbar/Navbar.tsx";

export const App = () => {

  return (
    <>
      <Routes>

        <Route path="/" element={<Navbar />} />


      </Routes>
    </>
  )
}
