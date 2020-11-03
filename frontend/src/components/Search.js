import React from 'react'
import styles from '../styles/search.module.css'

const Search = props => {
    return (
        <form className={styles.search}>
            <select className={styles.select} onChange={e => console.log(e.target.value)}>
                {props.selects.map(({ value, label }) => {
                    return (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    )})}
            </select>
            <input className={styles.input} type="text" value={props.text} onChange={event => props.setText(event.target.value)} />
            <input className={styles.button} type="submit" value="Search" />
        </form>
    )
}

export default Search