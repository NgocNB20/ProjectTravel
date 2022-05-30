import React from 'react'

function TopHeader() {
    return (
        <div class="topbar-one">
                <div class="container-fluid">
                    <div class="topbar-one__left">
                        <a href="mailto:Email: sovhttdl@phutho.gov.vn">Email: sovhttdl@phutho.gov.vn</a>
                        <a href="tel:Tel: 0210.3846.390">Tel: 0210.3846.390</a>
                    </div>
                    <div class="topbar-one__right"></div>
                    <div class="main-nav__right">
                        <div class="dropdown bootstrap-select">
                            <select name="languages" id="languages" class="selectpicker" onchange="javascript:location.href = this.value;" tabindex="-98">
                                <option value="/vi" selected="">Tiếng Việt</option>
                                <option value="/en">English</option>
                            </select>
                              <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown"
                                    role="button" data-id="languages" title="Tiếng Việt">
                                    <div class="filter-option">
                                        <div class="filter-option-inner">
                                            <div class="filter-option-inner-inner">Tiếng Việt</div>
                                        </div>
                                    </div>
                                </button>  
                            <div class="dropdown-menu " role="combobox">
                                <div class="inner show" role="listbox" aria-expanded="false" tabindex="-1">
                                    <ul class="dropdown-menu inner show"></ul>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="main-nav__search search-popup__toggler"><i class="fal fa-search"></i></a>
                        <a href="#" class="main-nav__login login-popup__toggler"><i class="fal fa-user"></i></a>
                    </div>
                </div>
            </div>
    )
}

export default TopHeader
