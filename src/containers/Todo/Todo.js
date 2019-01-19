import React, { Component } from 'react';

import Form from '../../components/Form/Form';
import Tasks from '../../components/Tasks/Tasks';

class Todo extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <h2 className="font-weight-bold">ReactRedux Todo</h2>
                    <Form />
                    <Tasks />
                </div>
            </div>
        );
    }
}

export default Todo;