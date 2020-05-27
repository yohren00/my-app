import React from "react";
import "./card.style.css";

export default function CardList({ data }) {
    return <>
        <div className="card-container">
            標題：{data.name}
            <br />
            GitHub作品連結：<a href={data.html_url}>{data.html_url}</a>
        </div>
    </>
}
