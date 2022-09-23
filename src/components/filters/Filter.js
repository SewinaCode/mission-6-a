import React from "react";
import "../../styles/scss/styles.scss"

import FilterGroup from "./FilterGroup"

const allFilterHeadings = [
    {
        filter: "Select Store",
        filterItems: [{ item: "Albany/Akl" }, { item: "Glenfield/Akl" }]
    },
    {
        filter: "Price",
        filterItems: [{ item: "$805-$1000" }, { item: "$1000-$1500" }]
    },
    {
        filter: "Brand",
        filterItems: [{ item: "All brands" }, { item: "Acer" }, { item: "Apple Brands" }]
    }

]


function Filter({ updateSelect }) {

    const handleOnChange = (e) => {
        updateSelect(e);
    };


    return (
        <div className="filter-frame">
            {allFilterHeadings.map((filter) => {

                return (

                    <FilterGroup heading={filter.filter}
                        filters={filter.filterItems}
                        updateSelect={handleOnChange} />
                );
            })}
        </div >
    )

}

export default Filter;