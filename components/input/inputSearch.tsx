import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
type Props = {
  onChange: any;
  onSubmit: any;
}

const InputSearch = ({ onChange, onSubmit }: Props) => {
  const [value, setValue] = useState()
  return (
    <div className='border rounded-lg border-purple-light flex h-8 gap-3 overflow-hidden'>
      <div className='bg-purple-light text-white rounded-md px-2 flex items-center justify-center cursor-pointer' onClick={() => onSubmit(value)}>
        <FiSearch size={20} />
      </div>
      <input type="text" placeholder='' onChange={(e: any) => setValue(e.target.value)} onKeyDown ={() => onSubmit(value)}/>
    </div>
  )
}

export default InputSearch