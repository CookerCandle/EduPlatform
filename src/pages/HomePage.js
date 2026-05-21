import React from "react";
import News from "../components/News";

class HomePage extends React.Component {
    render() {
        return(
            <div className="container">
                <h2>Новости Университета</h2>
                <News />
            </div>
        )
    }
}

export default HomePage