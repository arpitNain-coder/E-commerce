import "./footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footerTop">
                <div className="company">
                    <h2>MyShop</h2>
                    <p>The best online market in the world.</p>
                </div>
                <div className="quickLinks">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Cart</li>
                    </ul>
                </div>
                <div className="categories1">
                    <h3>Categories</h3>
                    <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Shoes</li>
                        <li>Electronics</li>
                        <li>Accessories</li>
                        <li>Beauty</li>
                    </ul>
                </div>
            </div>
            <div className="footerBottom">
                <p>
                    © 2026 MyShop. All Rights Reserved.
                </p>
            </div>

        </footer>
    );
}

export default Footer;