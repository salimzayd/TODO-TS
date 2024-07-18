type Input = {
    inputvalue:string,
    setInputValue:React.Dispatch<React.SetStateAction<string>>
}

export const Input = ({inputvalue,setInputValue}: Input) => {
  return (
    <input type='text' value={inputvalue} 
    className='w-full p-2 rounded-sm mb-2 text-black' 
    onChange={(e) => setInputValue(e.target.value)}/>

  )
}

export default Input