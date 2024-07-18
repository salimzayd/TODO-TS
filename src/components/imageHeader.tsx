
const ImageHeader = () => {
  return (
    <div className="flex items-center mb-8">
        <img 
        className="w-28 h-28 object-contain" 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/180px-React-icon.svg.png' alt=''/> 
        <span className="mx-4 "> + </span> 
        <img
                className="w-28 h-28 object-contain" 
                src='https://www.svgrepo.com/show/374144/typescript.svg' alt=''/>
    </div>
  )
}

export default ImageHeader