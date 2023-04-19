// searchinput ref: https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/
import { useState, useEffect } from "react";



export default function SearchBar() {


const [searchInput,setSearchInput] = useState ('');
//searchInput is a string, setSearchInput to set the search input

// create a function to handle the search functionality
// every time the function monted, searchItem will be fired and perform an action:
const searchItem = (searchValue) => {
    setSearchInput(searchValue)
    // console.log(searchValue)
    
}


return(

<input 
type='text'
placeholder='Search ...'
value={searchInput}
// onKeyDown={searchBook}
// the use of anomymnous function is that when the input is fired up, then onChange will get to work, if we run it as searchItem(), then even w/o input it will run
// onChange is monted, and an event is called.  it fires the value from input and pass it along to searchItem
onChange= {(evt) => searchItem(evt.target.value)}
/>
)

}
