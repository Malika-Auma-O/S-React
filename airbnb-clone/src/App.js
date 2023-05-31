import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  let info = data.map(item => {
    return ( 
      <Card 
        key={item.id}
        img={item.coverImg} 
        rating={item.stats.rating} 
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    )
  })

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className="cards-list" >
        {info}
      </section>
      
    </div>
  );
}

export default App;
