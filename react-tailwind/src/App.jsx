import { useState } from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {

    return (

        <div className='bg-slate-500 h-full w-full flex flex-col'>
            <h1 className='bg-white rounded-md text-center mt-[40px] ml-[25px] mr-[25px] px-2 py-2 text-3xl font-bold'>Random GIFs</h1>
            <div className='flex flex-col justify-center items-center'>
                <Random />
                <Tag />
            </div>
        </div>
    )
}

export default App
