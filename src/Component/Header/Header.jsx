import React from 'react';

const Header = () => {
    return (
        <div className='bg-green-500'>
            <div className=' mx-auto max-w-[1200px] w-full flex justify-between items-center px-3 py-3'>
                <div className=''>
                    <a className='text-2xl text-white font-semibold' href="/title">Update-Article</a>
                </div>
                <ul className='flex gap-3 text-black'>
                    <li><a href="/home">HOME</a></li>
                    <li><a href="/home">HOME</a></li>
                    <li><a href="/home">HOME</a></li>
                </ul>
                <button className='btn'>Get Started</button>
            </div>
        </div>
    );
};

export default Header;