// import './App.css';
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import GridOfCards from "../GridOfCards/GridOfCards";
import { useEffect, useState } from "react";
import axios from "axios";
import Section from "../Section/Section";

function HomePage() {
  let [topAlbums, setTopAlbums] = useState([]);
  let [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const albums1 = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      setTopAlbums(albums1.data);

      const albums2 = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      setNewAlbums(albums2.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Section data={topAlbums} title="Top Albums" />
      <Section data={newAlbums} title="New Albums" />
    </>
  );
}

export default HomePage;
