import Header from '@/components/Header/Header';

import styles from './Container.module.css';

export default function Container() {
    return (
        <div className={styles.container}>
            <Header/>
        </div>
    );
}