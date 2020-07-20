import React from "react";

export const Input = ({label, error, register, ...rest}) => {
    let containerClass = "form-group";
    let inputClass = "form-control";
    if (error) {
        containerClass += " has-danger";
        inputClass += " is-invalid";
    }
    
    let fieldId = label.replace(/[\W_]+/g, "-").toLowerCase()

    return (
        <div className={containerClass}>
            <label className="form-control-label" htmlFor={fieldId}>{label+":"}</label>
            <input autoComplete="off" ref={register} type="text" className={inputClass} id={fieldId} {...rest} />
            { error && (
                <div className="invalid-feedback">{error.message}</div>
            )}
        </div>
    );
}
