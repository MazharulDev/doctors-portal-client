import { format } from 'date-fns';
import React from 'react';

const Treatment = ({ treatment, setTreatment, date }) => {
    const { name, slots } = treatment;
    const handleSubmit = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        console.log(name, slot, name, phone, email);

        //close modal
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="treatment-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="treatment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-10">Cavity Protection</h3>
                    <form onSubmit={handleSubmit} className='grid justify-items-center gap-4'>
                        <input type="text" disabled value={format(date, 'PP')} className="input w-full max-w-lg border-2 border-gray-300" />
                        <select name='slot' className="select select-bordered w-full max-w-lg">
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Full Name" className="input w-full max-w-lg border-2 border-gray-300" />
                        <input type="Number" name='phone' placeholder="Phone number" className="input w-full max-w-lg border-2 border-gray-300" />
                        <input type="email" name='email' placeholder="Email" className="input w-full max-w-lg border-2 border-gray-300" />
                        <input type="submit" value="Submit" className='btn btn-accent w-full' />
                    </form>
                    <div className="modal-action">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;