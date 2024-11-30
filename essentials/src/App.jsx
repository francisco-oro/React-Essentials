import {CORE_CONCEPTS} from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from "react";
import {EXAMPLES} from "./data";

function App() {
    const [tab, setTab] = useState('');
    const handleSelect = (selectedButton) => {
        setTab(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;
    if (tab)
        tabContent = (<div id={'tab-content'}>

            <h3>{EXAMPLES[tab].title}</h3>
            <p>{EXAMPLES[tab].description}</p>
            <pre>
                <code>
                    {EXAMPLES[tab].code}
                </code>
            </pre>
        </div>)

    return (
        <div>
            <Header/>
            <main>
                <section id={'core-concepts'}>
                    <h2>Core Concepts</h2>
                    <ul>

                        {CORE_CONCEPTS.map((item, index) => (
                            <CoreConcept key={index} title={item.title} description={item.description}
                                         image={item.image}/>
                        ))}
                    </ul>
                </section>
                <section id={'examples'}>
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={tab === "components"} onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton isSelected={tab === "jsx"} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton isSelected={tab === "props"} onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton isSelected={tab === "state"} onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
