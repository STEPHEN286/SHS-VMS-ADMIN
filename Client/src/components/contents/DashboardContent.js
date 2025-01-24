import React from 'react'
import { FaUsers, FaUserCheck, FaClipboardList, FaBuilding } from 'react-icons/fa';
import { MdCheckCircle, MdAdd, MdNoteAdd, MdSettings, MdNotifications } from 'react-icons/md';
export default function DashboardContent() {
  return (
   <>
     <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-custom bg-opacity-10 rounded-lg">
              <FaUsers className="text-custom text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-gray-400 text-sm">Total Candidates</h3>
              <p className="text-2xl font-semibold text-white">24</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-green-900 rounded-lg">
              <FaUserCheck className="text-green-400 text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-gray-400 text-sm">Total Voters</h3>
              <p className="text-2xl font-semibold text-white">1,234</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-900 rounded-lg">
              <FaClipboardList className="text-yellow-400 text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-gray-400 text-sm">Total Positions</h3>
              <p className="text-2xl font-semibold text-white">8</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-purple-900 rounded-lg">
              <FaBuilding className="text-purple-400 text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-gray-400 text-sm">Total Departments</h3>
              <p className="text-2xl font-semibold text-white">12</p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-sm col-span-2">
          <h2 className="text-lg font-semibold text-white mb-4">Voter Turnout</h2>
          <div id="voterTurnoutChart" style={{ height: '300px' }}>
            <img src="https://www.dia.govt.nz/diawebsite.nsf/Files/Local-Elections/$file/Voter-turnout-2019.jpg" alt="" />
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-white mb-4">Department Participation</h2>
          <div id="departmentChart" style={{ height: '300px' }}>
            <img src='https://static.vecteezy.com/system/resources/thumbnails/021/114/010/small_2x/3d-pie-charts-and-diagram-icons-charts-and-graphs-pie-line-candlestick-chart-png.png' alt='chart' />
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-sm col-span-2">
          <h2 className="text-lg font-semibold text-white mb-4">Recent Activities</h2>
          <div className="space-y-4">
            <div className="flex items-center py-3 border-b border-gray-700">
              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                <MdCheckCircle className="text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-300">New vote cast by John Doe</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center py-3 border-b border-gray-700">
              <div className="w-8 h-8 bg-green-900 rounded-full flex items-center justify-center">
                <MdAdd className="text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-300">New candidate registered: Sarah Smith</p>
                <p className="text-xs text-gray-500">15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center py-3">
              <div className="w-8 h-8 bg-yellow-900 rounded-full flex items-center justify-center">
                <MdNotifications className="text-yellow-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-300">Election reminder sent to all voters</p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full bg-custom text-white py-2 px-4 rounded-lg !rounded-button flex items-center justify-center">
              <MdAdd className="mr-2" />
              Start New Election
            </button>
            <button className="w-full bg-gray-700 text-gray-300 py-2 px-4 rounded-lg !rounded-button flex items-center justify-center">
              <MdNoteAdd className="mr-2" />
              Generate Reports
            </button>
            <button className="w-full bg-gray-700 text-gray-300 py-2 px-4 rounded-lg !rounded-button flex items-center justify-center">
              <MdSettings className="mr-2" />
              System Status
            </button>
          </div>
        </div>
      </div>
   </>

  )
}
