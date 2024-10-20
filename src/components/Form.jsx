import React from 'react'

function Form() {
    return (
        <>
            <div id='main' className='p-4 bg-white w-96 mx-auto my-28 rounded-xl'>
                <br />
                <div>
                    <h1 id='h1' className='text-center text-purple-900 text-2xl
          font-semibold'>Sign In</h1>
                </div>
                <br /><br /><br />
                <div>
                    <input className='
          bg-gray-200 w-64 mx-12 outline-none p-1
          rounded-xl text-center font-semibold placeholder-purple-600'
                        placeholder='Username' type="text" name="" id="" />
                    <br /><br />
                    <input className='
          bg-gray-200 w-64 mx-12 outline-none p-1
          rounded-xl placeholder-purple-600 text-center font-semibold'
                        placeholder='Password' type="text" name="" id="" />
                </div>
                <br /><br />
                <div className='flex justify-center'>
                    <button className='p-2 w-32 rounded-2xl bg-purple-600
           text-white'>Sign In</button>
                </div>
                <br />
                <div>
                    <p id='forgot' className='text-center text-purple-500
          '>Forgot Password?</p>
                </div>
                <br />
            </div>
        </>
    )
}

export default Form