import { items, Reactstate } from "../types/utils"
import { Button } from "./Button"
 
type ItemList={
    items: items[]
    setItems: Reactstate<items[]>
}
export const ItemList = ({items,setItems}:ItemList) => {
    const handleDelete = (id : string) =>{ 
        setItems((prev) => prev.filter((data) => data.id !== id ))
      }
  return (
    items.map(data => (

        <div key={data.id} className='flex justify-between items-center border rounded-sm border-slate-600 pl-2 mb-2 mr-1 py-2'>
        <p>{data.title}</p>
        <Button  title='Delete' onClick={() => handleDelete(data.id)}></Button>
        </div>
      ))
  )
}

export default ItemList