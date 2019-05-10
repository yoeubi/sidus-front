import React from "react";
import "./Join.scss";
import { Link } from "react-router-dom";

const Join = () => {
    return (
        <div className="join">
            <div>
                <Link to="/">
                    <span className="exit">&#10005;</span>
                </Link>
            </div>
            <div className="intro">
                <p>사이드 프로젝트를</p>
                <p>지금 바로</p>
                <p>경험하세요.</p>
            </div>
            <div className="choice">
                <button>카카오톡으로 시작하기</button>
                <button>페이스북으로 시작하기</button>
                <div className="next">
                    <Link to="/join-next">회원가입</Link>
                </div>
            </div>
        </div>
    );
};

export default Join;
