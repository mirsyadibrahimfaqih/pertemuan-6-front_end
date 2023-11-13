import styles from "./Movies.module.css"
import React, { useState } from "react";
import Movie from "../Movie/Movie";
import DataMovie from "../../utils/constants/DataMovie";

const Movies = () => {




    const [item, setItem] = useState(DataMovie)
    const handleClick = () => {
        const movie = {
            id:11,
            title: "Ant-Man ",
            date: "29 Juni 2015",
            image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8YxOIPrabqkQCOKKbuxaz9IcqhO.jpg"
        }
        const movie2 = {
            id:12,
            title: "Ghost Rider",
            date: "16 Februari 2007",
            image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8LaVQiXBsnlo7MXCPK1nXTVARUZ.jpg"
        }
        const movie3 = {
            id:13,
            title: "Loki",
            date: "9 Juni 2021",
            image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rovrONQ1exkew2WtunaJZ6m66Nd.jpg"
        }

        setItem([...item, movie, movie2, movie3])
    }
    return (
        <div className={styles.container}>
        <section className={styles.movies}>
            <h2 className={styles.movies__title}>Other films</h2>
            <div className={styles.movie__container}>
            {
                item.map(function(data){
                return(
                   
                    <Movie key={data.id} title={data.title} date={data.date} image={data.image}/>
                    
                )
                })
            }
            </div>
            <button onClick={handleClick}>tambah</button>
        </section>
        </div>
    )
}
export default Movies;