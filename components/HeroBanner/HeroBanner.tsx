import Image from 'next/image';

import styles from './HeroBanner.module.css';

export default function HeroBanner() {
    return (
        <header className={styles.heroBannerContainer}>
            <div className={styles.heroBannerContent}>
                <h1 className={styles.heroBannerTitle}>
                    Encontre os <span>melhores artigos</span> de programação em um só lugar
                </h1>
                <p className={styles.heroBannerSubtitle}>
                    Explore o topo da programação em um só lugar! Seu destino único para dicas e tendências atuais.
                </p>
                <button className={styles.heroBannerButton}>Buscar artigos</button>
            </div>
            <div className={styles.imageWrapper}>
                <Image
                    src='/image.svg'
                    alt='Imagem de uma pessoa segurando um notebook'
                    width={400}
                    height={460}
                    className={styles.heroBannerImage}
                />
            </div>
        </header>
    );
}