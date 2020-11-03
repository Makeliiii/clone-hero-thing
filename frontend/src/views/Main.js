import React, { useEffect, useState } from 'react'

// components
import Search from '../components/Search'
import List from '../components/List'

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
            <List
                charts={charts}
            />
        </div>
    )
}

export default Main