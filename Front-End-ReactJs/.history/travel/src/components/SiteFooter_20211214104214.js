import React from 'react'
import SiteFooterCenter from './SiteFooterCenter'
import SiteFooterLeft from './SiteFooterLeft'
import SiteFooterRight from './SiteFooterRight'

function SiteFooter() {
    return (
        <>
        <div className="site-footer__bg"></div>
        <div className="container">
            <div className="row">
                <SiteFooterLeft/>
                <SiteFooterCenter/>
                <SiteFooterRight/>
            </div>
        </div>
        </>

    )
}

export default SiteFooter
