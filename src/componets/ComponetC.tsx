

const  ComponetC = ({counterAB,counterC, setCounter}) => {
  return (
    <div className='card'>
      <span className='span'>
        ({counterC})
      </span>
      <button typeof='button' onClick={()=>setCounter(counterAB+1)}>Cambiar, A,B y C</button>
      <br />
      <br />
      <br />
      <button type='button' onClick={()=>setCounter(1)}>Reset Cards</button>
    </div>
  )
}

export default ComponetC
