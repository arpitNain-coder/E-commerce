import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ProductCard from "./components/productCard";
import FeaturedProducts from "./components/featured Collection/featuredProducts"
import Category from "./components/categories/categories";
import Footer from "./components/footer/footer";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturedProducts />
            <Category />
            <Footer/>
        </>
    );
}

export default App;