import React, { Component } from 'react'

export default class WelcomeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }
    
    render() {
        if (this.state.modal) {
            return (
                <div>
                    <div className="modal" tabIndex="-1" role="dialog" style={{display:"block"}}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button onClick={() => {
                                    this.setState({modal: false})
                                }} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => {
                                    this.setState({modal: false})
                                }} type="button" className="btn btn-primary">Ok</button>
                                <button onClick={() => {
                                    this.setState({modal: false})
                                }} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }  

    componentDidMount () {
        this.setState({modal: true})    
    }
}
