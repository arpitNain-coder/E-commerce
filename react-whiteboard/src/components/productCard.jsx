import "./productCard.css";

function ProductCard(props) {
    return (
        <div className="productCard">
            <div className="img">
                <img/>
            </div>
            <div className="info">
                <h3>{props.name}</h3>
                <p>{props.rating}</p>
                <p>{props.price}</p>
                <button>Add To Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;