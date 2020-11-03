import React from 'react'
import styles from '../styles/listItem.module.css'

const ListItem = props => {
    return (
        <ul className={styles.listItem}>
            <li>{props.name}</li>
            <li>{props.album}</li>
            <li>{props.artist}</li>
            <li>{props.genre}</li>
            <li>{props.charter}</li>
            <li>{props.year}</li>
            <li>{!props.lyrics ? 'No' : 'Yes'}</li>
            <li>{props.songlength}</li>
        </ul>
    )
}

export default ListItem