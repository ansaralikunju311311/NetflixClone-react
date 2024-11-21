import React from 'react'
import './Home.css'
import NavBar from '../../Components/NavBar/NavBar'
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import  play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../Components/TitleCard/TitleCard';
import Footer from '../../Components/Footer/Footer';
const Home = () => {
  return (
    <div className='home'>
       <NavBar />
    <div className='hero'>
            <img src={hero_banner} alt=""  className='banner-img' />
      
    <div className="hero-caption">
      <img src={hero_title} alt=""  className='caption-img'/>
      <p>Discovering his ties to a secret ancident order , a young man living in modern istabul embarks on a quest to save the city from an immoral enemy</p>
      <div className="hero-btns">
        <button className='btn'><img src={play_icon} alt="" />play</button>
        <button className='btn dark-btn'><img src={info_icon} alt="" />More info</button>
      </div>
      <TitleCard />

      </div>
      
      </div>
      <div className="more-cards">

      <TitleCard  title={"Block Buster Movie"} category={"top_rated"}/>
      <TitleCard  title={"Only on Netflix"} category={"popular"}/>
      <TitleCard  title={"Upcoming"} category={"upcoming"}/>
      <TitleCard  title={"Topic for You"} category={"now_playing"}/>
      </div>



      <Footer />
    </div>
    
  
  )
}

export default Home
