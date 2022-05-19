import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading/Loading'

const User = () => {
    const {data:users,isLoading}=useQuery('users',()=>fetch('http://localhost:5000/user',{
        method:'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>res.json()));
    
    

    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <h2 className='text-2xl mt-5 font-bold'>User:{users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove user</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index) => 
                                <tr key={user._id}>
                                    <th>{index+1}</th>
                                    <td>{user.email}</td>
                                    <td><button class="btn btn-xs btn-success">Admin</button></td>
                                    <td><button class="btn btn-xs btn-error">Remove user</button></td>
                                   
                                  
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;