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
              <select name="languages" id="languages" className="selectpicker" onchange="javascript:location.href = this.value;" tabIndex={-98}>
                <option value="/vi" selected>Tiếng Việt</option>
                <option value="/en">English</option>
              </select>
              {/* <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown"
                                    role="button" data-id="languages" title="Tiếng Việt">
                                    <div class="filter-option">
                                        <div class="filter-option-inner">
                                            <div class="filter-option-inner-inner">Tiếng Việt</div>
                                        </div>
                                    </div>
                                </button> */}
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
