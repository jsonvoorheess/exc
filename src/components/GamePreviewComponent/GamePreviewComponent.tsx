import {Container} from "../Container/Container.tsx";
import styles from './GamePreviewComponent.module.css'
import {Link} from "react-router";

export const GamePreviewComponent = () => {
    return (
        <section className={styles.gameSection} >
            <Container>
                <div className={styles.gameContent} >
                    <h2 className={styles.h2} >MERGULHE NO MUNDO DA PESCA COM FISH SLOT: TENTE A SORTE AGORA MESMO!</h2>
                    <span className={styles.p} >Mergulhe no emocionante mundo das profundezas do oceano com nosso novo jogo Fish Slot.
                        Entre na equipe de pescadores experientes e vá caçar peixes grandes. O jogo impressiona com
                        belos gráficos 3D, rodadas de bônus emocionantes e inúmeras opções de jogo totalmente gratuitas.
                    </span>
                    <Link to="/" className={styles.link} >
                        Jogo Grátis
                    </Link>
                </div>
            </Container>
        </section>
    );
};
