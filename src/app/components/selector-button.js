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
import dashboard from '../../../public/dashboard.svg';
import discover from '../../../public/discover.svg';
import walletIcon from '../../../public/wallet.svg';
import porfolioIcon from '../../../public/porfolio.svg';



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
        <div className='flex justify-center items-center'>
            <div className='flex flex-col w-full items-center  lg:flex-row  lg:justify-between  lg:h-[500px] '>
                <div className='lg:p-1 pt-12 rounded-xl flex justify-between items-end gap-x-2 font-bold text-white w-[85%] lg:w-[40%] h-[60%] mb-5 lg:flex-col'>
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
                <div className='mt-5  w-[100%] h-[100%] flex justify-center '>
                    {items.map((item, index) => (
                        <div key={index} className={`${selectedTab === index ? '' : 'hidden'} flex flex-col gap-5 lg:flex-row items-center`}>
                            <div className="w-full flex items-center justify-center gap-10">
                                <Image src={item.image} alt="Dashboard"  height={600} className="lg:h-full"/>
                            </div>

                        </div>
                    ))}
                </div>

                <div className='p-2 mt-5 lg:w-[100%] h-[60%]'>
                    {items.map((item, index) => (
                        <div key={index} className={`${selectedTab === index ? '' : 'hidden'} flex flex-col gap-5 lg:flex-row w-[250px] items-center h-[60%]`}>
                            {/* <div className="w-full flex items-center justify-center gap-10">
                                <Image src={item.image} alt="Dashboard" className="w-[70%]  lg:w-[40%] h-[60%] object-cover" />
                            </div> */}
                            <div>
                                <div className="text-lime-300 text-lg font-bold font-cabinet leading-normal mt-5">{item.title}</div>
                                <div className="text-lime-50 text-lg font-bold font-cabinet leading-relaxed">{item.subtitle}</div>
                            </div>
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