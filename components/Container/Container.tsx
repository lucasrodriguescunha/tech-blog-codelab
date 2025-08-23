import Header from '@/components/HeroBanner/HeroBanner';

import styles from './Container.module.css';

export default function Container() {
    return (
        <div className={styles.container}>
            <Header/>
        </div>
    );
}