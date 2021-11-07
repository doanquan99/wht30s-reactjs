import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-main">
                <div className="footer-left">
                    <h3 className="title">what happened</h3>
                    <p className="info">Lorem ipsum dolor sit amet.</p>
                    <p className="info">Lorem ipsum dolor sit amet.</p>
                    <p className="info">Lorem ipsum dolor sit amet.</p>
                    <p className="info">Lorem ipsum dolor sit amet.</p>
                    <p className="info">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="footer-right">
                    <div className="right-item">
                        <h3 className="title">about us</h3>
                        <p className="info">lorem lorem</p>
                        <p className="info">lorem lorem</p>
                        <p className="info">lorem lorem</p>
                    </div>
                    <div className="right-item">
                        <h3 className="title">about us</h3>
                        <p className="info">lorem lorem</p>
                        <p className="info">lorem lorem</p>
                        <p className="info">lorem lorem</p>
                    </div>
                    <div className="right-item">
                        <h3 className="title">about us</h3>
                        <p className="info">lorem lorem</p>
                        <p className="info">lorem lorem</p>
                        <p className="info">lorem lorem</p>
                    </div>
                    <div className="right-item">
                        <h3 className="title">about us</h3>
                        <p className="info">lorem lorem</p>
                        <p className="info">lorem lorem</p>
                        <p className="info">lorem lorem</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="copyright">© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr <br />
                    서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</p>
                <div className="link">
                    <img src="/icon/link-1.png" alt="icon" className="icon"/>
                    <img src="/icon/link-2.png" alt="icon" className="icon"/>
                    <img src="/icon/link-3.png" alt="icon" className="icon"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer
