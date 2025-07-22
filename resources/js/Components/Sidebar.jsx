import { Link, usePage } from '@inertiajs/react';
import {
  Home,
  Users,
  Folder,
  ChevronDown,
  ChevronRight,
  FileText,
  LogOut,
  Menu,
} from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const { auth } = usePage().props;
  const [openMaster, setOpenMaster] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div
      className={`flex flex-col ${
        collapsed ? 'w-20' : 'w-64'
      } h-screen bg-orange-600 text-white transition-all duration-300 p-4 rounded-tr-2xl rounded-br-2xl`}
    >
      {/* Toggle Button */}
      <div className="flex items-center justify-between mb-6 px-2">
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          <Menu size={24} />
        </button>
        {!collapsed && <span className="text-xl font-bold tracking-wide">Ticket</span>}
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-1">
        <SidebarLink href="/dashboard" icon={<Home size={20} />} label="Dashboard" collapsed={collapsed} />

        {/* Master submenu */}
        <div>
          <button
            onClick={() => setOpenMaster(!openMaster)}
            className={`full flex items-center justify-between px-2 py-2 hover:bg-orange-400  transition ${
              collapsed ? 'justify-center' : ''
            }`}
          >
            <span className="flex items-center gap-2 text-md">
              <Folder size={20} />
              {!collapsed && 'Master Data'}
            </span>
            {!collapsed &&
              (openMaster ? <ChevronDown size={18} /> : <ChevronRight size={18} />)}
          </button>

          {!collapsed && openMaster && (
            <div className="ml-6 mt-1 space-y-1 text-md">
              <SidebarLink href="/karyawan" label="Data Tarif" collapsed={false} />
              <SidebarLink href="/pinjaman" label="Data Maping" collapsed={false} />
              <SidebarLink href="/rute" label="Data Rute" collapsed={false} />
            </div>
          )}
        </div>

        <SidebarLink href="/laporan" icon={<FileText size={20} />} label="Laporan" collapsed={collapsed} />
      </nav>

      {/* User & Logout */}
      <div className="mt-auto pt-4">
        <div className="flex items-center space-x-3 px-2">
          <img
            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          {!collapsed && (
            <span className="text-sm font-semibold">{auth?.user?.name || 'Tom Cook'}</span>
          )}
        </div>

        <Link
          href={route('logout')}
          method="post"
          as="button"
          className={`flex items-center gap-4 px-4 py-2 hover:bg-orange-400 transition-colors duration-200 ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <LogOut size={16} />
          {!collapsed && 'Logout'}
        </Link>
      </div>
    </div>
  );
}

function SidebarLink({ href, label, icon, collapsed }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-2 py-2 rounded hover:bg-orange-400 transition text-md ${
        collapsed ? 'justify-center' : ''
      }`}
    >
      {icon}
      {!collapsed && label}
    </Link>
  );
}
