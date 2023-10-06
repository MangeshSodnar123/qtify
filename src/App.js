import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card image_url="https://picsum.photos/159/176"
        followers="100"
        title= "New Bollywood"
      />
    </>
  );
}

export default App;
