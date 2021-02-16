import styles from './sendMessageButton.module.css';

function openWhatsapp() {
    document.querySelector('#whatsapp').click();
}

export default function SendMessageButton() {
    return (
        <button className={styles.sendMessageButton} onClick={openWhatsapp}>
            <a id="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=5538998925788&text=Ol%C3%A1%2C%20L%C3%BAcio.%20Estou%20interessado%20nos%20seus%20servi%C3%A7os%20e%20desejo%20te%20contratar.">
                Entrar em contato
            </a>
        </button>
    );
}