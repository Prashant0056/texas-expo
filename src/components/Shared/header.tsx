import DateTimeDisplay from "@/app/(frontend)/display/_components/date-time-display";
import Image from "next/image";

const Header = () => {
    return (
        <div className="h-fit w-full pr-4 bg-blue-950 text-white">
            <div className="grid grid-cols-5">
                <div className="p-2 bg-white pl-4">
                    <Image src={"/assets/texas-logo.png"} alt="texas logo" width={200} height={80} />
                </div>
                <div className="col-span-3 flex items-center justify-end pr-8">
                    <p className="text-5xl font-semibold">TEXAS SCIENCE & IT EXPO - 2081</p>
                </div>
                <div className="flex items-center justify-end">
                    <DateTimeDisplay />
                </div>
            </div>
        </div>
    )
}

export default Header;