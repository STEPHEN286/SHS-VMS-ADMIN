import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Table = ({ headers, data, onEdit, onDelete, pagination }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm w-full">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-50">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {cell}
                  </td>
                ))}
                <td className="flex px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a
                    href="f"
                    onClick={() => onEdit(index)}
                    className="text-custom hover:text-indigo-900 mr-3"
                  >
                    <FaEdit className="w-5 h-5" />
                  </a>
                  <a
                    href="f"
                    onClick={() => onDelete(index)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <FaTrashAlt className="w-5 h-5" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pagination && (
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing {pagination.from} to {pagination.to} of {pagination.total} entries
          </div>
          <div className="flex space-x-3">
            <button className="px-3 py-1 border rounded text-sm">Previous</button>
            <button className="px-3 py-1 bg-custom text-white rounded text-sm">{pagination.current}</button>
            <button className="px-3 py-1 border rounded text-sm">Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
