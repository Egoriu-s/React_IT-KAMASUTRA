import React from 'react';

export const required = value => {
    if (value) {
        return undefined;
    }
    return 'Error';
};

// export const maxLengthThunkCreator = (maxLength) => {
//     return (value) => {
//         if (value && value.length > maxLength) {
//             return `Max length ${maxLength} simbols`;
//         }
//         return undefined;
//     }
// };

export const maxLengthThunkCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) {
        return `Max length ${maxLength} simbols`;
    }
    return undefined;
};

export const minLengthThunkCreator = (minLength) => (value) => {
    if (value && value.length < minLength) {
        return `Min length ${minLength} simbols`;
    }
    return undefined;
};
