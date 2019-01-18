import React, { Component } from 'react';

import Form from '../../components/Form/Form';
import Tasks from '../../components/Tasks/Tasks';

class Todo extends Component {
    render(){
        return(
            <div>
                todo
                <Form />
                <Tasks />
            </div>
        );
    }
}

export default Todo;