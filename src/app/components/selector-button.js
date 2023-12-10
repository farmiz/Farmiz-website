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
import dashboard from '../../../public/dashboard.png';
import discover from '../../../public/discover.png';
import walletIcon from '../../../public/wallet.png';
import porfolioIcon from '../../../public/porfolio.png';



const items = [
    {
        activeIcon: activeHome,
        inactiveIcon: home,
        title: 'DASHBOARD',
        subtitle: 'View your farmiz balance, portfolio health, and investing action, all from one place.',
        image: dashboard,
    },

    {
        activeIcon: activeCompass,
        inactiveIcon: compass,
        title: 'DISCOVER',
        subtitle: 'Explore ongoing investment opportunities that align to your preferences, values and financial growth.',
        image: discover,

    },
    {
        activeIcon: activeWallet,
        inactiveIcon: wallet,
        title: 'WALLET',
        subtitle: 'Top-up / withdraw from your wallet, and track every transaction activity going on in your account.',
        image: walletIcon,

    },
    {
        activeIcon: activePorfolio,
        inactiveIcon: porfolio,
        title: 'PORTFOLIO',
        subtitle: 'Monitor your portfolio overview and track ongoing or matured investments windows  you have participated in over time.',
        image: porfolioIcon,
    },
];


export default function Selector() {

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

                <div className='p-2 rounded-xl mt-5'>
                    {items.map((item, index) => (
                        <div key={index} className={`${selectedTab === index ? '' : 'hidden'} flex flex-col gap-5`}>
                            {/* {item.content} */}
                            <div className="w-full flex items-center justify-center gap-10">
                                <Image src={item.image} alt="Dashboard" className="w-[70%]  object-cover" />
                            </div>
                            <div className="text-lime-300 text-lg font-bold font-cabinet leading-normal mt-5">{item.title}</div>
                            <div className="text-lime-50 text-lg font-bold font-cabinet leading-relaxed">{item.subtitle}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}


const SvgSelctor = ({ activeIcon, inActiveIcon, isActive }) => {
    return (
        <Image src={isActive ? activeIcon : inActiveIcon} alt="Selctor Icons" />
    );
}