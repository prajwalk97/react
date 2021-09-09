import React from "react";
import './search-box.styles.css';

export const SearchBox = ({placeholder , handle}) => {
     return <input type='search' 
     placeholder={placeholder}
      onChange={handle}/>
}