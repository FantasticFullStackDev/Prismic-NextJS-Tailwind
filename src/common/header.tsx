import HeaderMenuItem from "@/slices/HeaderMenuItem";
import { PrismicImage, PrismicLink } from "@prismicio/react"
import Link from "next/link";

const Header = ({ data }: any) => {
    return (
        <div className="absolute top-0 left-0 z-10 w-full container flex items-center justify-between py-4 lg:py-10 text-white">
            <Link href="/">
                <PrismicImage field={data.logo_white} className="w-[80px] lg:w-[192px] h-auto" />
            </Link>
            <div className="hidden lg:block">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-[16px] leading-[18px] font-medium">
                        <div className="w-[62px] h-[32px] rounded-full bg-white p-1">
                            <div className="w-6 h-6 bg-[#dbff06] rounded-full flex items-center justify-center">
                                <PrismicImage field={data.lowcarbontoggleicon} />
                            </div>
                        </div>
                        <div>
                            {data.lowcarbontogglelabel}
                        </div>
                    </div>
                    <div className="flex items-center space-x-8">
                        <button>
                            <PrismicImage field={data.search} />
                        </button>
                        <button>
                            <PrismicImage field={data.call} />
                        </button>
                        <button>
                            <PrismicImage field={data.accessibility} />
                        </button>
                        <PrismicLink field={data.uncc_link}>
                            <PrismicImage field={data.logo_uncc} />
                        </PrismicLink>
                    </div>
                </div>
                <hr className="my-4"/>
                <div className="flex space-x-[54px]">
                    {
                        data.slices.map((slice: any, index: number) => (
                            <HeaderMenuItem key={index} slice={slice} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Header