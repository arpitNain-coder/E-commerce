import "./productCard.css";

function ProductCard() {
    return (
        <div className="productCard">
            <div className="img">
                <img/>
            </div>
            <div className="info">
                <h3>Product Name</h3>
                <p>Rating : </p>
                <p>Rs 3999</p>
                <button>Add To Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;