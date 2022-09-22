import { useState } from "react";
import "../../styles/scss/styles.scss"

export default function FilterGroup({ heading, filters, doSomethingAfterClick } ) {
    
    const defaultState = filters.map((state, index) => {
        return( (index === 0) ? true : false )
    });

    const [checkedState, setCheckedState] = useState(
        defaultState
    );
        
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((checked, index) =>
            index === position ? !checked : checked
        );
        //FilterGroups must have at least one item checked
        (updatedCheckedState.indexOf(true) ===-1)?setCheckedState(defaultState):setCheckedState(updatedCheckedState);
        
        doSomethingAfterClick();
    }


    return (
    <>
        <filterTitle>{heading}</filterTitle>   
            <div className="filterList">
                {filters.map((name, index) => {
                return (
                    <div key={index}>
                        <input
                            type="checkbox"
                            id={`sub-${index}`}
                            name={name}
                            value={index}
                            checked={checkedState[index]}
                            onChange={(event) => handleOnChange(index)}
                            /> {name}
                        </div>
                    );
                })}
            </div>       
        <filterSectionEnd />
    </>
    );
};
