import styles from './styles.module.css'

const NotFoundPage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>404</h1>
            <h2 className={styles.text}>Страница не найдена</h2>
        </div>

    );
}
export default NotFoundPage;