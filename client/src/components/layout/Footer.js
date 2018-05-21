import React from 'react'

export default () => {
    return (
        <footer className="footer navbar-fixed-bottom mt-5 p-3 text-center nav-style">
            <div className="container">
            <span className="nav-text">Copyright &copy; {new Date().getFullYear()} Gatherology</span>
            </div>
        </footer>
    )
}