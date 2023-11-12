import React from 'react';

const Button = ({children}) => {
    return (
        <>
            <button className='btn btn-error'>{children}</button>
        </>
    );
};

export default Button;