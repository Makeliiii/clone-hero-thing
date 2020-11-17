import React from 'react'
import styles from '../styles/list.module.scss'

const ListItem = props => {
    return (
        <tr className={styles.listItem}>
            <td>{props.name}</td>
            <td>{props.album}</td>
            <td>{props.artist}</td>
            <td>{props.genre}</td>
            <td>{props.charter}</td>
            <td>{props.year}</td>
            <td>{!props.lyrics ? 'No' : 'Yes'}</td>
            <td>{props.songlength}</td>
        </tr>
    )
}

export default ListItem