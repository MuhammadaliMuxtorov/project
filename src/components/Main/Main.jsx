import React from 'react'
import "./Main.css"
import Correct from '../../assests/Group 4.png'
function Main() {
  return (
    <div>
        <main className='bg-zinc-200 w-[500px] h-[560px] ml-[560px] rounded-lg mt-6'>
            <h1 className='text-center text-2xl mt-6 pt-2'>Зарегистрируйтесь в системе</h1>
            <div className="input flex flex-col-reverse rounded">
            <input type="text" className='outline-none ml-14 p-3 mt-9 rounded w-96' placeholder='Ваш номер телефона' />
            <input type="text" className='outline-none ml-14 p-3 mt-9 rounded w-96' placeholder='Пароль' />
            <input type="text" className='outline-none ml-14 p-3 mt-9 rounded w-96' placeholder='Подтвердить пароль' />
            </div>
            <div className="img flex w-96 ml-14 h-5 mt-9">
                <img src={Correct} alt=""  className='cursor-pointer mt-1 ml-1 pr-2'/>
                <p>
                Я согласен с политикой конфиденциальности и условиями пользование.
                </p>
            </div>
            <button className='w-96 ml-14 mt-14 h-9 text-slate-50 bg-blue-600 rounded border-none'>Войти</button>
            <h3 className='text-sky-700 mt-9 ml-14 text-lg cursor-pointer'>Уже есть аккаунт</h3>
        </main>
    </div>
  )
}

export default Main