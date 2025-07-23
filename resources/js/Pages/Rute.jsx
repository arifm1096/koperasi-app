import { useState } from 'react';
import Sidebar from '@/Components/Sidebar';
import Navbar from '@/Components/Navbar';
import Button from '@/Components/PrimaryButton';

export default function RuteLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar collapsed={sidebarCollapsed} />
      <div className="flex-1 flex flex-col">
        <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <main className="p-6 bg-gray-100 flex-1 overflow-auto">
          <h1 className="text-2xl font-bold">Data Rute</h1>
          <div className="mx-auto max-w-12xl px-4 py-6 sm:px-6 lg:px-10">
            <section className="bg-white shadow rounded-lg mx-auto p-6">
              <p>Ini adalah halaman untuk mengelola data rute.</p>
              {/* Tambahkan komponen atau konten lainnya di sini */}
              <Button className="mt-4 bg-blue-500 text-white"> Tambah Rute</Button>
              <table className="min-w-full mt-4">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b">ID</th>
                    <th className="px-4 py-2 border-b">Nama Rute</th>
                    <th className="px-4 py-2 border-b">Deskripsi</th>
                    <th className="px-4 py-2 border-b">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Contoh data rute */}
                  <tr>
                    <td className="px-4 py-2 border-b">1</td>
                    <td className="px-4 py-2 border-b">Rute A</td>
                    <td className="px-4 py-2 border-b">Deskripsi Rute A</td>
                    <td className="px-4 py-2 border-b">
                      <button className="text-blue-500 hover:underline">Edit</button>
                      <button className="text-red-500 hover:underline ml-2">Hapus</button>
                    </td>
                  </tr>
                  {/* Tambahkan baris lainnya sesuai kebutuhan */}
                </tbody>
              </table>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}