import React from 'react'
import SiteFooterCenter from './SiteFooterCenter'
import SiteFooterLeft from './SiteFooterLeft'
import SiteFooterRight from './SiteFooterRight'

function SiteFooter() {
    return (
        <div className="container">
            <div className="row">
                <SiteFooterLeft/>
                <SiteFooterCenter/>
                <SiteFooterRight/>
            </div>
        </div>
    )
}

export default SiteFooter
