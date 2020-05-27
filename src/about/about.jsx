import React, { useState, useEffect } from "react";
import "./about.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

function About() {
    return (
        <>
            <div className="row">
                <div className="col-lg-1 col-sm-12" />
                <div className="col-lg-2 col-sm-12">
                    <img className="icon" src="images/ME.jpg"></img>
                </div>
                <div className="col-lg-8 col-sm-12 context-font">
                    您好，我叫林祐煒。
                    <br />
                    曾從事餐飲業的經歷，並當過加盟店家的督導、教育訓練講師、經營主管階級等職位， 讓我豐富了需多視野。
                    <br />
                    因為對於程式語⾔有興趣，使⽤網路的資源，在hahow、Udemy等平台購買了專業的技術⼈員錄製的教學影片，學習了
                    <br />
                    JAVA、SQL、JSP、Servlet等知識。
                    <br />
                    之後任職，未來⼈才網路公司，學會前端技術React，基礎後端技術Node.js(Express為框架)。 <br />
                    在職中，負責公司官網的維護修改、graph AIP串接bot、⾃社產品維護。
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-lg-4 col-sm-4">
                            <FontAwesomeIcon icon={fas.faMobileAlt} size="2x" />
                            &nbsp;:&nbsp;0932-180-351
                        </div>
                        <div className="col-lg-4 col-sm-4">
                            <FontAwesomeIcon icon={far.faEnvelope} size="2x" />
                            &nbsp;:&nbsp;yohren00@gmail.com
                        </div>
                        <div className="col-lg-4 col-sm-4">
                            <a class="herf" href="https://github.com/yohren00">
                                <FontAwesomeIcon icon={fab.faGithub} size="3x" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="row ">
                <div className="col-lg-1 col-sm-12" />
                <div className="col-lg-2 col-sm-12">
                    <span className="skill-title-font">專業技能</span>
                </div>
            </div>
            <hr className="style-two"></hr>
            <div className="row">
                <div className="col-lg-1" />
                <div className="col-lg-3">
                    <span className="skill-title2-font">程式開發技能</span>
                    <ul className="context-font">
                        <li>React.js (Hook、Redux)</li>
                        <br />
                        <li>JavaScript ES6</li>
                        <br />
                        <li>HTML</li>
                        <br />
                        <li>CSS</li>
                        <br />
                        <li>Mysql</li>
                        <br />
                        <li>Bootstrap</li>
                        <br />
                        <li>Material-UI</li>
                        <br />
                        <li>Postman</li>
                        <br />
                    </ul>
                </div>
                <div className="col-lg-3 offset-lg-2">
                    <span className="skill-title2-font">平台及工具</span>
                    <ul className="context-font">
                        <li>Visual Studio Code</li>
                        <br />
                        <li>Git/GitHub/Bitbucket/GitLab</li>
                        <br />
                    </ul>
                </div>
            </div>
            <hr className="style-three"></hr>
            <br />
            <br />
            <div className="row ">
                <div className="col-lg-1 col-sm-12" />
                <div className="col-lg-2 col-sm-12">
                    <span className="skill-title-font">工作經歷</span>
                </div>
            </div>
            <hr className="style-two" />
            <div className="row">
                <div className="col-lg-1" />
                <div className="col-lg-11">
                    <span className="skill-title2-font">未來人才網路, 工程師, 2019/10 ~ 2020/5</span>
                    <ul className="context-font">
                        <li>
                            負責公司官網的維護與修改：
                            <br />
                            使用React.js負責維護與修改，使用RWD讓手機與網頁版面好調整。
                        </li>
                        <br />
                        <li>
                            graph API 與database串接bot的Demo：
                            <br />
                            使用node.js用Bot Framework串接office365
                            API，可使用新增日曆、統計工作檔案數量、統計會議時間，從database中取得工作時數、工作計畫時間。
                        </li>
                        <br />
                        <li>
                            自社產品維護：
                            <br />
                            使用自社開發的工具Drive Base做成的茶葉購物網站，進行修改或維護。
                        </li>
                        <br />
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-1" />
                <div className="col-lg-11">
                    <span className="skill-title2-font">
                        原創品有限公司, 經營管理主管、教育訓練講師、加盟督導, 2014/8 ~ 2019/7
                    </span>
                    <ul className="context-font">
                        <li>於加盟餐飲體系，擔任營運主管、教育訓練講師、門市督導。</li>
                        <br />
                        <li>
                            營運主管： <br />
                            負運管理制度。 教育訓練。 原物料控管。 營運資料報表分析。
                        </li>
                        <br />
                        <li>
                            教育訓練：
                            <br />
                            系統化訓練門市員工。 系統化教導、訓練加盟進來的客戶。
                        </li>
                        <br />
                        <li>
                            門市督導：
                            <br />
                            管理加盟業主。 門市督導評分。 門市資料分析與當地區域市場分析。
                            協助客戶管理門市、營運、資料分析。 處理失格門市，並與客戶協調如何改善。
                        </li>
                        <br />
                        <li>
                            加盟展業務：
                            <br />
                            讓客人了解加盟體系與自家產品優缺點。
                        </li>
                        <br />
                    </ul>
                </div>
            </div>
            <hr className="style-three" />
        </>
    )
}

export default About;
