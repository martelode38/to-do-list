import styles from './Header.module.css';
import logo from '../assents/Logo.svg';

    
export function Header(){
    return(
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logomarca" />
        </header>
    );
}