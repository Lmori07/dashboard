import React from 'react';
import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* Left */}
            <div className="w-full lg:w-2/3 flex flex-col gap-7">
                {/* User Card */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="Student" />
                    <UserCard type="Teacher" />
                    <UserCard type="Parent" />
                    <UserCard type="Staff" />
                </div>
                {/* Middle Charts*/}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* Count Charts */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart />
                    </div>
                    {/* Attendance Chart */}
                    <div className="w-full lg:w-2/3 h-[450px]"></div>
                </div>
                {/* Bottom Charts */}
                <div>

                </div>
            </div>
            {/* Right */}
            <div className="w-full lg:w-1/3"></div>
        </div>
    );
};

export default AdminPage;