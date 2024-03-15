
const ComponetB = ({counter, setCounter}) =>{
  return (
    <div>
      B

      <span>
        ({counter})
      </span>
      <button type="button" onClick={()=>setCounter(counter+1)}>Cambiar A y B </button>
    </div>
  )
}

export default ComponetB
