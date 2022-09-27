import React,{useState} from 'react';
import {connect} from "react-redux";


const Signup = () => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        mobile:'',
        password:'',
        cpassword:'',

    });

    const {email, password, username, cpassword,mobile} = formData;
    
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});


    const onSubmit = e => {
        e.preventDefault();
        if(password === cpassword){
            // signup( username,, last_name,email, password, re_password);
            console.log(username,email,password,cpassword,mobile);
            setAccountCreated(true);
        }
    }




    return (
        <div className="container-fluid bg-gray-300 h-full flex justify-center">
            <div class="w-full max-w-xs mt-16  mb-24">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={e => onSubmit(e)}>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Enter Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    name="email"

                                    onChange={e=> onChange(e)}
                                    value={email}
                                   required 
                                    
                                    type="email" placeholder="Email" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Enter Username
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    name="username" value={username}
                                    onChange={e => onChange(e)}
                                    required
                                     type="text" placeholder="Username" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="mobile">
                            Enter Mobile Number
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    name="mobile" 

                                    onChange={e=> onChange(e)}

                                    value={mobile}

                                    required
                                    
                                    type="text" placeholder="xxx-xxx-xxxx" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Enter Password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    name="password" 
                                    
                                    onChange={e=> onChange(e)}

                                    value={password}

                                    minLength='8'

                                    required
                                    
                                    type="password" placeholder="*******" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="cpassword">
                            Enter Confirm Password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    name="cpassword" 
                                    
                                    onChange={e=> onChange(e)}

                                    minLength='8'

                                    value={cpassword}

                                    required
                                    
                                    type="password" placeholder="******" />
                    </div>
                    <div class="flex items-center justify-between">
                        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Sign In
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/login">
                            Already Have a account?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}




export default connect(null, null)(Signup);
