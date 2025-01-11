import {Container} from "../Container/Container.tsx";
import styles from "./InfoSection.module.css"

export const InfoSection = () => {
    return (
        <section className={styles.infosection} >
            <Container>
                <h2 className={styles.h2} >TESTE SUA EXPERIÊNCIA DE CASSINO EM NOSSA PLATAFORMA DE JOGOS INTERATIVOS: APROVEITE O JOGO E GANHE!</h2>
                <div className={styles.bottomLevelSection} >
                    <article className={styles.article} >
                        <h3 className={styles.h3} >Modos bônus:</h3>
                        <p className={styles.p} >Fish Slot tem recursos de bônus exclusivos, como rodadas grátis, símbolos de expansão ou multiplicadores de vitória que ajudam a aumentar suas chances de ganhar.</p>
                    </article>
                    <article className={styles.article} >
                        <h3 className={styles.h3} >Assunto fascinante:</h3>
                        <p className={styles.p} >O jogo Fish Slot foi desenhado com o tema da pesca, dando aos jogadores a oportunidade de desfrutar de um jogo divertido e interessante com seus personagens marinhos favoritos.</p>
                    </article>
                    <article className={styles.article} >
                        <h3 className={styles.h3} >Interação social:</h3>
                        <p className={styles.p} >O jogo Fish Slot é muito popular entre os jogadores pela oportunidade de interagir com outros usuários, trocar impressões e experiências do jogo.</p>
                    </article>
                </div>
            </Container>
        </section>
    );
};
