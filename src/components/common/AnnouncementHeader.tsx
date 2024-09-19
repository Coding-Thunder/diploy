
import { IoMdInformationCircleOutline } from "react-icons/io";

const AnnouncementHeader = () => {
  return (
    <div className='flex text-white gap-3 justify-center bg-black py-2 items-center'>
      <p className='underline text-[15px]  font-thin cursor-pointer'>
        FREE SHIPPING for orders over $300. Order today
      </p>
      <IoMdInformationCircleOutline className="text-xl cursor-pointer" />
    </div>
  )
}

export default AnnouncementHeader