import Image from 'next/image';

import styles from './CardArticle.module.css';

interface CardArticleProps {
    image: string
    title: string;
    description: string;
}

export default function CardArticle({image, title, description}: CardArticleProps) {
    return (
        <div className={styles.cardArticleContainer}>
            <section>
                <article className={styles.cardArticleContent}>
                    <Image
                        src={image}
                        alt='Imagem do artigo'
                        width={384}
                        height={175}
                        className={styles.articleImage}
                    />

                    <div className={styles.cardArticleSection}>
                        <h3 className={styles.cardArticleTitle}>{title}</h3>
                        <p className={styles.cardArticleDescription}>{description}</p>
                    </div>
                </article>
            </section>
        </div>
    );
}