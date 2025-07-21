// import { usePage, Link } from '@inertiajs/react';

// export default function Navbar() {
//   const { auth } = usePage().props;

//   return (
//     <div className="bg-white p-4 border-b flex justify-between items-center">
//       <div className="text-lg font-semibold">Dashboard</div>
//       <div className="flex items-center gap-4">
//         <span className="text-sm">Hi, {auth.user.name}</span>
//         <Link href={route('logout')} method="post" as="button" className="text-red-600 text-sm">Logout</Link>
//       </div>
//     </div>
//   );
// }



import { Bell } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Navbar({ onToggleSidebar }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b shadow-sm flex items-center justify-between px-4 h-16">
      <div className="flex items-center space-x-4">
      </div>

      <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
        <Bell className="text-gray-500 cursor-pointer" />

        {/* Avatar */}
        <img
          onClick={() => setDropdownOpen(!dropdownOpen)}
          src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
          alt="user"
          className="w-8 h-8 rounded-full cursor-pointer"
        />

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 top-12 w-40 bg-white rounded shadow border z-50">
            <a
              href="/profile"
              className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
            >
              Profil
            </a>
            <a
              href="/logout"
              className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
}