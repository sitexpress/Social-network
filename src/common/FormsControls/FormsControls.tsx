import React from 'react';
import s from './FormsControls.module.css'


const FormControl: React.FC<any> = ({input, meta, child, element, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.form_control + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}

export const Textarea: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
};

export const Input: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>
};

// export const Textarea:React.FC<any> = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={s.form_control + ' ' + (hasError ? s.error : '')}>
//             <div>
//                 <textarea {...input} {...props}/>
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     );
// };


// export const Input:React.FC<any> = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={s.form_control + ' ' + (hasError ? s.error : '')}>
//             <div>
//                 <input {...input} {...props}/>
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     );
// };


