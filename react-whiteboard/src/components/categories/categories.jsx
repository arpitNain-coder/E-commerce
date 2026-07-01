import ProductCard from "../productCard";
import "./categories.css"
import mens from "../../assets/mens.png"
import womens from "../../assets/womens.png"
import shoes from "../../assets/shoes.png"
import electronics from "../../assets/electronics.png"
import accessories from "../../assets/accessories.png"
import beauty from "../../assets/beauty.png"


function Category() {
    const topcategories = [
        {id: 1, name : "Men", image: mens},
        {id : 2, name : "Women", image: womens},
        {id : 3, name : "Shoes", image: shoes},
        {id : 4, name : "Electronics", image: electronics},
        {id : 5, name : "Accessories", image: accessories},
        {id : 6, name : "Beauty", image: beauty}
    ]
    return (
        <section className="categories">
            <h1>Shop by Category</h1>

            <div className="categoryContainer">
                {topcategories.map((item) => (
                    <div className="categoryCard" key={item.id}>
                        <div className="image">
                            <img src={item.image} alt={item.name}/>
                        </div>

                        <h3>{item.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Category;