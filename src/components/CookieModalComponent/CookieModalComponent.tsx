import {Container} from "../Container/Container.tsx";
import styles from './CookieModalComponent.module.css'
import classNames from "classnames";
import {useContext, useState} from "react";
import {useNavigate} from "react-router";
import {Context} from "../../utils/Context/Context.tsx";

export const CookieModalComponent = () => {
    const { setIsCookie } = useContext(Context)
    const [settings, setSettings] = useState(false)
    const navigate = useNavigate()
    const [input1Value, setInput1Value] = useState(false)
    const [input2Value, setInput2Value] = useState(false)

    const getMoreSettings = () => {
        setSettings(true)
    }

    const saveCookieSettings = () => {
        document.cookie = "si_cookie_banner_accepted=1"
        navigate(0)
    }

    const onCloseModalCookie = () => {
        if (setIsCookie) {
            setIsCookie(true)
        }
    }


    return (
        <div className={styles.cookieModal} >
            <Container>
                {!settings ? <>
                    <h3 className={styles.h3}>Cookie preferences</h3>
                    <div className={styles.cont}>
                        <p className={styles.p}>Discard all In order to properly provide services, as well as for
                            statistical and advertising purposes,
                            the website uses information stored on users' end devices (cookies). If you have allowed
                            cookies
                            to be
                            stored in your browser settings, they will be stored on your end device. You can specify the
                            conditions
                            for storing or accessing cookies in your browser.</p>
                        <p className={styles.p}>Cookie Settings are available on every page of our website, where the
                            user
                            can at any time view the list of
                            other companies that use cookies on this website and change their settings for these files.
                            Detailed information
                            about how we use your personal data and your rights can be found in our Privacy Policy.</p>
                        <div className={styles.btns}>
                            <button onClick={getMoreSettings} className={classNames(styles.btn1, styles.btn)}>Settings</button>
                            <button onClick={saveCookieSettings} className={classNames(styles.btn2, styles.btn)}>Accept</button>
                            <button onClick={onCloseModalCookie} className={classNames(styles.btn3, styles.btn)}>Decline</button>
                        </div>
                    </div>
                </> :
                    <>
                        <h3>COOKIE SETTINGS</h3>
                        <div className={styles.settingsContent}>
                            <p className={styles.settingsP}>Cookies are small text files that may be used by websites so
                                that users can use the websites more efficiently. The law states that we may store
                                cookies on your device if this is necessary for the functioning of this website. For all
                                other types we need user permission. </p>
                            <p className={styles.settingsP}>This website uses different types of cookies. You can
                                withdraw your consent at any time by clicking the "Cookie settings" link in the footer
                                of the website. </p>
                            <p className={styles.settingsP}>Find out more about who we are, how you can contact us and
                                how we process data under the Privacy Policy.</p>
                        </div>
                        <div>
                            <h3 className={styles.h3}>Functional</h3>
                            <div className={styles.paragraph1}>
                                <p className={styles.settingsP}>Functional cookies enable us to remember choices you
                                    make such as your username, login
                                    details or language preferences, and to record any other customisations you make to
                                    the
                                    site during your visit.</p>
                                <div className={styles.switch}>
                                    <label>
                                        <input type="radio" value="off" checked={!input1Value}
                                               onChange={() => setInput1Value(false)}/>
                                        <span className={styles.span}>OFF</span>
                                    </label>
                                    <label>
                                        <input type="radio" value="on" checked={input1Value}
                                               onChange={() => setInput1Value(true)}/>
                                        <span className={styles.span}>ON</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className={styles.sect} >
                            <h3 className={classNames(styles.h3, styles.bottomH3)}>Analytical</h3>
                            <div className={styles.paragraph1}>
                                <p className={styles.settingsP}>These cookies help us understand how visitors use our website. For example, they collect information about which pages on our website visitors choose most often, which features they use, and which pages they have previously visited. We use this information to improve our website and provide you with a better user experience</p>
                                <div className={styles.switch}>
                                    <label>
                                        <input type="radio" value="off" checked={!input2Value}
                                               onChange={() => setInput2Value(false)}/>
                                        <span className={styles.span}>OFF</span>
                                    </label>
                                    <label>
                                        <input type="radio" value="on" checked={input2Value}
                                               onChange={() => setInput2Value(true)}/>
                                        <span className={styles.span}>ON</span>
                                    </label>
                                </div>
                                <div className={styles.saveSection} >
                                    <button onClick={saveCookieSettings} className={classNames(styles.btn2, styles.saveButton, styles.btn)}>Save settings</button>
                                </div>

                            </div>
                        </div>
                    </>}

            </Container>
        </div>
    );
};
