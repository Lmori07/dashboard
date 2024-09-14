"use client";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from "next/image";

const data = [
    {
        name: 'Total',
        count: 100,
        fill: "#FFF5E1",
    },{
        name: 'Girls',
        count: 50,
        fill: "#C80036",
    },
    {
        name: 'Boys',
        count: 50,
        fill: '#FF6969',
    }
];

const CountChart = () => {
    return (
        <div className="bg-DashBckground rounded-xl w-full h-full p-3">
            {/* Chart Title */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Student</h1>
                <Image src="/more.png" alt="" width={18} height={18} />
            </div>
            {/* Chart */}
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={31} data={data}>
                        <RadialBar
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/maleFemale.png" alt="" width={48} height={48} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            {/*Bottom Chart*/}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-DashBckground rounded-full" />
                    <h1 className="font-bold">1,234</h1>
                    <h2 className='text-xs text-DashTextColor'>Boys (55%)</h2>
                </div><div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-DashBckground rounded-full" />
                    <h1 className="font-bold">5,678</h1>
                    <h2 className='text-xs text-DashTextColor'>Girls (45%)</h2>
                </div>
            </div>
        </div>
    );
};

export default CountChart;