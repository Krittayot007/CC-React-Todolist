import styles from './TodoHeader.module.scss'

export function TodoHeader () {
    const now = new Date();
    const options = {weekday: 'short', month: 'short', day:'numeric'};
    return (
        <div className={styles.header}>
            <h2>Inbox</h2>
            <p>{now.toLocaleDateString('en-US',options)}</p>
        </div>
    );
};