import React, { Component } from 'react';

import './Form.css'

class Form extends Component {
    render() {
        return (
            <div className='row form-box'>
                <div className='col-md-12'>
                    <div className="card bg-light text-dark">
                        <div className="card-body">
                        <h5 className="card-title">Add New Task</h5>
                            <div className="input-group mb-3" >
                                <input type="text" className="form-control" placeholder="New Task" />
                                <div className="input-group-append">
                                    <button className="btn btn-success" type="submit">Add Task</button>
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