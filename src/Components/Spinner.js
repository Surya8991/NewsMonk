import React from 'react'

const Spinner =()=>{
        return (
            <>
            {/* Spinner Component */}
                <div className="text-center">
                    <div className="spinner-grow text-success" role="status">
                        <span className="visually-hidden my-3">Loading...</span>
                    </div>
                </div>
            </>
        )
    }
export default Spinner;