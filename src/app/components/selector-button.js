"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import home from '../../../public/selector/home.svg';
import activeHome from '../../../public/selector/active-home.svg';
import porfolio from '../../../public/selector/portfolio.svg';
import activePorfolio from '../../../public/selector/active-porfolio.svg';
import compass from '../../../public/selector/compass.svg';
import activeCompass from '../../../public/selector/active-compass.svg';
import wallet from '../../../public/selector/wallet.svg';
import activeWallet from '../../../public/selector/active-wallet.svg';


import { ReactSVG } from "react-svg";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Selector() {
    const items = [
        {
            activeIcon: activeHome,
            inactiveIcon: home,
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
            activeIcon: activePorfolio,
            inactiveIcon: porfolio,
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
            activeIcon: activeCompass,
            inactiveIcon: compass,
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
            activeIcon: activeWallet,
            inactiveIcon: wallet,
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
                            <SvgSelctor activeIcon={item.activeIcon} inActiveIcon={item.inactiveIcon} isActive={selectedTab === index} />

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


const SvgSelctor = ({ activeIcon, inActiveIcon, isActive }) => {
    return (
        <>
         <Image src={isActive ? activeIcon : inActiveIcon} alt="Selctor Icons" />
        </>
    )
}