import styles from "./Hero.module.css";

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
            <div className={styles.hero__left}>
            <h2 className={styles.hero__title}>Spider-Man: No Way Home</h2>
            <h3 className={styles.hero___genre}>
            Genre: Action, Drama, Romance, Comedy
            </h3>
        <p className={styles.hero__description}>
        Spiderman No Way Home menceritakan kembali seorang Peter Parker. Saat itu ia di fitnah oleh Mysterio musuh spiderman di film sebelumnya yaitu Spider-Man Far From Home. Mysterio mengungkap idientitas di balik kostum Spiderman dan memfitnahnya bahwa Peter adalah pembunuh dan Villain.
    </p>
<button className={styles.hero__button}>Watch</button>
</div>
<div className="hero_right">
<img
className={styles.hero_image}
src="https://assets.pikiran-rakyat.com/crop/0x0:1080x608/x/photo/2021/12/16/61902033.jpeg"
alt="placeholder"
/>
</div>
</section>
</div>
);
}
export default Hero;