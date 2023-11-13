import styles from "./Nabar.module.css";

function Navbar () {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={styles.Navbar__brand}>movie app</h1>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>Home</li>
                        <li className={styles.navbar__item}>add Movie</li>
                        <li className={styles.navbar__item}>Populer</li>
                        <li className={styles.navbar__item}>Now playing</li>
                        <li className={styles.navbar__item}>Top rated</li>
                    </ul>
                </div>

            </nav>

        </div>
    )
}
export default Navbar