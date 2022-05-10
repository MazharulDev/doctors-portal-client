import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people from '../../assets/images/people1.png'

const Testimonial = () => {
    return (
        <section className='px-12 my-12'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-primary text-lg font-bold mb-3'>Testimonial</h4>
                    <h2 className='text-2xl'>What Our Patients Says</h2>
                </div>
                <div className='w-20 lg:w-48'>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 mt-28'>
                <div className='shadow-lg p-5'>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex justify-start items-center gap-3 mt-5 rounded-lg'>
                        <img className='border-2 border-primary rounded-full w-16' src={people} alt="" />
                        <div>
                            <h3>Winson Herry</h3>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg p-5'>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex justify-start items-center gap-3 mt-5 rounded-lg'>
                        <img className='border-2 border-primary rounded-full w-16' src={people} alt="" />
                        <div>
                            <h3>Winson Herry</h3>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg p-5'>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex justify-start items-center gap-3 mt-5 rounded-lg'>
                        <img className='border-2 border-primary rounded-full w-16' src={people} alt="" />
                        <div>
                            <h3>Winson Herry</h3>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </section>
    );
};

export default Testimonial;