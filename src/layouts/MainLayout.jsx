
import { Footer } from 'flowbite-react';
import { NavLink, Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>

            <section className='flex justify-between bg-purple-200 px-4 shadow-md py-5'>
                <div>
                    <h1 className='text-2xl font-bold text-purple-700'>Amazon</h1>
                </div>
                <nav>
                    <ul className='flex gap-4'>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-purple-300 p-2 rounded-lg" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-purple-300 p-2 rounded-lg" : ""
                            }
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-purple-300 p-1    rounded-lg" : ""
                            }
                        >
                            Dashboard
                        </NavLink>
                    </ul>
                </nav>
            </section>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;