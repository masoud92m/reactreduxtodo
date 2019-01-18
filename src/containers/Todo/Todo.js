import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Form from '../../components/Form/Form';
import Tasks from '../../components/Tasks/Tasks';

class Todo extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    todo
                    <Form />
                    <Tasks />
                </div>
            </div>
        );
    }
}

export default Todo;