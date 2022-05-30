import React, { useEffect } from 'react';
import Banner from '../components/common/Banner';
import ListAgency from '../components/agencies/ListAgency';

function Agencies() {
    useEffect(()=>{
        window.scrollTo(0, 0);  
        },[]);
    return (
        <div>
            <Banner page="Lữ HÀNH" title="Lữ hành"/>
            <ListAgency/>          
        </div>
    )
}

export default Agencies;
