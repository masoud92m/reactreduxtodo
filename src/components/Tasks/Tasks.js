import React, { Component } from 'react';

import Task from './Task/Task';

class Tasks extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <Task />
                    <Task />
                    <Task />
                </div>
            </div>
        );
    }
}

export default Tasks;