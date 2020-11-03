import React, { useState } from 'react'
import styles from '../styles/search.module.css'

const Search = props => {
    const [select, setSelect] = useState('')

    return (
        <form className={styles.search} onSubmit={event => {
            props.search(select, props.text)
            event.preventDefault()
        }}>
            <select className={styles.select} onChange={e => setSelect(e.target.value)}>
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