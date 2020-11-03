import React from 'react'
import ListItem from './ListItem'
import styles from '../styles/list.module.css'

const List = props => {
    return (
        <div className={styles.list}>
            {props.charts.map((chart, index) => {
                return (
                        <ListItem 
                            key={index}
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
        </div>
    )
}

export default List