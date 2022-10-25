import Card from "../components/Card";
import data from "../data";

function Section() {
    //Cards
    const cards = data.map(item => {
        return(
            <Card 
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                country={item.country}
                title={item.title}
                price={item.price}
                />
        )
    })
    return (
        <section className="cards-list">
            {cards}
        </section>
    )
    
}
export default Section