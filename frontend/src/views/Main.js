import React, { useEffect, useState } from 'react'

// components
import Search from '../components/Search'
import List from '../components/List'

const Main = () => {
    const [charts, setCharts] = useState([])
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(true)
    const [selects] = useState([
        { label: "Name", value: "names" },
        { label: "Album", value: "albums" },
        { label: "Artist", value: "artists" },
        { label: "Genre", value: "genres" },
        { label: "Charter", value: "charters" },
    ])

    useEffect(() => {
        fetch('http://localhost:8000/api/charts')
            .then(res => res.json())
            .then(data => {
                setCharts(data.songs)
                setLoading(false)
            })
    }, [])

    const search = async (route, term) => {
        let link

        if (route === 'names') {
            link = `http://localhost:8000/api/charts/${term}`
        } else {
            link = `http://localhost:8000/api/charts/${route}/${term}`
        }

        await fetch(link)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (!data.success) {
                    return
                } else {
                    setCharts(data.songs)
                }
            })
    }

    return (
        <div>
            <Search
                selects={selects}
                setText={setText}
                text={text}
                search={search}
            />
            { loading ? <p>Loading charts...</p> : <List charts={charts} /> }
        </div>
    )
}

export default Main