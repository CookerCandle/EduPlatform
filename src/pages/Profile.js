import React from "react";
import StudentProfile from "../components/StudentProfile";

class Profile extends React.Component {
    render() {
        return(
            <div>
                <h2>Профиль Студента</h2>
                <StudentProfile />
            </div>
        )
    }
}

export default Profile