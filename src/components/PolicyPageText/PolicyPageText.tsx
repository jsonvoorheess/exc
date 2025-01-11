import styles from "./PolicyPageText.module.css"
import {FC} from "react";

interface PolicyPageTextProps {
    h2: string,
    p1?: string,
    p2: string
}

export const PolicyPageText:FC<PolicyPageTextProps> = ({ h2, p1, p2 }) => {
    return (
        <div className={styles.PolicyText} >
            <h2 className={styles.h2} >{h2}</h2>
            {p1 && <p className={styles.p1}>{p1}</p>}
            <p className={styles.p2} >{p2}</p>
        </div>
    );
};
