import { PrismicImage, PrismicLink, PrismicRichText } from "@prismicio/react"

const Footer = ({ data }: any) => {
    return (
        <div className="bg-green py-14 lg:py-8 text-white">
            <div className="container">
                <div className="flex items-center justify-between">
                    <PrismicImage field={data.logo_bottom} />
                    <div>
                        <div className="text-[32px] font-medium leading-[102%] uppercase text-right">
                            {data.dowload_app_text}
                        </div>
                        <div className="mt-4 flex items-center space-x-8 justify-end">
                            <PrismicLink field={data.link_appstore}>
                                <PrismicImage field={data.logo_appstore} />
                            </PrismicLink>
                            <PrismicLink field={data.link_googleplay}>
                                <PrismicImage field={data.logo_googleplay} />
                            </PrismicLink>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center space-x-10">
                        <PrismicLink field={data.link_uncc}>
                            <PrismicImage field={data.logo_uncc} className="w-[252px]"/>
                        </PrismicLink>
                        <PrismicLink field={data.link_cop28}>
                            <PrismicImage field={data.logo_cop28} className="w-[252px]"/>
                        </PrismicLink>
                    </div>
                    <div className="flex items-center space-x-[6px]">
                        {
                            data.slices?.[0]?.items?.map((item:any, index:number) => (
                                <PrismicLink key={index} field={item.link}>
                                    <PrismicImage field={item.icon} className="w-[46px] h-[46px]"/>
                                </PrismicLink>
                            ))
                        }
                    </div>
                </div>
                <div className="flex items-center justify-between mt-8">
                    <div>
                        <div className="flex">
                            <PrismicLink field={data.link_privacy_policy}>
                                {data.label_privacy_policy}
                            </PrismicLink>
                            <span className="px-2">|</span>
                            <PrismicLink field={data.link_accessibility}>
                                {data.label_accessibility}
                            </PrismicLink>
                            <span className="px-2">|</span>
                            <PrismicLink field={data.link_faq}>
                                {data.label_faq}
                            </PrismicLink>
                        </div>
                        <div className="mt-4">{data.label_rights_reserved}</div>
                    </div>
                    <div className="RichText">
                        <PrismicRichText field={data.label_assistance}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer