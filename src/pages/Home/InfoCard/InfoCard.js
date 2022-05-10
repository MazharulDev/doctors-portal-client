import React from 'react';

const InfoCard = ({title,img,text,bg}) => {
    
    return (
        <div className={`card lg:card-side shadow-xl px-4 py-2 text-center lg:text-left ${bg}`}>
            <figure><img src={img} alt="Album"/></figure>
            <div className="card-body text-white">
                <h2 className="text-2xl">{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default InfoCard;