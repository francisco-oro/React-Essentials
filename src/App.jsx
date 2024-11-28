import {CORE_CONCEPTS} from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from "react";
function App() {
    const [tab, setTab] = useState('Please click a button');
    const handleSelect = (selectedButton) => {
        setTab(selectedButton);
    }

    return (
        <div>
            <Header/>
            <main>
                <section id={'core-concepts'}>
                    <h2>Core Concepts</h2>
                    <ul>

                        {CORE_CONCEPTS.map((item, index) => (
                            <CoreConcept key={index} title = {item.title} description = {item.description} image = {item.image} />
                        ))}
                    </ul>
                </section>
                <section id={'examples'}>
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    {tab}
                </section>
            </main>
        </div>
    );
}

export default App;
