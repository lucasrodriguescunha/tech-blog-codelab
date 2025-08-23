import HeroBanner from '@/components/HeroBanner/HeroBanner';
import ArticleList from '@/components/ArticleList/ArticleList';

import styles from './Container.module.css';

export default function Container() {
    return (
        <div className={styles.container}>
            <HeroBanner/>
            <ArticleList/>
        </div>
    );
}