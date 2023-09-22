import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
  
        <div >
           <h1 className="ml-4 p-3 text-4xl font-medium">This is a dashboard layout</h1>
            <div className="flex">
            <div className="w-[20%] shadow-lg ml-4 p-5 mt-3 bg-red-200">
                <ul>
                    <li>
                       <Link to= '/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                       <Link to= '/dashboard/profile'>Profile</Link>
                    </li>
                    <li>
                       <Link to= '/dashboard/editProfile'>Edit Profile</Link>
                    </li>
                </ul>
            </div>
            <div className=" ml-4 mt-6"> <Outlet></Outlet></div>
            </div>
        </div>
    );
};

export default DashboardLayout;