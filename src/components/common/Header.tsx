// @ts-ignore
import { MdHeadphones } from "react-icons/md";
import { IoGlobeSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import Button from "./Button";
import assets from "../../assets/assests";



interface HeaderItems {
    icon?: any
    label: string
    classNames?: string
}



const Header = () => {
    const headerItems = [
        { label: "Contact us", icon: MdHeadphones, classNames: "hidden lg:flex py-1" },
        { label: "IN/INR", icon: IoGlobeSharp, classNames: "hidden md:flex py-1" },
        { label: "Cart", icon: IoMdCart, classNames: "hidden md:flex py-1" },
        { label: "Sign In", icon: FaUser, classNames: "hidden lg:flex py-2" },
    ]
    return (
        <div className='flex justify-center items-center border border-b-2 border-gray-200 bg-white'>
            <div className="w-2/3 py-4 flex justify-between items-center">
                <div className="flex gap-6">
                    <MdOutlineMenu className="text-3xl xl:hidden" />
                    <img alt="logo" src={assets.logo} className="object-contain w-[130px]" />
                </div>
                <div className="flex justify-center items-center gap-3
                ">
                    {
                        headerItems.map(({ label, icon: Icon, classNames }: HeaderItems, idx) => (
                            <>
                                <div key={`${idx}${label}`} className={`${classNames} rounded-2xl px-3  cursor-pointer flex items-center gap-2  hover:bg-gray-300`}>
                                    {idx === 3 ? (
                                        Icon && <Icon className="text-[14px]" />
                                    ) : (
                                        Icon && <Icon className="text-2xl" />
                                    )}
                                    <p className={`font-bold text-xs`}>
                                        {label}
                                    </p>
                                    {idx === 1 && <IoIosArrowDown />}
                                </div>
                            </>
                        ))
                    }
                    <Button text="Sign Up for free" />
                </div>
            </div>
        </div>
    )
}

export default Header