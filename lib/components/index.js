import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class layout extends Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">{window.ClarityReborn.config.teamName}</span>
                    <nav className="mdl-navigation">
                        <Link className="mdl-navigation__link" to="/stories" activeClassName="mdl-navigation__link--current">Stories</Link>
                        <Link className="mdl-navigation__link" to="/pull-requests" activeClassName="mdl-navigation__link--current">Pull Requests</Link>
                        <Link className="mdl-navigation__link" to="/release-schedue" activeClassName="mdl-navigation__link--current">Release Schedule</Link>
                        <Link className="mdl-navigation__link" to="/analytics" activeClassName="mdl-navigation__link--current">Analytics</Link>
                    </nav>
                </div>
                <main className="mdl-layout__content">
                    <div className="page-content">
                        {this.props.children}
                    </div>
                </main>
            </div>
        );
    }
}
