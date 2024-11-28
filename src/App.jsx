import reactImg from "./assets/react-core-concepts.png"

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function Header() {
    const description = reactDescriptions[getRandomInt(0,3)];

    return (
    <header>
        <img src={reactImg} alt="Stylized atom"/>
        <h1>React Essentials</h1>
        <p>
            {description} React concepts you will need for almost any app you are
            going to build!
        </p>
    </header>
)}

function CoreConcept() {
    return <li>
        <img src="..." alt="..."/>
        <h3>Title</h3>
        <p>Description</p>
    </li>
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id={'core-concepts'}>
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept />
                    </ul>
                </section>

                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
