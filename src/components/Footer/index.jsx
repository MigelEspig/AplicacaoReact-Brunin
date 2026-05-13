import styles from "./Footer.module.css"

function Footer() {
    return(
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <p className={styles.footerText}>© 2026 PombaEats. Todos os direitos reservados.</p>
                <div className={styles.socialSection}>
                    <span className={styles.socialLabel}>Siga-nos:</span>
                    <div className={styles.socialLinks}>
                        <a
                            className={styles.socialLink}
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                    >
                            Facebook
                        </a>
                        <a
                            className={styles.socialLink}
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>
                        <a
                            className={styles.socialLink}
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </a>
                        <a
                            className={styles.socialLink}
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Footer };