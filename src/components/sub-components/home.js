import React from 'react';
import Chart from './chart';
import PieChart from './pieChart';

const Home = () => {
    
    return (
        <div className="w-full h-[725px] flex flex-col font-sans text-[18pt] text-white antialiased">
            <div className='w-full h-1/2 flex flex-row items-center justify-center'>
                <PieChart />
            </div>
            <div className='w-full h-1/2 flex flex-row items-center justify-center'>
                <Chart name="Tansactions"/>
            </div>
        </div>
    );
};

export default Home;