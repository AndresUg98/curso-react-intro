import React from 'react'
import './TodoForm.css'
function TodoForm() {
  return (
    <form className='TodoForm-contianer'>
        <label>Escribe tu nuevo TODO</label>
        <textarea placeholder='Jugar Xenoblade'>
            
        </textarea>

        <div className='TodoForm-buttonContainer'>
        <button className='TodoForm-button TodoForm-button--add'>Agregar Todo</button>
        <button className='TodoForm-button TodoForm-button--cancel'> Cancelar</button>
        </div>

    </form>
  )
}

export {TodoForm}