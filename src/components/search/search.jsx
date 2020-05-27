import React, { useState, useEffect } from "react";

export default function Serach({ handleChang }) {

    return (
        <>
            <input
                type="search"
                placeholder="專案名稱"
                onChange={handleChang}
            />
        </>
    )
}
