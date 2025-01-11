import styles from "./TopWarningMessageComponent.module.css"
import warningImage from "../../assets/27.svg";


export const TopWarningMessageComponent = () => {
    return (
        <div className={styles.content}>
            <h1>JOGUE DE FORMA INTELIGENTE: DIVERSÃO DE CASSINO ONLINE PARA ADULTOS MAIORES DE 18 ANOS!</h1>
            <img className={styles.img} src={warningImage} alt="Предупреждение 18+"/>
            <p className={styles.p1}>
                Em nossa empresa, estamos comprometidos não apenas em proporcionar diversão e entretenimento
                por meio de nossos jogos, mas também em capacitar nossos clientes a jogar em um ambiente
                seguro
                e responsável. Seguimos cuidadosamente regras internas e políticas rigorosas que visam a
                proteção
                e segurança dos nossos clientes. Através da melhoria constante e da aplicação dos métodos
                mais
                recentes
                , garantimos um jogo justo e transparente. Nosso principal objetivo é que cada um de nossos
                clientes
                aproveite a jogabilidade sem comprometer seu bem-estar físico e psicológico.
            </p>
            <p className={styles.p2}>
                18+ <a href="https://www.gamblingtherapy.org/" target="_blank" >www.gamblingtherapy.org </a> – Gambling Therapy é um serviço de apoio on-line mundial que
                oferece
                aconselhamento a pessoas que foram afetadas negativamente pelo jogo
            </p>
            <p className={styles.p2}>
                <a href="https://www.gamblersanonymous.org/ga" target="_blank" >www.gamblersanonymous.org/ga</a>  – Jogadores Anônimos oferece aconselhamento por telefone ou
                pessoalmente a qualquer pessoa afetada pelo jogo.
            </p>
        </div>
    );
};
