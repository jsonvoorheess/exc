import './App.css'
import {Route, Routes} from "react-router";
import {Navbar} from "./components/Navbar/Navbar.tsx";
import {ContentPage} from "./components/ContentPage/ContentPage.tsx";

export const App = () => {

  return (
    <>
        <Navbar />
        <main>
            <Routes>

                <Route path="/" element={
                    <ContentPage />
                } />


            </Routes>
        </main>

        <Navbar footer={true} />
    </>
  )
}
