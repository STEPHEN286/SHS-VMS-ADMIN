import React from "react";
import { Link } from "react-router-dom";


const TABS = [
    { name:"Dashboard", url:"/" },
    { name:"Manage Candidates", url:"/manage-candidates" },
    { name:"Manage Voters", url:"/manage-voters" },
    { name:"Manage Positions", url:"/manage-positions" },
    { name:"Manage Departments", url:"/manage-departments" },
    { name:"Results", url:"/results" },
    { name:"Settings", url:"/settings" },
    ];
const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white fixed h-full">
      <div className="p-4">
        <img
          src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
          alt="Logo"
          className="h-8"
        />
      </div>
      <nav className="mt-8">
       {TABS.map((tab, index) => (
       < Link to={tab.url}>
        <span className="flex items-center px-4 py-3 bg-custom text-white">
             {tab.name}
        </span>
        </Link>
       ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
