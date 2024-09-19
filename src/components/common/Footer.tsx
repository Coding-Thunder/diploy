import assets from '../../assets/assests'

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Button from './Button';


const Footer = () => {
    const topics = [
        "What is print on demand?",
        "Product catalog",
        "Shipping and delivery",
        "Dropshipping products",
        "Pro sellers",
        "White label products",
        "Returns policy",
        "Global, yet local",
        "Sustainability",
        "Support"
    ];

    const platforms = [
        "Shopify",
        "Etsy",
        "WooCommerce",
        "Wix",
        "Squarespace",
        "BigCommerce",
        "API"
    ];

    const products = [
        "Embroidery",
        "Print on demand t-shirts",
        "Print on demand hoodies",
        "Print on demand posters",
        "Print on demand canvas",
        "Print on demand calendars",
        "Print on demand mugs",
        "Custom products",
        "Custom clothing",
        "Custom merchandise",
        "Custom phone cases",
        "Print on demand Europe",
        "Print on demand UK",
        "Print on demand France",
        "Print on demand Canada",
        "Merch maker"
    ];

    const gelatoInfo = [
        "GelatoConnect",
        "About Gelato",
        "Leadership team",
        "Board & investors",
        "Newsroom",
        "Blog",
        "Customer Stories",
        "Partners",
        "Careers",
        "Affiliates program"
    ];

    return (
        <div className='bg-black text-white mt-16'>
            <div className='py-10   w-2/3 mx-auto flex justify-between items-center'>
                <img src={assets.logo} className='w-[140px] image_invert' alt="Logo" />
                <div className='hidden xl:flex gap-8'>
                    <p>Find Gelato on:</p>
                    <div className='text-white flex justify-between items-center gap-8 text-2xl'>
                        <FaInstagram />
                        <FaFacebookF />
                        <FaTiktok />
                        <FaLinkedinIn />
                        <FaYoutube />
                    </div>
                </div>
            </div>

            <div className='w-2/3  mx-auto flex justify-between'>
                <div className='w-full xl:w-2/6 flex flex-col gap-12'>
                    <div className='flex flex-col items-start gap-4'>
                        <p className='text-xs w-[85%]'>
                            Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.
                        </p>
                        <Button text='Get started' inverted />
                    </div>

                    <div>
                        <p>Get the app</p>
                        <div className='flex w-fit justify-between items-center gap-2'>
                            <img src={assets.app_store} alt="App Store" />
                            <img src={assets.play_store} alt="Play Store" />
                        </div>
                    </div>
                </div>
                <div className='w-1/6 hidden xl:flex  flex-col items-start gap-6 h-fit'>
                    <p>Print on demand</p>
                    <div className='flex flex-col items-start gap-2'>
                        {topics.map(item => (
                            <p className='text-xs cursor-pointer hover:text-gray-300'>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='w-1/6  hidden xl:flex  flex-col items-start gap-6 h-fit'>
                    <p>Print on demand</p>
                    <div className='flex flex-col items-start gap-2'>
                        {platforms.map(item => (
                            <p className='text-xs cursor-pointer hover:text-gray-300'>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='w-1/6  hidden xl:flex  flex-col items-start gap-6 h-fit'>
                    <p>Print on demand</p>
                    <div className='flex flex-col items-start gap-2'>
                        {products.map(item => (
                            <p className='text-xs cursor-pointer hover:text-gray-300'>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='w-1/6 hidden xl:flex flex-col items-start gap-6 h-fit'>
                    <p>Print on demand</p>
                    <div className='flex flex-col items-start gap-2'>
                        {gelatoInfo.map(item => (
                            <p className='text-xs cursor-pointer hover:text-gray-300'>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer