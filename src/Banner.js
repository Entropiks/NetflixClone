import React, {useState, useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import './banner.css';

function Banner() {
    const [movie, setMovie] = useState ([]);

    /* run once when Banner loads, ramdomize the movie */
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(requests.fetchOriginals);
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]
        );
        return requests;
        }
        fetchData();
    }, []);

    // console.log(movie);

    // after definitely string length, add ...
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <header className="banner"
                style={{
                   backgroundSize: "cover",
                   backgroundImage: `url(
                       "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                   )`,
                   backgroundPosition: "center center",
                }}> 
            <div className="banner_contents">
                <h1 className="banner_title"> {/* checking if it exists, if not go to the next in case API doesn't use consistent naming */}
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
               <div className="banner_buttons">
                   <button className="banner_button">Play</button>
                   <button className="banner_button">My List</button>
               </div>
                <h1 className="banner_description">
                    {/* after 150 characters, add ... */}
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner_fadeBottom" />
        </header>
    )
}

export default Banner
