import hero from "../assets/hero.png";
import "./hero.css";

function Hero() {
    return (
        <section className="Hero">
            <div className="HeroLeft">
                <p className="titlep">New Collection</p>
                <h1>Discover the latest fashion trends.</h1>
                <p>Premium clothing, accessories</p>
                <button>Shop Now</button>
            </div>
            <div className="HeroRight">
                <img src={hero} alt="Hero Product" />
            </div>
        </section>
    );
}

export default Hero;