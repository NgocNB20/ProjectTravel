import React, { useEffect } from 'react'

function Vtours() {
    useEffect(()=>{
        window.scrollTo(0, 0);  
        },[]);
    return (
        <div>
            <h1 className="text-center">VTour</h1>
        </div>
    )
}

export default Vtours
