import React from 'react'
import "./Header.css"
import { TbWorld } from 'react-icons/tb';
import { AiOutlineArrowDown } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'
import { FiShoppingCart } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import Cart from '../../assests/cart.png'
import Text1 from '../../assests/text.png'
function Header() {
    return (
        <div className=' bg-zinc-200 divide-y divide-solid divide-black'>
            <header className='w-full  flex pt-3 pb-3'>
                <div className="first flex">
                    <div className="flex px-16">
                        <TbWorld className='text-2xl mx-1' /> Русский <AiOutlineArrowDown className='mt-1 text-1xl mx-1' />
                        <h2 className='px-3'>Магазины</h2>
                    </div>
                    <div className="flex px-96">
                    </div>
                </div>
                <p className=''>+998 99 298 61 97 </p>
                <p className='mx-5'>Связаться с нами</p>
            </header>
            
            <div className="flex text-lg pt-4">
                <div className="flex mx-16 pb-3">
                <img src={Cart} alt="" className='h-6'/> 
                <img src={Text1} alt="" className='h-4 px-2 mt-1'/>
                <button className='mx-14 bg-blue-600 rounded flex pr-1 pl-1'><FiMenu className='mt-1 mx-1'/>Каталог</button>
                <div className="search rounded-lg flex bg-slate-50 ">
                <input type="text" className='w-96 ml-52 text-sm  outline-none' placeholder='Поиск товаров' /><BiSearch className='mt-1 text-2xl'/>
                </div>
                </div>
                <div className="flex pb-2">
               <p className='flex ml-5'><AiOutlineHeart className='mt-1 ml-5  mr-2'/>Избранные</p> 
                <p className='flex ml-5'><FiShoppingCart className='mt-1 ml-5 mr-2'/>Корзинка</p>
                <button className='flex pl-1 pr-1 mb-2 ml-6  border-sky-600 text-sky-600'>Войти</button>
                </div>
            </div>
        </div>

    )
}

export default Header