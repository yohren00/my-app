import React from "react";


const ECommerce = () => {
    return <>
        <div className="row justify-content-md-center">
            <h2 className="col col-lg-2 ">電商網站作品</h2>
        </div>
        <div className="row ">
            <div className="col col-lg-12 ">
                網站說明介紹：
                <br />電商網頁製作(功能尚未全部，有些還在學習中)，金流部分尚未跟一般通路一樣可以完全使用，目前只是做個大概，使用的是國外的 stripe，不確定是否國內可以使用，後台部分有串接金流，付款後 stripe 那邊可以看到付款金額。
                <br />使用 heroku 部屬網站，網站位置為：<a href="https://len-live.herokuapp.com/">https://len-live.herokuapp.com/</a>
            </div>
        </div>
        <div className="row ">
            <div className="col col-lg-12 ">
                <img className="icon" src="imges/e-commerce.png" alt=""></img>
            </div>
        </div>
    </>
};

export default ECommerce;