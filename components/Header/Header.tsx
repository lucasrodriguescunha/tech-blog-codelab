import Image from 'next/image';

import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h1 className={styles.headerTitle}>
                    Encontre os <span>melhores artigos</span> de programação em um só lugar
                </h1>
                <p className={styles.headerSubtitle}>
                    Explore o topo da programação em um só lugar! Seu destino único para dicas e tendências atuais.
                </p>
                <button className={styles.headerButton}>Buscar artigos</button>
            </div>
            <div className={styles.imageWrapper}>
                <Image
                    src='/image.svg'
                    alt='Imagem de uma pessoa segurando um notebook'
                    width={400}
                    height={460}
                    className={styles.headerImage}
                />
            </div>
        </header>
    );
}