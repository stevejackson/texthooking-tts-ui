import React from 'react';

// Define the props interface
interface MyComponentProps {
    name: string;
}

// Functional component with props type
const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
    return (
        <div>
            <h1>{name}</h1>
        </div>

);
};

export default MyComponent;