import React, { useState, useEffect } from 'react';
import './Home.css';
import NavBar from '../../Components/NavBar/NavBar';

import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCard from '../../Components/TitleCard/TitleCard';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  const [data, setData] = useState(null); // State to hold a single movie data
  const category = "now_playing"; // Default category for the main banner

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGRhYWI5NjNmNjE5Y2FhYmUzMGJlMjJlY2E3MmRmMyIsIm5iZiI6MTczMTgyNDA3OS43NjIzNjQxLCJzdWIiOiI2NzM5ODZkMzczYTQ1ZTUxODRiZjdlZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YD8VxLujI9W-4SMS1R-MFamyxPt5W2PXF7hG2nl46Q4'
    }
  };

  useEffect(() => {
    // Fetch movies
    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => {
        const randomIndex = Math.floor(Math.random() * res.results.length);
        setData(res.results[randomIndex]); 
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='home'>
      <NavBar />
      <div className='hero'>
        {/* Show a loading state while data is not fetched */}
        {data ? (
          <>
            <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt={data.title} className='banner-img' />
            <div className="hero-caption">
              {/* Dynamically display movie title and description */}
              <h1 className="hero-title">{data.title}</h1>
              <p>{data.overview || "No description available for this movie."}</p>
              <div className="hero-btns">
                <button className='btn'><img src={play_icon} alt="Play" />Play</button>
                <button className='btn dark-btn'><img src={info_icon} alt="More Info" />More Info</button>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="more-cards">
        {/* Pass categories to TitleCard */}
        <TitleCard title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCard title={"Only on Netflix"} category={"popular"} />
        <TitleCard title={"Upcoming"} category={"upcoming"} />
        <TitleCard title={"Topics for You"} category={"now_playing"} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;

