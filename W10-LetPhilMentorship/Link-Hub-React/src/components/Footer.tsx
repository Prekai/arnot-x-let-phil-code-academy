function Footer () {
    return (
    <footer>
        <section id="logoColumn">
            <img className="logo" src="src/assets/react.svg"/>
            <h2>Link Hub</h2>
            <p id="footerDescription">The unified professional identity network for people</p>
            <p>&copy; 2026 Link Hub Premium. All rights reserved. Registered trademark</p>
        </section>
        <section id="product">
            <h4>Product</h4>
            <ol>
                <li>About</li>
                <li>Premium Plans</li>
                <li>Explore profiles</li>
                <li>Product updates</li>
            </ol>
        </section>
        <section id="Resources">
            <h4>Resources</h4>
            <ol>
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ol>
        </section>
    </footer>
    )
}

export default Footer;