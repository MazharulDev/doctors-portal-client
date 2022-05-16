import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Treatment = ({ treatment, setTreatment, date }) => {
    const [user, loading, error] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const formatedDate = format(date, 'PP');
    const handleSubmit = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    toast(`Appointment is set, ${formatedDate} at ${slot}`)
                }
                else{
                    toast.error(`Already have and Appointment, ${data.booking?.date} at ${data.booking?.slot}`)
                }
                //close modal
                setTreatment(null)
            })


    }

    //You provided a `value` prop to a form field without an `onChange` handler fix
    //value change is defaultvalue
    return (
        <div>
            <input type="checkbox" id="treatment-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="treatment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-10">Cavity Protection for: {name}</h3>
                    <form onSubmit={handleSubmit} className='grid justify-items-center gap-4'>
                        <input type="text" disabled defaultValue={format(date, 'PP')} className="input w-full max-w-lg border-2 border-gray-300" />
                        <select name='slot' className="select select-bordered w-full max-w-lg">
                            {
                                slots.map((slot, i) => <option key={i}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' defaultValue={user?.displayName || ''} className="input w-full max-w-lg border-2 border-gray-300" />
                        <input type="email" name='email' defaultValue={user?.email || ''} className="input w-full max-w-lg border-2 border-gray-300" />
                        <input type="Number" name='phone' placeholder="Phone number" className="input w-full max-w-lg border-2 border-gray-300" />
                        <input type="submit" defaultValue="Submit" className='btn btn-accent w-full' />
                    </form>
                    <div className="modal-action">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;