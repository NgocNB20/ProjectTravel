import React, { useEffect } from 'react';
import Banner from '../components/common/Banner';
import ListPlace from '../components/places/ListPlace';

function Places() {
    
    useEffect(()=>{
        window.scrollTo(0, 0);  
        },[]);

    return (
        <div>
             <Banner page="Điểm Du Lịch" title="Điểm du lịch"/>
             <ListPlace/>
        </div>
    )
}

export default Places
