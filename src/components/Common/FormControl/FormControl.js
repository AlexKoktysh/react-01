import React from 'react';
import styles from './FormControl.module.css'

export const Textarea = ({input, meta, ...props}) => {

const hasError = meta.touched && meta.error
    
    return (
        <div className={hasError ? styles.error : ''}>
            {/* <div className={hasError ? styles.form : ''} > */}
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}