import {Container} from "../Container/Container.tsx";
import image from "../../assets/27.svg"
import logo from "../../assets/photo.jpg"
import {Link} from "react-router";
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <header className={styles.backgr} >
            <Container>
                <div className={styles.header} >
                    <img className={styles.img} src={logo} alt="Логотип сайта"/>
                    <nav className={styles.links} >
                        <Link to="/" >PAGINA INICIAL</Link>
                        <Link to="/as" >POLITICA DE PRIVACIDADE</Link>
                    </nav>
                    <img className={styles.img} src={image} alt="Ограничение"/>
                </div>
            </Container>
        </header>



    );
};
