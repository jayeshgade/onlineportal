import React, {useState} from 'react';
import axios from 'axios';
import '../components/design2d3d.css';

function Design2d3d() {

    return (
        <>
        <div className='container text-center'>
            <div className='row'>
                <div className='col-6 bg-success'>
                    <h1>2D Design</h1><br/>
                    <div className='height py-5'>
                    2D AutoCAD DESIGN<br/>
Rs. 8per sq. ft. *<br/>
Rs. 1,000/- Visit Fees *<br/>
2 Revisions<br/>
3 Days Delivery<br/>
                    </div>
                </div>
                <div className='col-6 bg-light'>
                <h1>3D Design</h1><br/>
                <div className='height py-5'>
                    2D AutoCAD DESIGN<br/>
Rs. 8per sq. ft. *<br/>
Rs. 1,000/- Visit Fees *<br/>
2 Revisions<br/>
3 Days Delivery<br/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Design2d3d;