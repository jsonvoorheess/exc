import {Container} from "../Container/Container.tsx";
import image from "../../assets/27.svg"
import logo from "../../assets/photo.jpg"
import {Link, useLocation} from "react-router";
import styles from './Navbar.module.css'
import {FC, useEffect, useState} from "react";
import classNames from "classnames";
import useWindowSize from "../../utils/useWindowSize.tsx";
import listIcon from "../../assets/listIcon.svg"
import close from "../../assets/close.svg"


interface NavbarProps {
    footer?: boolean
}

export const Navbar:FC<NavbarProps> = ({footer = false}) => {
    const [isOpenList, setIsOpenList] = useState(false)
    const { width } = useWindowSize()
    const location = useLocation()

   useEffect(() => {
        setIsOpenList(false)
   }, [location.pathname])

    return (
        !footer ?
            <header className={styles.Header}>
            <Container>
                <div>
                    <div className={styles.header}>
                        <img className={styles.img} src={logo} alt="Логотип сайта"/>
                        {width > 1024 ? <nav className={styles.links}>
                                <Link className={classNames({
                                    [styles.offButton]: !document.cookie.includes("pum-79=true")
                                })} to="/">PAGINA INICIAL</Link>
                                <Link to="/info">POLITICA DE PRIVACIDADE</Link>
                            </nav> :

                            <div className={styles.dropdown}>
                                <button className={styles.btn} onClick={() => setIsOpenList(!isOpenList)}>
                                    {isOpenList ? <img src={close} alt="закрыть навигационную панель"/> :
                                        <img src={listIcon} alt="открыть навигационную панель"/>}
                                </button>
                                <Container>
                                    <div className={classNames(styles.dropdown_content, {
                                        [styles.dropdown_content_visible]: isOpenList
                                    })}>
                                        <Link className={classNames({
                                            [styles.offButton]: !document.cookie.includes("pum-79=true")
                                        })} to="/">PAGINA INICIAL</Link>
                                        <Link to="/info">POLITICA DE PRIVACIDADE</Link>
                                    </div>
                                </Container>

                            </div>

                        }
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

                            {width > 1024 ? <nav className={styles.links}>
                                    <Link className={classNames({
                                        [styles.offButton]: !document.cookie.includes("pum-79=true")
                                    })} to="/">PAGINA INICIAL</Link>
                                    <Link to="/info">POLITICA DE PRIVACIDADE</Link>
                                </nav> :
                                <div className={styles.dropdown}>
                                    <button className={styles.btn} onClick={() => setIsOpenList(!isOpenList)}>
                                        {isOpenList ? <img src={close} alt="закрыть навигационную панель"/> :
                                            <img src={listIcon} alt="открыть навигационную панель"/>}
                                    </button>
                                    <Container>
                                        <div className={classNames(styles.dropdown_content_footer, {
                                            [styles.dropdown_content_visible]: isOpenList
                                        })}>
                                            <Link className={classNames({
                                                [styles.offButton]: !document.cookie.includes("pum-79=true")
                                            })} to="/">PAGINA INICIAL</Link>
                                            <Link to="/info">POLITICA DE PRIVACIDADE</Link>
                                        </div>
                                    </Container>

                                </div>
                            }

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
