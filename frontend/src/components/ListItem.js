import React from 'react'
import styles from '../styles/list.module.scss'

const ListItem = props => {
    const songlength = () => {
        const minutes = Math.floor(props.songlength / 60000)
        const seconds = ((props.songlength % 60000) / 1000).toFixed(0)
        return (seconds == 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
    }

    return (
        <tr className={styles.listItem}>
            <td>{props.name}</td>
            <td>{props.album}</td>
            <td>{props.artist}</td>
            <td>{props.genre}</td>
            <td>{props.charter}</td>
            <td>{props.year}</td>
            <td>{!props.lyrics ? 'No' : 'Yes'}</td>
            <td>{songlength()}</td>
        </tr>
    )
}

export default ListItem