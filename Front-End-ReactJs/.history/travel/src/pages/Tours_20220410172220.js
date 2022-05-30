import { useEffect } from 'react';
import Banner from '../components/common/Banner';
import ListTour from '../components/tours/ListTour';

function Tours() {
    useEffect(()=>{
        window.scrollTo(0, 0);  
        },[]);
     
    return (
        <div>              
            <Banner page="Tour Du Lịch" title="Tour du lịch"/>
            <ListTour />
        </div>
    )
}

export default Tours
