import React from 'react';
import styles from './FormControl.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error
    debugger
    return (
        <div className={hasError ? styles.error : ''}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    const {input, meta, child, ...restprops} = props
    return (
        <FormControl {...props}><textarea {...input} {...restprops} /></FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restprops} = props
    debugger
    return (
        <FormControl {...props}><input {...input} {...restprops} /></FormControl>
    )
}