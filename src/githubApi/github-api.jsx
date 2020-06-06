import React, { useState, useEffect } from "react";
import Axios from "axios";
import CardList from "../components/card-list/card-list.jsx";
import Search from "../components/search/search.jsx";

function App() {
    const [apiData, setApiData] = useState({ info: [] });
    const [target, setTarget] = useState({ seacher: "" });

    useEffect(() => {
        console.log("useEffect");
        userData()
    }, [])

    /**
     * 取得API資料
     */
    function userData() {
        Axios.get(
            "https://api.github.com/users/yohren00/repos?client_id=5c25b8a05e9391eb2fe9client_secret=5f944f596d5b10f05ea04da03c497187ce7bfb57"
        )
            .then((res) => {
                res.data.map((e, index, array) => {
                    return Axios.get(`https://api.github.com/repos/yohren00/${e.name}/readme?client_id=5c25b8a05e9391eb2fe9&client_secret=5f944f596d5b10f05ea04da03c497187ce7bfb57`)
                        .then((res2) => {
                            /**
                             * base64解碼
                             */
                            let decodedString = Buffer.from(res2.data.content, 'base64').toString();
                            e.content = decodedString;
                            console.log(e.id)
                            setApiData((prevState) => ({ ...prevState }))
                        })
                })
                setApiData((prevState) => ({ info: res.data }))
            });
    };


    /**
     * filter
     */
    const filterTitle = apiData.info.filter(data =>
        data.name.toLowerCase().includes(target.seacher.toLowerCase())
    );

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-2">
                    <Search handleChang={(e) => { setTarget({ seacher: e.target.value }) }} />
                </div>
            </div>
            <br />
            <CardList list={filterTitle} content={apiData} />
        </>
    )
};

export default App;
