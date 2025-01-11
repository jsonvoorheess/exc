import styles from './BottomWarningMessageComponent.module.css'
import warn from '../../assets/27.svg'
import {Container} from "../Container/Container.tsx";


export const BottomWarningMessageComponent = () => {
    return (
        <section className={styles.warnComp} >
            <Container>
                <div className={styles.page} >
                    <div className={styles.info}>
                        <h2 className={styles.h2}>DIVERSÃO EM JOGOS INTELIGENTES: JOGOS PARA ENTRETENIMENTO ONLINE PARA
                            ADULTOS A PARTIR DOS 18
                            ANOS!</h2>
                        <p className={styles.p}>Estamos empenhados em garantir que a nossa posição de jogo se baseia num
                            sistema de verificação
                            robusto que proporciona uma verificação segura da idade aos nossos clientes. Este é um
                            princípio
                            fundamental que define a nossa abordagem para a criação de serviços de jogo seguros, pois
                            acreditamos fortemente que os jogos só devem ser acedidos por adultos responsáveis ​​e
                            conscientes. Acreditamos firmemente que o jogo responsável não consiste apenas em seguir as
                            regras, mas também em mostrar cuidado e atenção aos nossos clientes.</p>
                        <h3 className={styles.h3}>18+ www.gamblingtherapy.org – Gambling Therapy é um serviço de apoio
                            on-line mundial que oferece
                            aconselhamento a pessoas que foram afetadas negativamente pelo jogo.</h3>
                        <h3 className={styles.h3}>www.gamblersanonymous.org/ga – Jogadores Anônimos oferece
                            aconselhamento por telefone ou
                            pessoalmente a qualquer pessoa afetada pelo jogo.</h3>
                    </div>
                    <img className={styles.img} src={warn} alt="warning"/>
                </div>
            </Container>
        </section>
    );
};
