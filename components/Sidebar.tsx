import {NextPage} from 'next'
import {useRouter} from 'next/router'
import {useState} from 'react'
import Link from 'next/link'
import GoogleLogin from 'react-google-login'
import {AiOutlineMenu, AiFillHome} from 'react-icons/ai'
import {ImCancelCircle} from 'react-icons/im'


const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center' +
        ' xl:justify-start cursor-pointer font-semibold text-[#F519997] '
    return (
        <div>
            <div onClick={() => setShowSidebar(prev => !prev)}
                 className='block xl:hidden m-2 ml-4 mt-3 text-xl'>
                {
                    showSidebar ? <ImCancelCircle/> : <AiOutlineMenu/>
                }
            </div>
            {
                showSidebar && (
                    <div className='xl:w-400 w-20 flex flex-col
                    justify-start mb-10 border-r-2 border-gray-100
                    xl:border-0 p-3'>
                        <div className='xl:border-b-2 border-gray-200
                        xl:pd-4'>
                            <Link href='/'>
                                <div className={normalLink}>
                                    <p className='text-2xl'>
                                        <AiFillHome/>
                                    </p>
                                    <span className='text-xl
                                    hidden xl:block'>for you</span>
                                </div>
                            </Link>

                        </div>
                    </div>
                )
            }
        </div>
    );

}

export default Sidebar;