import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    const services=[
        {
            _id:1,
            img:fluoride,
            title:"Fluoride Treatment",
            text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id:2,
            img:cavity,
            title:"Cavity Filling",
            text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id:3,
            img:whitening,
            title:"Teeth Whitening",
            text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary'>Our Service</h3>
                <h2 className='text-4xl my-2'>Service We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-28'>
                {
                    services.map(service=><ServiceCard key={service._id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Service;