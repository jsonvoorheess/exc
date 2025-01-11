import {Container} from "../Container/Container.tsx";
import image from "../../assets/27.svg"
import logo from "../../assets/photo.jpg"
import {Link} from "react-router";
import styles from './Navbar.module.css'
import {FC} from "react";


interface NavbarProps {
    footer?: boolean
}

export const Navbar:FC<NavbarProps> = ({footer = false}) => {
    return (
        !footer ?
            <header className={styles.Header}>
            <Container>
                <div>
                    <div className={styles.header}>
                        <img className={styles.img} src={logo} alt="Логотип сайта"/>
                        <nav className={styles.links}>
                            <Link to="/">PAGINA INICIAL</Link>
                            <Link to="/as">POLITICA DE PRIVACIDADE</Link>
                        </nav>
                        <img className={styles.img} src={image} alt="Ограничение"/>
                    </div>
                    {footer &&
                        <div className={styles.footerbottom}>
                            <p className={styles.footerText}>
                                Esporte-br77.com é um inovador cassino online gratuito que convida você a um mundo
                                de entretenimento emocionante de jogos de azar. Aqui você pode jogar seus jogos de
                                azar favoritos, sentir a adrenalina da vitória e desfrutar de emocionantes momentos
                                de emoção, tudo sem nenhum risco financeiro. Garantimos-lhe uma experiência viva e
                                um ambiente alegre, para que possa desfrutar do jogo com total dedicação à diversão,
                                sem se preocupar com dinheiro.
                            </p>
                        </div>

                    }
                </div>
            </Container>
        </header> :
            <footer className={styles.Footer} >
                <Container>
                    <div>
                        <div className={styles.footer}>
                                <img className={styles.img} src={logo} alt="Логотип сайта"/>

                                <nav className={styles.links}>
                                    <Link to="/">PAGINA INICIAL</Link>
                                    <Link to="/as">POLITICA DE PRIVACIDADE</Link>
                                </nav>

                                <img className={styles.img} src={image} alt="Ограничение"/>
                        </div>
                        {footer &&
                            <div className={styles.footerbottom}>
                                <p className={styles.footerText}>
                                    Esporte-br77.com é um inovador cassino online gratuito que convida você a um mundo
                                    de entretenimento emocionante de jogos de azar. Aqui você pode jogar seus jogos de
                                    azar favoritos, sentir a adrenalina da vitória e desfrutar de emocionantes momentos
                                    de emoção, tudo sem nenhum risco financeiro. Garantimos-lhe uma experiência viva e
                                    um ambiente alegre, para que possa desfrutar do jogo com total dedicação à diversão,
                                    sem se preocupar com dinheiro.
                                </p>
                            </div>

                        }
                    </div>
                </Container>
            </footer>

    );
};
