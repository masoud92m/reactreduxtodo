import React, { Component } from 'react';

import Input from './Input/Input';

class Form extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <Input />
                    <button>Add</button>
                </div>
            </div>
        );
    }
}

export default Form;