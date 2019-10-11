import React, { Component } from 'react'
import { Button } from 'reactstrap';
export default class Landing extends Component {
    constuctor() {

        this.goToDatabase = this.goToDatabase.bind(this);

    }

    goToDatabase = () => {
        this.props.history.push(`/Database`);
    }

    render() {
        return (
            <div>
                <Button onClick={this.goToDatabase}> Go To database</Button>
            </div>
        )
    }
}
