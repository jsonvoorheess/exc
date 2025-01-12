import styles from "./WarningModalComponent.module.css"
import warningIcon from "../../assets/27.svg"
import {useNavigate} from "react-router";
import {useCallback, useContext} from "react";
import {Context} from "../../utils/Context/Context.tsx";


export const WarningModalComponent = () => {
    const navigate = useNavigate()
    const { setIsAdult } = useContext(Context)

    const setCookiesAgeTrue = useCallback(() => {
        document.cookie = 'pum-79=true'
        navigate(0)
    }, [navigate])

    const setCookiesAgeFalse = useCallback(() => {
        document.cookie = 'pum-79=false'
        navigate("/info")
        if (setIsAdult) {
            setIsAdult(true)
        }
    }, [navigate, setIsAdult])
    
    return (
        <div className={styles.content} >
                <h1 className={styles.h1}>VOCÊ TEM 18 ANOS OU MAIS?</h1>
                <img src={warningIcon} className={styles.img} alt="иконка 18+"/>
                <div className={styles.buttons}>
                    <button onClick={setCookiesAgeTrue} className={styles.btn}>Sim, tenho 18 anos ou mais</button>
                    <button onClick={setCookiesAgeFalse} className={styles.btn}>Não, tenho menos de 18 anos</button>
                </div>
        </div>
    );
};
