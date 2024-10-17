import React, { useState, useEffect } from 'react';
import DataTable from './dataTable';
import { getTransactions } from '../../api';
import { jwtDecode } from 'jwt-decode';

const Transaction = () => {
  // States
  const [transactions, setTransactions] = useState([]);
  const [branchId, setBranchId] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  const fetchTransactions = async () => {
    try {
      const response = await getTransactions(branchId);
      const data = response.data.transactions;
      console.log(data);
      setTransactions(data);
    } catch (error) {
      // Extract detailed error information for better debugging.
      if (error.response) {
        console.log('Error fetching transactions - Server response error:');
      } else {
        console.log('Error fetching transactions - Client error:', error.message);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setBranchId(decodedToken.user.branch_id);
      setEmployeeId(decodedToken.user.employee_id);
    }

    // Fetch transactions when branchId is available
    if (branchId) {
      fetchTransactions();
    }
  }, [branchId]);

  return (
    <div className="w-full h-[700px] flex flex-col font-sans antialiased">
      <div className='w-full h-auto flex flex-row justify-between items-center px-4'>
        <div className='w-[500px] h-[50px] flex flex-row px-5 my-3 bg-transparent border-[3.2px] pl-4 rounded-full border-orange-500 bg-none outline-transparent'>
          <input
            className='w-full text-[14pt] outline-none rounded-lg'
            type="text"
            placeholder='Search'
          />
          <button>
            <svg className="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </button>
        </div>

        <button className='w-[200px] h-[50px] text-[14pt] flex flex-row justify-center items-center text-white bg-orange-500 rounded border-[2px] border-orange-500 border-solid hover:border-[2px] hover:border-orange-500 hover:bg-white hover:text-orange-500'>
          <svg className="h-6 w-6 mr-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>
          Print
        </button>
      </div>

      <div className='w-full h-auto flex items-center justify-center mt-5'>
        {/* Pass transactions, employeeId, and branchId as props */}
        <DataTable transactions={transactions} employeeId={employeeId} branchId={branchId} />
      </div>
    </div>
  );
};

export default Transaction;
