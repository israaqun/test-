import React from 'react'

export default function Input({id,title,type,name,handelData,customeClasses ,errors}) {
  return (
    <div   className="mb-3">
<label  htmlFor={'id'} className='form-label'>
{title}
    </label>

                            <input type={type} name={name} className={`form-control ${customeClasses}` } id={id} onChange={handelData} />
                            {errors[name] && <p className='text-danger'> {errors[name]} </p>} 
                       
    </div>
  )
}
