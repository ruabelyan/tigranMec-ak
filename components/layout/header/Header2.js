'use client'
import Link from "next/link";
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { useTranslation } from "react-i18next";

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    const { t ,i18n} = useTranslation();

    const changeLang = lng => {
        i18n.changeLanguage(lng)
    }
    return (
        <>
            <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top">

                    <div className="top-inner">
                        <ul className="info-list clearfix">
                            <li><i className="icon-1"></i>Երկ - Ուրբ 09:00-18:00</li>
                            <li><i className="icon-2"></i>Email: <Link href="tel:01989526503">poliklinika-13@mail.ru</Link></li>
                            <li><img src="assets/images/icons/icon-1.png" alt="" />  Երևան
                                Շահամիրյանների փող., 32 շենք</li>
                                
                                <li>
                                    <img onClick={() => changeLang("arm")} height={20} width={20} src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Armenia.png" alt=""/>
                                <img onClick={() => changeLang("ru")} height={20} width={20} src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png" alt=""/>
                                <img  onClick={() => changeLang("en")} height={20} width={20} src="https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png" alt=""/>
                                </li>
                        </ul>
                        <ul className="social-links clearfix">
                            <li><Link href="/"><i className="icon-4"></i></Link></li>
                            {/* <li><Link href="/"><i className="icon-5"></i></Link></li>
                            <li><Link href="/"><i className="icon-6"></i></Link></li> */}
                            <li><Link href="/"><i className="icon-7"></i></Link></li>
                        </ul>
                    </div>

                </div>

                {/* Header Upper */}
                <div className="header-lower">
                    <div className="outer-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo"><Link href="/"><img style={{ height: 60, paddingLeft: 40 }} src="assets/images/logo.png" alt="" /></Link></figure>
                            </div>
                            <div className="menu-area">
                                {/* Mobile Navigation Toggler */}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                </div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>

                            </div>
                            {/* Menu Right Content */}
                            <ul className="menu-right-content">

                                {/* <li className="search-box-outer search-toggler" onClick={handlePopup}>
                                    <i className="icon-27"></i>
                                </li> */}
                                <li className="nav-btn nav-toggler navSidebar-button clearfix" onClick={handleSidebar}>
                                    <i className="icon-28"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo"><Link href="/"><img style={{ height: 60, paddingLeft: 40 }} src="assets/images/logo.png" alt="" /></Link></figure>
                            </div>

                            <nav className="main-menu navbar-expand-md navbar-light clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                            <ul className="menu-right-content">

                                <li className="search-box-outer search-toggler" onClick={handlePopup}>
                                    <i className="icon-27"></i>
                                </li>
                                <li className="nav-btn nav-toggler navSidebar-button clearfix" onClick={handleSidebar}>
                                    <i className="icon-28"></i>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
