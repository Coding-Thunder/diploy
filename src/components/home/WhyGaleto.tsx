import React from 'react'
import assets from '../../assets/assests'
import Button from '../common/Button';

const WhyGaleto = () => {
    const features = [
        {
            title: "▻ World's largest print-on-demand network",
            description: "140+ print partners in 32 countries. Gelato is a truly global service."
        },
        {
            title: "▻ Sell globally, produce locally",
            description: "Your products are produced close to your customers, wherever they are."
        },
        {
            title: "▻ 100% free editing tools",
            description: "Create your custom products using our suite of free tools."
        },
        {
            title: "▻ 60+ logistics partners",
            description: "Our global network of logistics partners ensures your products are delivered fast."
        },
        {
            title: "▻ High-quality products",
            description: "We partner with the world's leading brands to ensure the best quality products."
        },
        {
            title: "▻ Endless creativity with Shutterstock Images",
            description: "Access millions of images and graphics to create unique products you can sell in your store."
        },
        {
            title: "▻ 1-click integration to the leading ecommerce platforms",
            description: "Connect your store to Gelato using our integrations with Shopify, Etsy and more."
        }
    ];

    return (
        <>
            <div className='py-14'>
                <p className='text-gray-800 font-semibold text-center text-4xl lg:text-6xl'>Why choose Gelato</p>
            </div>
            <div className='w-full px-6  lg:w-2/3 mx-auto flex gap-16 flex-col lg:flex-row mb-16'>
                <div className='flex-1'>
                    <img src={assets.heroImage2} alt="hero 2" />

                </div>
                <div className='flex-1 flex flex-col lg:items-start items-center justify-center'>
                    {features.map(item => (
                        <div className='w-[90%] flex flex-col items-start justify-center gap-2 mb-5'>
                            <p className='text-2xl'>{item.title}</p>
                            <p className='w-[90%] text-sm'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-2/3 mx-auto flex flex-col-reverse lg:flex-row'>
                <div className='flex-1 px-6 lg:px-0 flex flex-col items-start justify-center gap-6'>
                    <div>
                        <p className='text-xl'>For print on demand sellers</p>
                        <p className='text-6xl leading-[70px] w-[90%]'>Accelerate business growth with innovative design tools and apps</p>
                    </div>

                    <p className='text-2xl'>
                        See how our cutting-edge solutions can help you reach new customers and maximize your profits.
                    </p>
                    <Button text='Get started' />
                </div>
                <div className='flex-1'>
                    <img src={assets.cup} alt="Cup" />
                </div>
            </div>
        </>

    )
}

export default WhyGaleto