import React from 'react'

 function Search({handleChange}) {
    return (
        <div>
         <input type="search" onChange={handleChange}></input>
        </div>
    )
}
export default Search
