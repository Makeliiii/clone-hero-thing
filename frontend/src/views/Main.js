import React, { useEffect, useState } from 'react'

// components
import Search from '../components/Search'
import ListItem from '../components/ListItem'

const Main = () => {
    const [charts, setCharts] = useState([])
    const [text, setText] = useState('')
    const [selects] = useState([
        { label: "Name", value: "name" },
        { label: "Album", value: "album" },
        { label: "Artist", value: "artist" },
        { label: "Genre", value: "genre" },
        { label: "Charter", value: "charter" },
    ])

    useEffect(() => {
        fetch('http://localhost:8000/api/charts')
            .then(res => res.json())
            .then(data => {
                setCharts(data.songs)
            })
    }, [])

    return (
        <div>
            <Search
                selects={selects}
                setText={setText}
                text={text}
            />
            <ul>
                {charts.map((chart, index) => {
                    return (
                        <li key={index}>
                            <ListItem 
                                name={chart.Name}
                                album={chart.Album}
                                artist={chart.Artist}
                                genre={chart.Genre}
                                charter={chart.Charter}
                                year={chart.Year}
                                lyrics={chart.lyrics}
                                songlength={chart.songlength}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Main