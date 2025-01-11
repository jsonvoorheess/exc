import styles from "./MiddleSection.module.css";
import {Container} from "../Container/Container.tsx";

export const MiddleSection = () => {
    return (
        <section className={styles.middlesect}>
            <Container>
                <div className={styles.contentMiddle}>
                    <div className={styles.imgContainer}>
                        <img className={styles.imgMiddle}
                             src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_800,h_800/https://esporte-br77.com/wp-content/uploads/2024/07/vwc-1.png"
                             alt="картинка"/>
                    </div>
                    <div className={styles.contentText}>
                        <h2 className={styles.h2}>JUNTE-SE A NÓS HOJE E CONSTRUA SEU CAMINHO PARA A VITÓRIA DE
                            GRAÇA!</h2>
                        <p className={styles.p1}>Convidamos você para uma jornada emocionante em nosso cassino online
                            social, onde infinitas oportunidades de emoção e ganhos incríveis esperam por você. Mergulhe
                            na atmosfera emocional do jogo, sinta a adrenalina e aproveite cada momento desta
                            emocionante jornada! Veja por si mesmo que os ganhos no nosso casino são uma realidade à sua
                            espera!</p>
                    </div>

                </div>
            </Container>
        </section>
    );
};