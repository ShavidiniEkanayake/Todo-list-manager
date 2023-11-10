import React, { useState } from 'react';
import logoFull from '../assets/logos/LogoFull - light.svg'
import Image from 'next/image';
import { useDispatch } from 'react-redux';

const Header = () => {

    return (
        <div>
            <div className="flex-none w-64 bg-gray-800 h-screen p-4">
                <ul className="space-y-2">
                    <li
                        className="cursor-pointer p-3 hover:bg-gray-700 rounded"    
                    >
                        Dashboard
                    </li>
                    <li className="cursor-pointer p-3 hover:bg-gray-700 rounded">Other Item 1</li>
                    <li className="cursor-pointer p-3 hover:bg-gray-700 rounded">Other Item 2</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;