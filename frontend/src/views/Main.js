import React, { useState } from 'react'

// components
import Search from '../components/Search'

const Main = () => {
    const [text, setText] = useState('')
    const [selects] = useState([
        { label: "Name", value: "name" },
        { label: "Album", value: "album" },
        { label: "Artist", value: "artist" },
        { label: "Genre", value: "genre" },
        { label: "Charter", value: "charter" },
    ])

    return (
        <Search
            selects={selects}
            setText={setText}
            text={text}
        />
    )
}

export default Main