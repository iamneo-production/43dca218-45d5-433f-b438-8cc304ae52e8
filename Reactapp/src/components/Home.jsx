import React from 'react';

const Home = () => {

    return(
        <div className="flex justify-center items-center mx-4 mt-12 ">
      <div className=" flex justify-between mt-16 border-2 rounded-xl shadow-xl w-10/12">
        <div className="w-6/12 h-[472px] ">
          <div className="mt-4 h-[390px] text- w-full overflow-x-auto overflow-x-hidden px-4 py-4">
            <div margin-top="50px" className="rounded-2xl px-8 shadow-xl mb-4 border rounded-xl bg-red-400 w-full flex justify-between items-center">
              <div className="font-bold text-lg py-6">
                <a href="/cre">Credential Locker</a>
                </div>
            </div>
            <div className="rounded-2xl px-8 shadow-xl mb-4 border rounded-xl bg-red-400 w-full flex justify-between items-center">
              <div className="font-bold text-lg py-6">
                <a href="/BankInfo"> Bank Details Locker</a>
              </div>
            </div>
            <div className="rounded-2xl px-8 shadow-xl mb-4 border rounded-xl bg-red-400 w-full flex justify-between items-center">
              <div className="font-bold text-lg py-6">
                <a href="/MediaLocker">Media Locker</a>
              </div>
            </div>
            
          </div>
        </div>

        <div margin-top="20px"className="w-8/12 h-[300px] bg-[#fffff]">
            <img className="image" class="m-4" src="https://media.istockphoto.com/photos/cybersecurity-and-secure-nerwork-concept-data-protection-gdrp-glowing-picture-id1197780051?k=20&m=1197780051&s=612x612&w=0&h=hUVHAXTr1RsEq7sWyDkXGPQzhwg3bUcJDgWKh-d0Qp4=" alt="image"/>
        </div>
      </div>
    </div>
    )
}


export default Home;

