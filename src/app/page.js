import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";
import Card from "./components/Card";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <main>
        <article>
          <Map />
        </article>
        <article className="listings">
          <h2>Rental Listings</h2>
          <div className="cards-container">
            <Card />
          </div>
        </article>
      </main>
    </>
  );
};

export default Home;
