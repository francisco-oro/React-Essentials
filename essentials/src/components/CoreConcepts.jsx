import React from 'react'
import {CORE_CONCEPTS} from "../data";
import CoreConcept from "./CoreConcept";

function CoreConcepts(props) {
    return (
        <section id={'core-concepts'}>
            <h2>Core Concepts</h2>
            <ul>

                {CORE_CONCEPTS.map((item, index) => (
                    <CoreConcept key={index} title={item.title} description={item.description}
                                 image={item.image}/>
                ))}
            </ul>
        </section>
    )
}

CoreConcepts.propTypes = {}
export default CoreConcepts
