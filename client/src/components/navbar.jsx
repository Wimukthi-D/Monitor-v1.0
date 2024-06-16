import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton, MenuItem } from "@mui/material";
import Logo from '../Assets/MONITOR.png';
const navbar = ({ toggle }) => {

    return (
        <div className='flex-col w-screen'>
            <div className='flex h-[80px] items-center'>
                <div className='w-[70%] flex justify-start px-10 items-center'>
                    <img src={Logo} alt="Logo" className="w-[280px]" />
                </div>
                <div className='w-[30%] flex justify-end px-10 space-x-[50px] items-center'>
                    <button to="/sensors">
                        <div className='flex-col font-space-mono'>
                            <p className='text-white text-lg'>Sensors</p>
                        </div>
                    </button>
                    <IconButton onClick={toggle}>
                        <NotificationsIcon style={{ color: 'white' }} />
                        <span class="absolute flex h-[10px] w-[10px] left-[25px] top-[6px]">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d402ff] opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-[10px] w-[10px] bg-[#d502ffa3]"></span>
                        </span>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default navbar
