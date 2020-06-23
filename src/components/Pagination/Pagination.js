import React from 'react';
import {FiArrowLeft, FiArrowRight} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Pagination.css';

function Pagination () {

    return (
        <div className="pagination">
            <Link className="link_button" to="/">
                <FiArrowLeft size={100} color="#000"/> 
            </Link>

            <Link className="link_button" to="/2">
                <FiArrowRight size={100} color="#000"/> 
            </Link>
        </div>
    )
}

export default Pagination;