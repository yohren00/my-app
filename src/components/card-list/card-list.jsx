import React from "react"
import "./card-list.style.css"
import Card from "../card/card.jsx"
import Search from "../search/search.jsx";

export default function CardList({ list }) {
    return <>

        {list.map((e) => (
            <div className="card-list">
                <Card key={e.id} data={e} />
            </div>
        ))}

    </>
}

