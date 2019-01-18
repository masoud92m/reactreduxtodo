import React, { Component } from 'react';

import Input from './Input/Input';

class Form extends Component {
    render() {
        return (
            <div>
                <Input />
                <button>Add</button>
            </div>
        );
    }
}

export default Form;