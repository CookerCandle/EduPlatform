import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
    render() {
        return (
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <h1>Page Not Found - 404</h1>
                    <p>
                        Sorry, the page you are looking for does not exist.{" "}
                        <Link to="/">Go back to home</Link>
                    </p>
                </div>
            </div>
        );
    }
}

export default NotFound;
