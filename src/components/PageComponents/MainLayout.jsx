import { Outlet, Navigate } from 'react-router-dom'

// Components
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'
import { useAuth } from '../../AuthContext/AuthContext'

const MainLayout = () => {

    const { token } = useAuth()

    return(
        token ?
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
        : <Navigate to={"login"}/>
    );
}

export default MainLayout