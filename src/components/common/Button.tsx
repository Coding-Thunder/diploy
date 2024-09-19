import React from 'react'

interface Props {
    inverted?: boolean
    text: string
}
const Button: React.FC<Props> = ({ inverted, text }) => {
    return (
        <div className={`w-fit font-bold text-xs rounded-2xl px-4 py-2 cursor-pointer flex items-center gap-2   ${inverted ? "bg-white border border-gray-400 hover:bg-gray-200 text-black" : "bg-black text-white hover:text-gray-300"}`}>
            {text}
        </div>
    )
}

export default Button