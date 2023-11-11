import React, { useState } from 'react';
import logoFull from '../assets/logos/LogoFull - light.svg'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import ProfilePic from '../assets/Images/profile.png'
import { Breadcrumb } from 'antd';

const Header = () => {

    return (
        <div className='px-6'>
            <div className="bg-white pl-6 shadow-sm max-w-full">
                <div className="flex justify-between items-center">
                    <MenuIcon></MenuIcon>
                    <div>
                        <Breadcrumb >
                            <Breadcrumb.Item className="text-md font-TTHovesProTrialDemiBold text-darkblue">
                                Home
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="text-md font-TTHovesProTrialDemiBold text-lightblue">
                                Todo
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="flex items-center mr-6 py-2">
                        <Image
                            src={ProfilePic}
                            alt="Profile"
                            className="w-10 h-10 rounded-full"
                        />
                        <div
                            className="ml-1 flex flex-row"
                            onClick={() => navigateToLogin()}
                        >
                            <div className="flex flex-col pr-2">
                                <span className="text-darkblue font-TTHovesProTrialDemiBold ml-2 text-sm">
                                    Loro Freezai
                                </span>
                                <span className="text-[#b6bcc1] font-TTHovesProTrialDemiBold ml-2 text-xs uppercase">
                                    Student
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;