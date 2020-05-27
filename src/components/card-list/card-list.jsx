import React from "react"
import "./card-list.style.css"
import Card from "../card/card.jsx"
import Search from "../search/search.jsx";

export default function CardList({ list }) {
    console.log(list)
    return <>
        <div className="card-list">
            {list.map((e) => (
                <Card key={e.id} data={e} />
            ))}
        </div>
    </>
}

