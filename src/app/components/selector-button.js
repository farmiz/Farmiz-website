"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import home from '../../../public/home.svg';
import porfolio from '../../../public/portfolio.svg';
import track from '../../../public/track.svg';
import wallet from '../../../public/wallet.svg';
import { ReactSVG } from "react-svg";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Selector() {
    const items = [
        {
            title: home,
            content: (
                <div className='border-2 border-blue-400 rounded-lg p-4'>
                    <h1 className='text-3xl text-blue-600'>Title Test 1</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                        aperiam asperiores doloribus velit dolore magnam ex consectetur fugit
                        earum illum qui similique architecto dolorum, minima enim quidem
                        voluptatibus at nulla deleniti harum! Totam, mollitia quos voluptatem
                        deleniti provident obcaecati rerum.
                    </p>
                </div>
            ),
        },
        {
            title: porfolio,
            content: (
                <div className='border-2 border-blue-400 rounded-lg p-4'>
                    <h1 className='text-3xl text-blue-600'>Title Test 2</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                        aperiam asperiores dolo iti harum! Totam, mollitia quos voluptatem
                        deleniti provident obcaecati rerum.
                    </p>
                </div>
            ),
        },
        {
            title: wallet,
            content: (
                <div className='border-2 border-blue-400 rounded-lg p-4'>
                    <h1 className='text-3xl text-blue-600'>Title Test 3</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                        aperiam asperiores doloribus velit dolore magnam ex consectetur fugit
                        earum illum qui similique architecto dolorum, minima enim quidem
                        voluptatibus at nulla deleniti harum! Totam, mollitia quos voluptatem
                        deleniti provident obcaecati rerum. amet consectetur adipisicing elit.
                        Dolores aperiam asperiores doloribus velit dolore magnam ex
                        consectetur fugit earum illum qui similiq
                    </p>
                </div>
            ),
        },
        {
            title: track,
            content: (
                <div className='border-2 border-blue-400 rounded-lg p-4'>
                    <h1 className='text-3xl text-blue-600'>Title Test 4</h1>
                    <p>
                        Lorem ipsum dolor sit ue architecto dolorum, minima enim quidem
                        voluptatibus at nulla deleniti harum! Totam, mollitia quos voluptatem
                        deleniti provident obcaecati rerum.
                    </p>
                </div>
            ),
        },
    ];

    const [selectedTab, setSelectedTab] = useState(0);
    const firstBtnRef = useRef();

    useEffect(() => {
        firstBtnRef.current.focus();
    }, []);

    return (
        <div className=' flex justify-center items-center py-12'>
            <div className='max-w-md flex flex-col gap-y-2 w-full'>
                <div className='p-1 rounded-xl flex justify-between items-center gap-x-2 font-bold text-white w-full h-full'>
                    {items.map((item, index) => (
                        <div
                            ref={index === 0 ? firstBtnRef : null}
                            key={index}
                            onClick={() => setSelectedTab(index)}
                            className={`flex w-14 h-14  p-2  rounded-full text-center focus:ring-2 justify-center items-center ${selectedTab === index ? 'bg-[#A8E06C]' : ''
                                } `}
                        >

                            {/* <ReactSVG src={`${item.title}`} color='red' fill='red' /> */}
                            {/* <item.title className='fill-yellow-600'/> */}

                            <ReactSVG src={item.title.src} fill='red' fillRule='nonzero'
                             afterInjection={(svg) => {

                                selectedTab === index ? svg.setAttribute('style', 'fill: #173400') : svg.setAttribute('style', 'fill: none')
                                // svg.setAttribute('style', ' fill-opacity: 0.1')
                                const gElements = svg.getElementsByTagName('g');
                                if (selectedTab === index) {
                                    console.log(selectedTab);
                                    console.log(index)
                                  // Check if the selectedTab index is within the range
                                  gElements[selectedTab].setAttribute('opacity', '1');
                                  console.log(gElements);
                                }
                              }}
                            
                            />
                        </div>
                    ))}
                </div>

                <div className='bg-white p-2 rounded-xl '>
                    {items.map((item, index) => (
                        <div key={index} className={`${selectedTab === index ? '' : 'hidden'}`}>
                            {item.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
