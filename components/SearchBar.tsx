"use client";

import React, { useState } from "react";

import { SearchManufacturer } from "@/components";


const SearchBar = () => {
    const [manufacturer, setManuFacturer] = useState("");
    const [model, setModel] = useState("");
    const handleSearch = () => {}
    
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer 
                    manufacturer={manufacturer}
                    setManuFacturer={setManuFacturer}
                />
            </div>
        </form>
    );
};
    
export default SearchBar;