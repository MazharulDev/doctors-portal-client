import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyAppointment = () => {
    const [appointments, setAppointment] = useState([]);
    const [user] = useAuthState(auth);
    const navigate=useNavigate()
    useEffect(() => {
        fetch(`http://localhost:5000/booking?patient=${user.email}`,{
            method:'GET',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status===401||res.status===403){
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/')
                }
               return res.json()
            })
            .then(data => {
                setAppointment(data);

            });
    }, [user,navigate])
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
                                <tr key={index}>
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