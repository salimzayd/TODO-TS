import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageHeader from './components/imageHeader'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { items } from './types/utils'
import { ItemList } from './components/ItemList'


function App() {
  const [items,setItems] = useState<items[]>([])
  const [inputvalue,setInputValue] = useState<string>('')

  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault()
    setItems((prev) => [...prev, {title:inputvalue , id:Date.now().toString()}]);
    setInputValue('')
  }
  return (
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      <ImageHeader />

      <div className='w-[350px]'>
        <form className='mb-5' onSubmit={handleSubmit}>
          <Input inputvalue={inputvalue} setInputValue={setInputValue}/>
          <Button className='w-full bg-gray-700 p-2' title='Add'></Button>
        </form>
        <div className=' h-52 overflow-y-auto'>
          <ItemList items={items} setItems={setItems} />
        </div>
      </div>
    </div>
  )
}

export default App
