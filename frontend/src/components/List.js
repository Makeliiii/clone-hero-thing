import React from 'react'
import ListItem from './ListItem'
import styles from '../styles/list.module.scss'

const List = props => {
    return (
        <table className={styles.list}>
            <thead>
                <tr className={styles.listItem}>
                    <th>Song</th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Charter</th>
                    <th>Year</th>
                    <th>Lyrics</th>
                    <th>Song Length</th>
                </tr>
            </thead>
            <tbody>
                {props.charts.map(chart => {
                    return (
                        <ListItem 
                            key={chart._id}
                            id={chart._id}
                            name={chart.Name}
                            album={chart.Album}
                            artist={chart.Artist}
                            genre={chart.Genre}
                            charter={chart.Charter}
                            year={chart.Year}
                            lyrics={chart.lyrics}
                            songlength={chart.songlength}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}

export default List