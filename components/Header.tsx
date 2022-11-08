import Link from "next/link"
import { useGetBasketQuery } from "../store";

export const Header = () => {

    const { data: basket } = useGetBasketQuery();

    console.log("rendered header");

    return <div className="bg-emerald-700 drop-shadow-lg sticky top-0 z-50">
        <div className="container mx-auto h-16 flex items-center w-full">
            <h1 className="text-2xl text-white font-bold flex-auto"><Link href="/">Redux Toolkit Test</Link></h1>
            <div className="flex justify-end">
                <h1 className="text-xl text-white font-bold">Your total is: £{basket?.total || 0}</h1>
            </div>
        </div>
    </div>
}