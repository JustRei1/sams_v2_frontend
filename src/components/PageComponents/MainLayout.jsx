import { Outlet } from 'react-router'

// Components
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar'

const MainLayout = () => {
    return(
        <div className="flex h-screen w-full overflow-hidden">
            <Sidebar/>
            <div className="flex flex-1 flex-col">
                <Navbar/>
                <main className="overflow-auto">
                    {/* Outlet contains all children content/pages */}
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}

export default MainLayout