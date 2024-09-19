
import assets from "../../assets/assests"
import Button from "../common/Button"
const Hero = () => {
    return (
        <section className="flex items-center justify-center h-fit mb-16">
            <div className='flex w-2/3 justify-center items-center  flex-col-reverse md:flex-row'>
                <div className="flex justify-between flex-col">
                    <p className="text-6xl  font-semibold w-[80%]  leading-[84px]">
                        Print on demand for your ecommerce business
                    </p>
                    <div className="flex flex-col gap-2">
                        <p className="text-3xl">
                            Sign up for free and only pay for what you sell
                        </p>
                        <p className="w-[70%]">
                            Turn your passion into profit with the world's largest <span className="underline cursor-pointer">print on demand</span> network
                        </p>
                    </div>

                    <div className="flex items-center gap-4 mt-6">
                        <Button text="Get started for free" />
                        <Button text="See our products" inverted />
                    </div>

                    <div className="mt-6 flex hover:text-gray-500 flex-col cursor-pointer">
                        <img src={assets.shopify} alt="Shopify" className="w-[160px]" />
                        <div className=" flex  items-center gap-2">
                            <div className="flex  items-center">
                                {Array(5).fill(0).map(item => (
                                    <img src={assets.star} alt="start" className="w-[28px]" />
                                ))}
                                <span className=" ml-2 text-sm">4.8 / 5</span>
                            </div>

                        </div>
                        <span className="text-sm ">based on 910 reviews</span>
                    </div>

                </div>

                <img className=" object-contain md:w-[40%] " src={assets.heroImage} alt="hero" />
            </div>
        </section>
    )
}

export default Hero