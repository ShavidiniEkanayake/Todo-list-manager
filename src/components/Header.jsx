import React, { useState } from 'react';
import logoFull from '../assets/logos/LogoFull - light.svg'
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import ProfilePic from '../assets/Images/profile.png'

const Header = () => {
    return (
        <div className='px-8'>
            <div className="bg-white pl-6 shadow-sm max-w-full">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <MenuIcon></MenuIcon>
                        <span className="ml-2 font-TTHovesProTrialDemiBold text-lg">My Todos</span>
                    </div>
                    <div className="flex items-center ml-auto mr-6 py-2">
                        <Image
                            src={ProfilePic}
                            alt="Profile"
                            className="w-10 h-10 rounded-full"
                        />
                        <div
                            className="ml-1 flex flex-row"
                            onClick={() => navigateToLogin()}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;
