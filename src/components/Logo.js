import React from 'react'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div>
            <Link to="/">
                <h1 className="logo">
                    <span>Editora MaujorTec</span>
                </h1>
            </Link>
        </div>
    );
};
export default Logo;