import React from 'react';
import Image from "next/image";

const UserCard = ({type}:{type:string}) => {
    return (
        <div className="rounded-2xl odd:bg-DashHilight2 even:bg-DashHilight p-4 flex-1 min-w-[130px]" >
            <div className="flex justify-between items-center">
                <span className="text-DashTextColor text-[10px] px-2 py-1 rounded-full">2024/25</span>
                <Image src="/more.png" alt="" width={18} height={18}/>
            </div>
            <h1 className="text-DashTextColor text-2xl font-semibold my-4">1,234</h1>
            <h2 className="text-DashTextColor text-sm font-medium">{type}s</h2>
        </div>
    );
};

export default UserCard;