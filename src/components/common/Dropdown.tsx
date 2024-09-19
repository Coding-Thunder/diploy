import React from 'react'

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



interface Props {
    label: string
    options?: string[]
}
const Dropdown: React.FC<Props> = ({ label, options }) => {
    return (
        <div className="group relative cursor-pointer  w-fit">

            <div className="flex px-2 items-center hover:bg-gray-200 justify-between gap-3   bg-white">
                <p className="py-4  menu-hover   font-bold text-black text-xs" >
                    {label}
                </p>
                {options && (<span>
                    <IoIosArrowDown />
                </span>)}
            </div>

            <div
                className={`invisible  absolute z-50 flex w-[220px] flex-col bg-white py-1 px-4 text-gray-800 shadow-xl ${options && "group-hover:visible"}`}>
                {options && options.map((item, idx) => {
                    const comp = (idx === 5) || (idx === 6) || (idx === 10) || (idx === 11) || (idx === 12)
                    return (
                        <div className='text-black   text-sm flex my-1 p-3 hover:bg-gray-200 justify-between items-center'>
                            <p >
                                {item}
                            </p>
                            {!comp && <IoIosArrowForward />}
                        </div>
                    )
                })}
            </div>
        </div>)
}

export default Dropdown