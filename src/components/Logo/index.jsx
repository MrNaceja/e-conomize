import styles from './style.module.css'
import economizeLogo from '../../assets/economizeLogo.svg'

export default function Logo() {
    return (
        <img className={styles.logo} src={economizeLogo} alt="Logo do e-conomize" />
    )
}