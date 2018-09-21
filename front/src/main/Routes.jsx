import React, { Component } from "react";
import { Redirect } from "react-router";
import { Route, Switch } from "react-router-dom";
import OwnerForm from "../components/owner/ownerForm";
import OwnerList from "../components/owner/ownerList";
import OwnerEditForm from "../components/owner/ownerEditForm";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/register" component={OwnerForm} />
                <Route path="/list" component={OwnerList} />
                <Route path="/edit/:id" component={OwnerEditForm} />
                <Redirect from="*" to="/list" />
            </Switch>
        );
    }
}

export default Routes;
