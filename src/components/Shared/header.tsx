import DateTimeDisplay from "@/app/(frontend)/display/_components/date-time-display";
import Image from "next/image";

const Header = () => {
    return (
        <div className="h-fit w-full px-2">
            <div className="grid grid-cols-5">
                <div className="p-2">
                    <Image src={"/assets/texas-logo.png"} alt="texas logo" width={200} height={80} />
                </div>
                <div className="col-span-3 flex items-center justify-center">
                    <p className="text-3xl font-semibold">Science And IT Expo 2025</p>
                </div>
                <div className="flex items-center justify-end">
                    <DateTimeDisplay />
                </div>
            </div>
        </div>
    )
}

export default Header;