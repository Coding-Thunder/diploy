import assets from "../../assets/assests"
import Button from "../common/Button"

const GaletoConnect = () => {
    return (

        <div className='w-full md:w-2/3 mx-auto flex-col md:flex-row flex justify-center items-center gap-12'>
            <div className="w-full md:w-[50%]">
                <img src={assets.mobile} alt="Mobile Giffy" />
            </div>
            <div className="w-full md:w-[50%] px-6 lg:px-0 flex flex-col items-start justify-center gap-6">
                <div>
                    <p className='text-xl'>For print producers</p>
                    <p className='text-4xl md:text-6xl leading-[70px] w-full md:w-[90%]'>GelatoConnect</p>
                </div>

                <p className='text-2xl w-full md:w-[80%]'>
                    Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry                </p>
                <Button text='Learn more' />
            </div>
        </div>
    )
}

export default GaletoConnect