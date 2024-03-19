import Image from 'next/image';
import styles from '../styles/titlebar.module.css';

const Titlebar = () => {
    return (
        <section className= {styles.titlebar}>
                <Image
                src = "/vscode_icon.svg"
                alt = "vscode icon"
                height={15}
                width={15}
                className={styles.icon}
                />

            <div className={styles.items}>
                <p>File</p>
                <p>Edit</p>
                <p>Selection</p>
                <p>View</p>
                <p>Go</p>
                <p>Run</p>
                <p>Help</p>
                <p>Terminal</p>
            </div>
            <p className={styles.title}>Tingwei Adeck - Visual Studio Code</p>
            <div className={styles.windowButtons}>
                <span className={styles.minimize}></span>
                <span className={styles.maximize}></span>
                <span className={styles.close}></span>
            </div>
        </section>
    );
};

export default Titlebar;