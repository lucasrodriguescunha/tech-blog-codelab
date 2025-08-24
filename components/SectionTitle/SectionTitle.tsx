import styles from './SectionTitle.module.css';

export default function SectionTitle() {
    return (
        <div className={styles.sectionTitleContainer}>
            <h2 className={styles.sectionTitle}>Artigos recomendados</h2>
        </div>
    );
}