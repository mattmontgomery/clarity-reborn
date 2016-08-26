import React, { Component, PropTypes } from 'react';
import { v4 } from 'node-uuid';
import addStory from 'actions/stories/addStory';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class Story extends Component {
    static propTypes = {
        id: PropTypes.string,
    }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.props.stories)}</pre>
                <button onClick={() => this.props.addStory(v4())}>{'Add a story'}</button>
            </div>
        );
    }
}

const StoryContainer = connect(
    ({ stories }) => ({ stories }),
    (dispatch) => ({
        addStory: bindActionCreators(addStory, dispatch)
    })
)(Story);
export default StoryContainer;
