import React from 'react'

interface Props {
    type: string
    name: string
    value?: string
    onChange: (e: any) => void  
    defaultValue?: string
    labelText?: string
    required?: boolean
}

const FormRow = ({ name,labelText,defaultValue,...props }: Props) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className='form-label'>{labelText}</label>
            <input {...props} defaultValue={defaultValue} className='form-input'/>
        </div>
    )
}

export default FormRow