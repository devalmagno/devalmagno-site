import styles from './sendMessageButton.module.css';

export default function SendMessageButton() {
    return (
        <button className={styles.sendMessageButton}>
            <a>
                Entrar em contato
            </a>
        </button>
    );
}