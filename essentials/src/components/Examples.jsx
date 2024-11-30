import React, {useState} from 'react'
import TabButton from "./TabButton";
import {EXAMPLES} from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

function Examples(props) {
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
        <Section id={'examples'} title={"Examples"}>
            <Tabs
                buttons={<>
                <TabButton isSelected={tab === "components"}
                           onClick={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={tab === "jsx"} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={tab === "props"} onClick={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={tab === "state"} onClick={() => handleSelect('state')}>State</TabButton>
            </>}>
                {tabContent}
            </Tabs>
        </Section>
    )
}

export default Examples;