import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                    <hr />
                    <a rel="noopener noreferrer" href="https://github.com/masoud92m/reactreduxtodo" target="_blank" className="text-muted"><FontAwesomeIcon icon="copyright" /> TIme to Hack</a>
                </div>
            </div>
        );
    }
}

export default Todo;