import { useState } from "react";


const Autocomplete = ({options = ["Oranges" , "Apples", "Pearls"]}) =>{
    const [value, setValue]= useState ("")
    const [showSuggestions, setShowSuggestions]= useState(false);
    const suggestions = options.filter(option => option.toLowerCase().includes(value.toLowerCase()))

    const [suggestionsDisplay, setSuggestion] =  useState('hideSuggestions')

 
    
   const suggestionsVisibility = () =>{
        setShowSuggestions(true)
        setSuggestion("suggestions")
    }

    const handleChange = event => {
        setValue(event.target.value);
    }

    const handleSuggestionClick =(suggestion) => {
        setValue(suggestion);
        setShowSuggestions(false);
    }  
    
    return (
        <div className="autocompleted" >
             <input
             value={value}
             onChange={handleChange}
             placeholder="search"
             onFocus={() => suggestionsVisibility()}
             onBlur= {() => setShowSuggestions(false)}
            />   

    
    {showSuggestions && (

        <ul className={suggestionsDisplay}>
            {suggestions.map(suggestion => (
                <li onClick = {handleSuggestionClick} key={suggestion}>
                    {suggestion}
                </li>
            ))}
        </ul>
    )}
    </div>
)};


export default Autocomplete;






