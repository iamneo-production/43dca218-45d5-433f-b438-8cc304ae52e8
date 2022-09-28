import React,{useState} from 'react';

import {TiEdit} from "react-icons/ti";
import {MdDelete} from "react-icons/md";
import { Navigate } from 'react-router';
import {connect} from "react-redux";
import jsondata from "./data/AdminHomeObject.json";

const AdminHome = ({isAuthenticated}) => {

  
  const [data,setdata]  = useState({id:"",email:"",userName:"",password:"",type:"",cpassword:""})

  const {id,email,userName,password,type,cpassword} = data;
  
  const [viewcon,setview] = useState();

  const [check ,setcheck] = useState("false");

  const [alert,setalert] = useState("true");

  const [ver,setver] = useState("Verify");


  const checkSubmit = (e) =>{
    e.preventDefault();
    console.log(e);
    console.log(cpassword);
    if(cpassword === "12345678"){
      setcheck("true");
      setver("verified");
    }
    console.log(alert);
  }



  
  const onChange = e => setdata({ ...data, [e.target.name]: e.target.value});

  if (isAuthenticated){
    return <Navigate to="/" />
  }

 

  const edit = (e) =>{
    if(check === "true"){
      setdata(e);
      setview("");
      setalert("true");
    }else{
      setalert("flase");
    }
  }

  const dlt = (e) =>{
    console.log("delete");
  } 




  return (
    <div className="flex justify-center items-center mx-4 ">
      <div className=" flex justify-between mt-16 border-2 rounded-xl shadow-xl w-10/12">
        <div className="w-6/12 h-[472px] ">
          <div className="flex justify-between h-[100px] items-center mx-2">
              <div className="text-sm px-4 py-2  rounded-md bg-blue-400">
                <div className="mb-2">Credentials</div>
                <div className="">1234</div>
              </div>
              <div className="text-sm px-4 py-2  rounded-md bg-blue-400">
                <div className="mb-2">Bank Info</div>
                <div className="">13-03-2021</div>
              </div>
              <div className="text-sm px-4 py-2 rounded-md bg-blue-400">
                <div className="mb-2">Media</div>
                <div className="">13-03-2021</div>
              </div>
              <div className="text-sm px-4 py-2 rounded-md bg-blue-400">
                <div className="mb-2">Users</div>
                <div className="">13-03-2021</div>
              </div>
          </div>
          <div className="flex justify-end px-8 border-b mb-2">
              

                {/* <div className=" mx-16 font-bold text-xl">Media Locker</div>
                <div className=" mx-16 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer px-4 py-1 rounded-lg text-white items-center"> New</div> */}
              
          </div>
          <div className="mt-4 h-[390px] text- w-full overflow-x-auto overflow-x-hidden px-4 py-4">
            
          <div className="font-bold text-lg">Users</div>
            {jsondata.data.map((value,index) => {
              return(
                  <div className="rounded-2xl px-8 shadow-xl mb-4 border rounded-xl bg-gray-200 w-full flex justify-between items-center">
                    <div className="font-bold text-lg">{value.userName}</div>
                    <div className="font-thin text-md">
                      <div className="">Created On</div>
                      <div className="">13-03-2021</div>
                    </div>
                    <div className="" onClick={e => edit(value)}><TiEdit size="1.6rem"/></div>
                    <div className="" onClick={e=> dlt(value)}><MdDelete size="1.6rem"/></div>
                  </div>
              )
            })}
          </div>
        </div>

        <div className="w-6/12 h-[472px]  border-l-2 rounded-l-3xl bg-[#EEF2E6]">

        <div className={`text-red-800 mt-4 font-bold text-sm`}>
                              Please enter the passsword to view 
                            </div>

            <div className="mt-4 mx-2 w-full flex items-center justify-center border-b-2 py-4">
                
                <form onSubmit={e => checkSubmit(e)} className="flex w-8/12 justify-between mt-2 items-center">
                        
                        <input type="password" className="mx-4 w-full py-2 px-2 text-md text-black " placeholder="Enter your password to continue" 
                                    value={cpassword}
                                    onChange={e => onChange(e)}
                                    name="cpassword" required  />
                        <button type="submit" className={check ? "bg-green-500 py-2 px-4 rounded-lg text-white hover:cursor-pointer hover:bg-green-600 " : "bg-blue-500 py-2 px-4 rounded-lg text-white hover:cursor-pointer hover:bg-blue-600 " }>
                        {ver}
                    </button>
                </form>
            </div>
<div className="py-4 mt-8 px-2">

  <form action="">
    <input type="text" className="mx-4 w-8/12 mb-4 shadow-lg py-2 px-2 text-md text-black " onChange={e => onChange(e)} value={email} placeholder="User Email" name="email" required  />
    <input type="text" className="mx-4 w-8/12 mb-4 shadow-lg py-2 px-2 text-md text-black " onChange={e => onChange(e)} value={userName} placeholder="Username" name="userName" required  />
    <input type="text" className="mx-4 w-8/12 mb-4 shadow-lg py-2 px-2 text-md text-black " onChange={e => onChange(e)} value={password} placeholder="password" name="password" required  />
    <input type="text" className="mx-4 w-8/12 mb-4 shadow-lg py-2 px-2 text-md text-black " onChange={e => onChange(e)} value={type} placeholder="User Type" name="type" required  />
  </form>
</div>

<div className={`flex justify-end mx-2 ${viewcon}`}>
              <div className="w-6/12 flex justify-center">
                <div className="px-4 py-2 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer rounded text-white">new/update</div>
              </div>
            </div>


</div>
        
      </div>


    </div>
  )
}



const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});



export default connect(mapStateToProps, null)(AdminHome);