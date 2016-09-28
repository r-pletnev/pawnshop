import React from 'react'

export const addonField = ({input, label, type, meta: {touched, error}, id, className, func}) => (
  <div className='form-group'>
    <div className='input-group'>
      <input {...input} id={id} className='form-control' placeholder={label} />
      <div className='input-group-btn'>
        <button type='button' className='btn btn-warning' onClick={func}>Получить код</button>
      </div>
    </div>
    {touched && error && <div className='text-warning'><i>{error}</i></div>}
  </div>
)
