import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../shared/Loading/Loading';
import useToken from '../../hooks/useToken';


const Login = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, userWithGoogle, loadingWithGoogle, errorWithGoogle] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        userWithEmail,
        loadingWithEmail,
        errorWithEmail,
      ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [userToken]=useToken(userWithEmail||userWithGoogle);
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email,data.password)
    };
    // Cannot update a component (`BrowserRouter`) while rendering a different component (`Login`).
    // this error fix, use useEffect 
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (userToken) {
            navigate(from, { replace: true });
        }
    }, [navigate,userToken,from])

    const handleSignInGoogle = () => {
        signInWithGoogle();
    }
    if(loadingWithEmail||loadingWithGoogle){
        return <Loading/>
    }
    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },

                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a Valid Email'
                                        }
                                    }
                                )}

                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">PassWord</span>

                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },

                                        minLength: {
                                            value: 6,
                                            message: 'Must 6 character in  Password'
                                        }
                                    }
                                )}

                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <input className='btn btn-primary text-white w-full' type="submit" />
                    </form>
                    <p><small>New to Doctors Portal ?  <Link className='text-primary hover:underline' to="/signup">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={handleSignInGoogle} className='btn btn-secondary text-white w-full'>Sign In with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;