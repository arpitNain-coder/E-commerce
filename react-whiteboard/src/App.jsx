import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ProductCard from "./components/productCard";
import FeaturedProducts from "./components/featured Collection/featuredProducts"
import Category from "./components/categories/categories";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturedProducts />
            <Category />
        </>
    );
}

export default App;