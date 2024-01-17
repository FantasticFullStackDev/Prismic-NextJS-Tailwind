"use client"
import React, { useEffect, useState, useRef } from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from "react-slick";
// eslint-disable-next-line import/no-extraneous-dependencies
import "slick-carousel/slick/slick.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "slick-carousel/slick/slick-theme.css";
import { PrismicLink, PrismicText } from "@prismicio/react";

const CarouselDefaultVariant = ({ primary, items }: any): JSX.Element => {

    const sliderRef = useRef(null);
    const settings = {
        appendDots: (dots: any) => {
            return (
                <div>
                    <ul className="absolute end-10 md:end-20 bottom-14 rtl:flex rtl:flex-row-reverse">
                        {dots}
                    </ul>
                </div>
            );
        },
        customPaging: function (i: any) {
            return (
                <span className="h-px bg-white w-8 md:w-16 inline-block me-2 relative">
                    <span
                        className="h-0.5 absolute bottom-0 start-0 bg-white w-0"
                        style={{ animationDuration: `7000ms` }}
                    ></span>
                </span>
            );
        },
        dots: true,
        infinite: true,
        autoplay: true,
        fade: false,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        autoplaySpeed: 7000,
    };
    return (
        <>
            <section className=" color-block relative carouselBanner h-screen md:h-[900px]">
                <Slider 
                    {...settings} 
                    ref={sliderRef} 
                    className="overflow-hidden"
                >
                    {items?.map((item:any, index:number) => (
                        <div
                            key={index}
                            className="relative h-screen md:h-[900px]"
                        >
                            <div
                                style={{
                                    background: `url(${item?.image.url})  center\/ cover`,
                                }}
                                className="carousel-banner-slide  bg-cover absolute top-0 start-0 w-full  h-full "
                            />
                            <div className=" absolute top-0 start-0 w-full  h-full dark:bg-green-gradient hidden dark:block z-0" />
                            {
                                item.link && item.label ?
                                    <PrismicLink 
                                        field={item.link}
                                        className="absolute bottom-10 left-10 block px-8 py-4 bg-yellow text-typo-primary text-[16px] leading-[18px] font-medium"
                                    >
                                        {item.label}
                                    </PrismicLink> :
                                    null
                            }
                        </div>
                    ))}
                </Slider>
            </section>
        </>
    );
};

export default CarouselDefaultVariant;
