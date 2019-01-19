import React, { Component } from 'react';

import './Form.css'

class Form extends Component {
    render() {
        return (
            <div className='row form-box'>
                <div className='col-md-12'>
                    <div class="card bg-light text-dark">
                        <div class="card-body">
                        <h5 class="card-title">Add New Task</h5>
                            <div class="input-group mb-3" >
                                <input type="text" class="form-control" placeholder="New Task" />
                                <div class="input-group-append">
                                    <button class="btn btn-success" type="submit">Add Task</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;