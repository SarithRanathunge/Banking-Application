import React from 'react';

const Deposit = () => {
    return (
        <div className="w-full h-[725px] flex flex-col font-sans antialiased">

            <div className='w-full h-auto flex justify-center items-center'>
                <div className='w-[500px] h-[50px] flex flex-row px-5 my-3 bg-transparent border-[3.2px] pl-4 rounded-full border-orange-500 bg-none outline-transparent'>
                    <input className='w-full text-[14pt] outline-none rounded-lg'
                      type="text"
                      placeholder='Search'
                    />
                    <button>
                        <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                            <path stroke="none" d="M0 0h24v24H0z"/>  
                            <circle cx="10" cy="10" r="7" />  
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="w-full h-[650px] flex flex-col font-sans antialiased"> 
                <div className='w-full h-auto flex flex-row justify-between items-end px-[110px] mt-3.5'>
                    <div className='w-auto h-auto flex flex-col'>
                        <div className='w-auto h-auto flex flex-col my-2 '>
                            <div className='w-[480px] h-auto flex flex-row justify-between items-center'>
                              <label className='text-[15pt] font-medium'>Account No.</label>
                              <p className='text-[10pt] text-red-500'>Error Showing Section</p>
                            </div>
                            <input className='w-[480px] h-[50px] text-[14pt] mt-1 outline-none rounded border-[3.2px] pl-2 border-orange-500 bg-none outline-transparent'
                                  type="text"
                                  placeholder='Account No.'
                            />
                        </div>
                        <div className='w-auto h-auto flex flex-col my-2'>
                            <div className='w-[480px] h-auto flex flex-row justify-between items-center'>
                              <label className='text-[15pt] font-medium'>Name</label>
                              <p className='text-[10pt] text-red-500'>Error Showing Section</p>
                            </div>
                            <input className='w-[480px] h-[50px] text-[14pt] mt-1 outline-none rounded border-[3.2px] pl-2 border-orange-500 bg-none outline-transparent'
                                  type="text"
                                  placeholder='Name'
                            />
                        </div>
                        <div className='w-auto h-auto flex flex-col my-2'>
                            <div className='w-[480px] h-auto flex flex-row justify-between items-center'>
                              <label className='text-[15pt] font-medium'>Balance</label>
                              <p className='text-[10pt] text-red-500'>Error Showing Section</p>
                            </div>
                            <input className='w-[480px] h-[50px] text-[14pt] mt-1 outline-none rounded border-[3.2px] pl-2 border-orange-500 bg-none outline-transparent'
                                  type="text"
                                  placeholder='Balance'
                            />
                        </div>
                    </div>
                    <div className='w-auto h-auto flex flex-col'>
                        <div className='w-auto h-auto flex flex-col my-2'>
                            <div className='w-[480px] h-auto flex flex-row justify-between items-center'>
                              <label className='text-[15pt] font-medium'>NIC</label>
                              <p className='text-[10pt] text-red-500'>Error Showing Section</p>
                            </div>
                            <input className='w-[480px] h-[50px] text-[14pt] mt-1 outline-none rounded border-[3.2px] pl-2 border-orange-500 bg-none outline-transparent'
                                  type="text"
                                  placeholder='NIC'
                            />
                        </div>
                        <div className='w-auto h-auto flex flex-col my-2'>
                            <div className='w-[480px] h-auto flex flex-row justify-between items-center'>
                              <label className='text-[15pt] font-medium'>Account Type</label>
                              <p className='text-[10pt] text-red-500'>Error Showing Section</p>
                            </div>
                            <input className='w-[480px] h-[50px] text-[14pt] mt-1 outline-none rounded border-[3.2px] pl-2 border-orange-500 bg-none outline-transparent'
                                  type="text"
                                  placeholder='Account Type'
                            />
                        </div>
                    </div>
                </div>
    
                <div className='w-full h-auto flex items-center justify-center'>
                    <div className='w-auto h-auto flex flex-col my-2'>
                        <div className='w-[1060px] h-auto flex flex-row justify-between items-center'>
                          <label className='text-[15pt] font-medium'>Signature</label>
                          <p className='text-[10pt] text-red-500'>Error Showing Section</p>
                        </div>
                        <div className='w-[1060px] h-[150px] text-[14pt] mt-1 outline-none rounded border-[3.2px] pl-2 border-orange-500 bg-none outline-transparent'></div>
                    </div>
                </div>
    
                
                <div className='w-full h-auto flex flex-row justify-between items-center my-2 px-[110px]'>
                    <div className='w-auto h-auto flex flex-col my-1'>
                        <label className='text-[15pt] font-medium'>Enter withdraw amount</label>
                        <input className='w-[500px] h-[50px] text-[14pt] mt-1 outline-none rounded border-[3.2px] pl-2 border-orange-500 bg-none outline-transparent'
                              type="text"
                              placeholder='Amount (Rs.)'
                        />
                    </div>
                    <button className='w-[200px] h-[50px] justify-center items-center text-[14pt] mt-8 bg-green-600 text-white rounded border-[2px] border-green-600 border-solid hover:border-[2px] hover:border-green-600 hover:bg-white hover:text-green-600'>
                        Deposit
                    </button>
                </div>
            
            </div>
            
        </div>
    );
};

export default Deposit;