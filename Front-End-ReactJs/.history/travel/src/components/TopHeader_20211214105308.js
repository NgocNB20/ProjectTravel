import React from 'react'

function TopHeader() {
    return (
        <div className="topbar-one">
        <div className="container-fluid">
          <div className="topbar-one__left">
            <a href="mailto:Email: sovhttdl@phutho.gov.vn">Email: sovhttdl@phutho.gov.vn</a>
            <a href="tel:Tel: 0210.3846.390">Tel: 0210.3846.390</a>
          </div>
          <div className="topbar-one__right" />
          <div className="main-nav__right">
            <div className="dropdown bootstrap-select">
              <select  name="languages" id="languages" className="selectpicker"   tabIndex={-98}>
                <option defaultValue={'DEFAULT'} value="/vi" selected>Tiếng Việt</option>
                <option value="/en">English</option>
              </select>
              <div className="dropdown-menu " role="combobox">
                <div className="inner show" role="listbox" aria-expanded="false" tabIndex={-1}>
                  <ul className="dropdown-menu inner show" />
                </div>
              </div>
            </div>
            <a href="#" className="main-nav__search search-popup__toggler"><i className="fal fa-search" /></a>
            <a href="#" className="main-nav__login login-popup__toggler"><i className="fal fa-user" /></a>
          </div>
        </div>
      </div>
    )
}

export default TopHeader
