import Dropdown from "./Dropdown"

const HeaderSecondary = () => {
    return (
        <div className="border-b-2 border-gray-200 hidden xl:block bg-white">
            <div className="gap-6 flex   w-fit relative left-[16vw]">
                <Dropdown label="Products" options={[
                    "Bestsellers",
                    "Mens clothing",
                    "Womens clothing",
                    "Kids & baby clothing",
                    "Wall art",
                    "Calenders",
                    "Cards",
                    "Photo books",
                    "Hats",
                    "Phone cases",
                    "Mugs",
                    "Tote bags",
                    "Stationery & business"
                ]} />
                <Dropdown label="Start selling" options={[
                    "Bestsellers",
                    "Mens clothing",
                    "Womens clothing",
                    "Kids & baby clothing",
                    "Wall art",
                ]} />
                <Dropdown label="Tools and apps" options={[
                    "Bestsellers",
                    "Mens clothing",
                    "Womens clothing",
                    "Kids & baby clothing",
                    "Wall art",
                    "Phone cases",
                    "Mugs",
                    "Tote bags",
                    "Stationery & business"
                ]} />
                <Dropdown label="Pricing" options={[
                    "Bestsellers",
                    "Mens clothing",
                    "Womens clothing",
                ]} />
                <Dropdown label="Resources" options={[
                    "Bestsellers",
                    "Mens clothing",
                    "Womens clothing",
                    "Kids & baby clothing",
                    "Wall art",
                    "Phone cases",
                    "Mugs",
                    "Tote bags",
                    "Stationery & business"
                ]} />
                <Dropdown label="Pro sellers" />
                <Dropdown label="GelatoConnet" options={[
                    "GelatoConnect",
                    "Mens clothing",
                    "Womens clothing",
                ]} />
            </div>
        </div>

    )
}

export default HeaderSecondary