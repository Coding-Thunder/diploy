import React from 'react'

const Stats = () => {
    return (
        <div className='hidden md:flex w-2/3 mx-auto  justify-between items-center mb-16'>
            <div className='w-fit flex justify-center items-center flex-col'>
                <p className='text-3xl'>90%</p>
                <p className='w-[90%] text-2xl text-center'>of all orders are produced locally</p>
            </div>

            <div className=' w-fit flex justify-center items-center flex-col'>
                <p className='text-3xl'>90%</p>
                <p className='w-[85%] text-2xl text-center'>of orders arrive within 5 days of ordering</p>
            </div>

            <div className='w-fit flex justify-center items-center flex-col'>
                <p className='text-3xl'>90%</p>
                <p className='text-2xl w-[90%] text-center'>print providers across 32 countries</p>
            </div>
        </div>
    )
}

export default Stats