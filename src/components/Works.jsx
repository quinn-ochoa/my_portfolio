import { useState } from "react";
import { WORKS } from "../data";
import TabButton from "./TabButton";
import Tabs from "./Tabs";

export default function Works(){
    const [selectedWorks, setSelectedWorks] = useState();

    function handleSelect(selectedBtn){
        setSelectedWorks(selectedBtn);
    }

    return(
        <section id="works">
            <h2>Works</h2>
            <Tabs 
                buttons={
                    <>
                        <TabButton isSelected={selectedWorks === 'commerce'} onClick={()=> handleSelect('commerce')}>E-commerce</TabButton>
                        <TabButton isSelected={selectedWorks === 'app'} onClick={()=> handleSelect('app')}>Movie App</TabButton>
                        <TabButton isSelected={selectedWorks === 'site'} onClick={()=> handleSelect('site')}>Camping Site</TabButton>
                    </>
                }
            >
                {
                    !selectedWorks ? <p>Please choose a tab</p> :
                    (
                        <div id="tab-content">
                            <h3>{WORKS[selectedWorks].title}</h3>
                            <p>{WORKS[selectedWorks].description}</p>
                            <div>{WORKS[selectedWorks].gif}</div>
                        </div>
                    )
                }
            </Tabs>
        </section>
    )
}