/** @format */

import React, { ChangeEvent } from "react";
import './style.css';

export interface InputBoxProps{
    label : string;
    type : 'text' | 'password';
    value : string;
    placeholder : string;
    onChangeHandler : (event: ChangeEvent<HTMLInputElement>) => void;
    buttonTitle ?: string;
    idButtonStatus ?: boolean;
}

export default function InputBox({label, type, value, placeholder, onChangeHandler, buttonTitle, idButtonStatus}:InputBoxProps) {

    const buttonClass = idButtonStatus ? 'input-primary-button' : 'input-disable-button';
    
    return (
        <div className="input-box">
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input
                    className="input"
                    type= {type}
                    placeholder= {placeholder}
                    onChange={onChangeHandler}
                    value={value}
                />
                { buttonTitle &&
                <div className={buttonClass}>
                    {buttonTitle}
                </div>
                }
            </div>
            <div className="input-message"></div>
        </div>
    );
}
