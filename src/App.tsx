import './App.css'
import {Route, Routes} from "react-router";
import {Navbar} from "./components/Navbar/Navbar.tsx";
import {ContentPage} from "./components/ContentPage/ContentPage.tsx";
import {Modal} from "./components/Modal/Modal.tsx";
import {CookieModalComponent} from "./components/CookieModalComponent/CookieModalComponent.tsx";
import {WarningModalComponent} from "./components/WarningModalComponent/WarningModalComponent.tsx";
import {useContext} from "react";
import {Context} from "./utils/Context/Context.tsx";
import {GamePageAsync} from "./components/GamePage/GamePageAsync.tsx";
import {PrivacyPolicyPageAsync} from "./components/PrivacyPolicyPage/PrivacyPolicyPageAsync.tsx";

export const App = () => {
    const { isAdult, isCookie } = useContext(Context)

    console.log(isAdult)

  return (
    <>
        <Navbar />
        <main>
            <Routes>

                <Route path="/" element={
                    <ContentPage />
                } />

                <Route path="/info" element={
                    <PrivacyPolicyPageAsync />
                } />

                <Route path="/game" element={
                    <GamePageAsync />
                } />


            </Routes>
            {(!document.cookie.includes("si_cookie_banner_accepted=1") && !isCookie) && <Modal isWarningModal={false}> <CookieModalComponent/> </Modal>}
            {!document.cookie.includes("pum-79") && !isAdult && <Modal isWarningModal={true}> <WarningModalComponent/> </Modal>}
        </main>

        <Navbar footer={true} />
    </>
  )
}
