import ProductCard from "../productCard";
import "./featuredProducts.css";

function FeaturedProducts() {

    const products = [
        { id: 1, name: "Nike Shoes", rating: "★★★★★", price: 3999 },
        { id: 2, name: "Adidas Sneakers", rating: "★★★★", price: 3499 },
        { id: 3, name: "Apple Watch", rating: "★★★★½", price: 24999 },
        { id: 4, name: "Audi Shoes", rating: "★★★½", price: 5999 }
    ];
    return (
        <section className="featured">
            <h1>Featured Products</h1>
            <div className="productContainer">
                {products.map((item) => (
                    <ProductCard
                        key={item.id}
                        name={item.name}
                        rating={item.rating}
                        price={item.price}
                    />
                ))} 
            </div>
        </section>
    );
}

export default FeaturedProducts;