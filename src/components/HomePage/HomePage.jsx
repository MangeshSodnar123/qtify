// import './App.css';
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import GridOfCards from "../GridOfCards/GridOfCards";
import { useEffect, useState } from "react";
import axios from "axios";
import Section from "../Section/Section";

function HomePage() {
  let [topAlbums, setTopAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const albums = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      setTopAlbums(albums.data);
      console.log(topAlbums);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Section data={topAlbums} title="Top Albums"/>
    </>
  );
}

export default HomePage;
