import reactImg from "../assets/react-core-concepts.png";
import "./Header.css"

function Header() {
    const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    }
    const description = reactDescriptions[getRandomInt(0, 3)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}
export default Header;