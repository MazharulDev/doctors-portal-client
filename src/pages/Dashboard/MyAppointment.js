import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'

const MyAppointment = () => {
    const [appointments, setAppointment] = useState([]);
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [user])
    return (
        <div>
            <h2 className='text-2xl mt-5 font-bold'>My All appointment:{appointments.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment,index) => 
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{appointment.patientName}</td>
                                    <td>{appointment.treatment}</td>
                                    <td>{appointment.patient}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.slot}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;