import React from "react";
import "./card.style.css";

export default function CardList({ data }) {
    console.log(data.content)

    return <>
        <div className="row card-container">
            <div className="col-sm-12">
                標題：{data.name}
                <br />
                GitHub作品連結：<a href={data.html_url}>{data.html_url}</a>
                <br />
                說明：{data.content}
            </div>
        </div>

    </>
}
