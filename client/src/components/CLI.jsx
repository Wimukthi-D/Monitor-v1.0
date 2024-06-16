import React from 'react'

const CLI = ({ command }) => {
    let i = 1;
    return (
        <div className='w-[93%] h-[75vh] bg-[#ffffff12] rounded-xl font-space-mono py-4 px-7' >
            {command.map((cmd, index) => {
                console.log(cmd);
                return (
                    <p key={index} className='text-[#d7d7d7]'>
                        {i++} &nbsp; {cmd}{index}
                    </p>
                );
            })}
        </div>
    )
}

export default CLI
