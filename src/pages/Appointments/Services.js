import { format } from 'date-fns';
import React, {useEffect, useState} from 'react';
import ServiceItem from './ServiceItem';
import Treatment from './Treatment';

const Services = ({ date }) => {
    const [service,setService]=useState([]);
    const [treatment,setTreatment]=useState(null);
    useEffect(()=>{
        fetch(`http://localhost:5000/service`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div className='px-12 mb-10'>
            <div>
                <h3 className='text-center font-bold text-secondary mb-20'>Available Appointments on {format(date, 'PP')}</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    service.map(serviceItem=><ServiceItem key={serviceItem._id} setTreatment={setTreatment} serviceItem={serviceItem}/>)
                }
            </div>
            {
                treatment && <Treatment treatment={treatment} setTreatment={setTreatment} date={date}/>
            }
        </div>
    );
};

export default Services;