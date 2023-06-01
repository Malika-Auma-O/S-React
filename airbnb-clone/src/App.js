import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  let info = data.map(item => {
    return ( 
      <Card
      key={item.id}
      // give the entire item object instead of individual items
      item={item}
      // you can also use spread syntax instead of items above and remove the .item in Cards.js
      // {...item}
      />
      
      // <Card 
      //   key={item.id}
      //   img={item.coverImg} 
      //   rating={item.stats.rating} 
      //   reviewCount={item.stats.reviewCount}
      //   location={item.location}
      //   title={item.title}
      //   price={item.price}
      //   openSpots={item.openSpots}
      // />
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
