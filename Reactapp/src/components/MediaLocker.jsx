import React from 'react';
import {AiFillEye} from 'react-icons/ai';
import {TiEdit} from "react-icons/ti";
import {MdDelete} from "react-icons/md";

export default function MediaLocker() {
  return (
    <div className="flex justify-center items-center mx-4 ">
      <div className=" flex justify-between mt-16 border-2 rounded-xl shadow-xl w-10/12">
        <div className="w-6/12 h-[472px] ">
          <div className="flex justify-end px-8 border-b mb-2">
              <div className="flex justify-between my-4 items-center ">
                <div className=" mx-16 font-bold text-xl">Media Locker</div>
                <div className=" mx-16 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer px-4 py-1 rounded-lg text-white items-center"> New</div>
              </div>
          </div>
          <div className="mt-4 h-[390px] text- w-full overflow-x-auto overflow-x-hidden px-4 py-4">
            <div className="rounded-2xl px-8 shadow-xl mb-4 border rounded-xl bg-red-400 w-full flex justify-between items-center">
              <div className="font-bold text-lg">AAdhar</div>
              <div className="font-thin text-md">
                <div className="">Created On</div>
                <div className="">13-03-2021</div>
              </div>
              <div className=""><AiFillEye size="1.6rem"/></div>
              <div className=""><TiEdit size="1.6rem"/></div>
              <div className=""><MdDelete size="1.6rem"/></div>
            </div>
            <div className="rounded-2xl px-8 text-white shadow-xl mb-4 border rounded-xl bg-red-400 w-full flex justify-between items-center">
              <div className="font-bold text-lg">SBI</div>
              <div className="font-thin text-md">
                <div className="">Created On</div>
                <div className="">13-03-2021</div>
              </div>
              <div className=""><AiFillEye size="1.6rem"/></div>
              <div className=""><TiEdit size="1.6rem"/></div>
              <div className=""><MdDelete size="1.6rem"/></div>
            </div>
            <div className="rounded-2xl px-8 shadow-xl mb-4 border rounded-xl bg-red-400 w-full flex justify-between items-center">
              <div className="font-bold text-lg">Facebook</div>
              <div className="font-thin text-md">
                <div className="">Created On</div>
                <div className="">13-03-2021</div>
              </div>
              <div className=""><AiFillEye size="1.6rem"/></div>
              <div className=""><TiEdit size="1.6rem"/></div>
              <div className=""><MdDelete size="1.6rem"/></div>
            </div>
            <div className="rounded-2xl px-8 shadow-xl mb-4 border rounded-xl bg-red-400 w-full flex justify-between items-center">
              <div className="font-bold text-lg">Facebook</div>
              <div className="font-thin text-md">
                <div className="">Created On</div>
                <div className="">13-03-2021</div>
              </div>
              <div className=""><AiFillEye size="1.6rem"/></div>
              <div className=""><TiEdit size="1.6rem"/></div>
              <div className=""><MdDelete size="1.6rem"/></div>
            </div>
            <div className="rounded-2xl px-8 shadow-xl mb-4 border rounded-xl bg-red-400 w-full flex justify-between items-center">
              <div className="font-bold text-lg">Facebook</div>
              <div className="font-thin text-md">
                <div className="">Created On</div>
                <div className="">13-03-2021</div>
              </div>
              <div className=""><AiFillEye size="1.6rem"/></div>
              <div className=""><TiEdit size="1.6rem"/></div>
              <div className=""><MdDelete size="1.6rem"/></div>
            </div>
            <div className="rounded-2xl px-8 shadow-xl mb-4 border rounded-xl bg-red-400 w-full flex justify-between items-center">
              <div className="font-bold text-lg">Facebook</div>
              <div className="font-thin text-md">
                <div className="">Created On</div>
                <div className="">13-03-2021</div>
              </div>
              <div className=""><AiFillEye size="1.6rem"/></div>
              <div className=""><TiEdit size="1.6rem"/></div>
              <div className=""><MdDelete size="1.6rem"/></div>
            </div>
            <div className="rounded-2xl px-8 shadow-xl mb-4 border rounded-xl bg-red-400 w-full flex justify-between items-center">
              <div className="font-bold text-lg">Facebook</div>
              <div className="font-thin text-md">
                <div className="">Created On</div>
                <div className="">13-03-2021</div>
              </div>
              <div className=""><AiFillEye size="1.6rem"/></div>
              <div className=""><TiEdit size="1.6rem"/></div>
              <div className=""><MdDelete size="1.6rem"/></div>
            </div>
            <div className="rounded-2xl px-8 shadow-xl mb-4 border rounded-xl bg-red-400 w-full flex justify-between items-center">
              <div className="font-bold text-lg">Facebook</div>
              <div className="font-thin text-md">
                <div className="">Created On</div>
                <div className="">13-03-2021</div>
              </div>
              <div className=""><AiFillEye size="1.6rem"/></div>
              <div className=""><TiEdit size="1.6rem"/></div>
              <div className=""><MdDelete size="1.6rem"/></div>
            </div>
          </div>
        </div>

        <div className="w-6/12 h-[472px]  border-l-2 rounded-l-3xl bg-[#EEF2E6]">

            <div className="mt-8 mx-2 w-full flex items-center justify-center border-b-2 py-4">
                <form action="" className="flex w-8/12 justify-between mt-2 items-center">
                    
                        <input type="text" className="mx-4 w-full py-2 px-2 text-md text-black " placeholder="Enter your password to continue" name="password" required  />
                        <div className="bg-blue-500 py-2 px-4 rounded-lg text-white hover:cursor-pointer hover:bg-blue-600 ">
                        Check
                    </div>
                </form>
            </div>
            <div className="py-4 mt-8 px-2">
              <input type="text" className="mx-4 w-8/12 mb-4 shadow-lg py-2 px-2 text-md text-black " placeholder="Enter the source Name" name="sname" required  />
              {/* <input type="text" className="mx-4 w-8/12 mb-4 shadow-lg py-2 px-2 text-md text-black " placeholder="Username" name="username" required  /> */}
              <input type="file" className="mx-4 w-8/12 mb-4 shadow-lg py-2 px-2 text-md text-black " placeholder="password" name="password" required  />
            </div>
            

            <div className="flex justify-end mx-2">
              <div className="w-6/12 flex justify-center">
                <div className="px-4 py-2 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer rounded text-white">new/update</div>
              </div>
            </div>


        </div>
        
      </div>


    </div>
  )
}
