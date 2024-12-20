import React, {useState} from 'react';
import Profile from './profile';
import Account from './account';
import { se } from 'date-fns/locale';

const Info = () => {
    const [show, setShow] = useState('Profile');

    function changeSection(){
        if(show === 'Profile'){
            return <Profile/>;
        }else if(show === 'Account'){
            return <Account/>;
        }
    }

    return (
        <div className="w-full h-[725px] flex flex-col font-sans antialiased">

            <div className='w-full h-auto flex flex-row justify-between items-center px-4'>
                {/* searching section */}
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

                {/* button section */}
                <div className='flex flex-row'>
                    {/* profile button */}
                    <button id='profile' class={`w-[100px] h-[50px] text-[14pt] flex flex-row justify-center items-center  rounded-l border-[2px] border-orange-500 border-solid hover:border-[2px] ${show === 'Profile' ? 'bg-white text-orange-500':'bg-orange-500 text-white'}`}
                      onClick={()=>{setShow('Profile')}}
                    >
                        Profile
                    </button>
                    {/* bank account */}
                    <button id='bank_account' class={`w-[160px] h-[50px] text-[14pt] flex flex-row justify-center items-center  rounded-r border-[2px] border-orange-500 border-solid hover:border-[2px] ${show === 'Account' ? 'bg-white text-orange-500':'bg-orange-500 text-white'} `}
                    onClick={()=>{setShow('Account')}}
                    >
                        Bank Account
                    </button>
                </div>
            </div>

            <div className='w-full h-auto flex items-center justify-center'>
                {changeSection()}
            </div>
        </div>
    );
};

export default Info;