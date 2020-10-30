import React from 'react'

const Search = props => {
    return (
        <form>
            <select onChange={e => console.log(e.target.value)}>
                {props.selects.map(({ value, label }) => {
                    return (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    )})}
            </select>
            <input type="text" value={props.text} onChange={event => props.setText(event.target.value)} />
            <input type="submit" value="Search" />
        </form>
    )
}

export default Search