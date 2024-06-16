import React, { useState, useRef, useEffect } from 'react';
import Navbar from "../components/navbar";
import Chart from "../components/realtimechart";
import FormattedDate from "../components/FormattedDate";
import Alert from "../components/Alert";
import CLI from "../components/CLI";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
    typography: {
        button: {
            fontFamily: 'Space Mono',
        },
    },
});

const MainPage = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [isRead, serIsRead] = useState(false);
    const [notificationpanel, setNotificationPanel] = useState(false);
    const notificationpanelRef = useRef(null);
    const [commands, setCommands] = useState([
        'echo Hello, World!',
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            addRandomCommand();
        }, 2000); 

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [commands]);

    const randomCommands = [
        'echo "Random Command"',
        'ls -lh',
        'cat /etc/passwd',
        'df -h',
        'uptime',
        'whoami',
        'ps aux',
        'top -n 1',
        'date',
        'hostname'
    ];

    const addRandomCommand = () => {
        const randomCommand = randomCommands[Math.floor(Math.random() * randomCommands.length)];
        setCommands(prevCommands => {
            if (prevCommands.length >= 29) {
                return [...prevCommands.slice(1), randomCommand];
            }
            return [...prevCommands, randomCommand];
        });
        // toast.error(`High Temperature Warning!`, {
        //     position: "top-right",
        //     autoClose: 4000,
        //     hideProgressBar: true,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     theme: "dark",
        // });
    };

    const handleClickOutside = (event) => {
        if (notificationpanelRef.current && !notificationpanelRef.current.contains(event.target)) {
            if (notificationpanel) {
                setNotificationPanel(false);
            }

        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [notificationpanel]);

    const togglePanel = () => {
        setNotificationPanel(true);
    };

    const handleClick = () => {
        setIsToggled(!isToggled);
    };

    return (
        <>
            <div className='flex-col bg-[#040417] h-[100vh] bg-gradient-to-br from-[#9d00635a] via-[#040417] to-[#290b3a]'>
                <div className='flex-col h-[100vh]'>
                    <Navbar
                        toggle={togglePanel}
                    />
                    <>
                        <div ref={notificationpanelRef} className={`absolute right-0 h-[100vh] overflow-hidden ${notificationpanel ? 'w-[26%] items-start' : 'w-0 items-center'} flex flex-col justify-between transition-all duration-500 ease-in-out`}>
                            <div className='absolute inset-0 bg-[#ffffff10] blur-2xl'></div>
                            <div className='shadow-[#f4fdff6f] w-full px-4 py-3 h-[91vh] overflow-y-auto' style={{ backdropFilter: 'blur(10px)', scrollbarWidth: 'none', '-ms-overflow-style': 'none', scrollbarColor: 'transparent transparent' }}>
                                <Alert isRead={isRead} />
                            </div>
                        </div>
                    </>

                    <div className='font-space-mono flex justify-center'>
                        <p className='text-white text-5xl font-semibold'>Sensor Monitoring System</p>
                    </div>
                    <div className='flex'>
                        <ToastContainer
                            style={{ marginTop: '60px', marginRight: '10px' }}
                        />
                    <div className='flex-col w-[70%] h-[100vh]'>
                        <div className='flex px-20 space-x-10 mt-12'>
                            <div className='relative w-7/8'>
                                <div className='absolute inset-0 bg-[#ffffff1c] blur-2xl rounded-lg'></div>
                                <div className='text-center font-semibold font-space-mono px-7 py-3 shadow-inner shadow-[#f4fdff6f] rounded-lg'>
                                    <p className='text-white text-xl'>Total Sensors</p>
                                    <p className='text-white text-2xl mt-2'>3</p>
                                </div>
                            </div>
                            <div className='relative w-7/8'>
                                <div className='absolute inset-0 bg-[#ffffff1c] blur-2xl rounded-lg'></div>
                                <div className='text-center font-semibold font-space-mono px-7 py-3 shadow-inner shadow-[#f4fdff6f] rounded-lg'>
                                    <p className='text-white text-xl'>Active Sensors</p>
                                    <p className='text-white text-2xl mt-2'>1</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-full mt-16'>
                            <div className='flex justify-center'>
                                <div className='w-full'>
                                    <div className='text-center mb-6'>
                                        <FormattedDate />
                                    </div>
                                    <div className='px-10'>
                                        <Chart />
                                    </div>
                                    <div className='flex items-center justify-start mt-12 px-20 font-space-mono'>
                                        <p className='text-white'>Fetch Data &nbsp;</p>
                                        <ThemeProvider theme={theme}>
                                            <Button
                                                variant="contained"
                                                color="success"
                                                onClick={handleClick}
                                                style={{
                                                    font: 'space-mono',
                                                    width: '100px',
                                                    backgroundColor: isToggled ? '#9d0063' : '#9e9e9e25',
                                                    color: isToggled ? 'white' : '#b3b3b3',
                                                }}
                                            >
                                                {isToggled ? 'Enabled' : 'Disabled'}
                                            </Button>
                                        </ThemeProvider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[5%]'></div>
                    <div className='w-[30%] h-[100vh]'>
                        <div className='mt-12'>
                            <CLI command={commands} />
                        </div>

                    </div>
                </div>
            </div>
        </div >
        </>
    );
};

export default MainPage;
