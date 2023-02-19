import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <>
                <div className="text-center">
                    <div className="spinner-grow text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        )
    }
}