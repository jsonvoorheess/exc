import {Container} from "../Container/Container.tsx";
import styles from "./GamePage.module.css"

const GamePage = () => {
    return (
        <div className={styles.game} >
            <Container>
                <div className={styles.gamewrapper} >
                    <iframe className={styles.iframe} src="https://play.gamepix.com/slots-collection-3in1/embed?sid=e4515"></iframe>
                </div>
            </Container>
        </div>
    );
};
export  default GamePage