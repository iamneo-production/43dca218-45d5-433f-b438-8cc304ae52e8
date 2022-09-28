import React,{useState}  from 'react';
import { connect } from "react-redux";
import { login } from '../../actions/auth';
import { Link, Navigate } from 'react-router-dom';

const Loginpage = ({login, isAuthenticated}) => {

    const [formData, setFormData] = useState({
        email:'',
        password:''
    });
    const {email, password} = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});
    const onSubmit = e => {
        e.preventDefault();
        login(email,password);
        console.log(email,password);
    }
    
    if (isAuthenticated){
        return <Navigate to="/" />
    }   

    return (
        <>
        <div className="container-fluid bg-gray-300 h-screen flex justify-center items-center">
            <div class="w-full max-w-xs">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={e => onSubmit(e)}>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Enter Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    name="email" 
                                    
                                    value={email}
                                
                                    onChange={e => onChange(e)}
                                    required

                                    type="email" placeholder="Email" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Enter Password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        
                                    name="password" 
                                    
                                    value={password}
                                    minLength='6'
                                    
                                    onChange={e => onChange(e)}
                                    required
                                    
                                    type="password" placeholder="*******" />
                    </div>

                    <div class="flex justify-between items-center mb-6">
            <a href="#!" class="text-blue-500 hover:text-blue-800">Forgot password?</a>
          </div>



                    <div class="mb-4">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>






        
      </>
    );
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});



export default connect(mapStateToProps, {login})(Loginpage);


