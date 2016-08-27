import React, { Component, PropTypes } from 'react';
import fetchStories from '../../actions/stories/fetchStories';
import addStoryFilter from '../../actions/stories/addStoryFilter';
import removeStoryFilter from '../../actions/stories/removeStoryFilter';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class Story extends Component {
    static propTypes = {
        stories: PropTypes.array
    };

    componentDidMount() {
        this.props.fetchStories(this.props.storyFilters);
    }
    componentDidUpdate(prevProps){
        if(this.props.storyFilters.length != prevProps.storyFilters.length){
            this.props.fetchStories(this.props.storyFilters);
        }
    }
    buildStories() {
        return this.props.stories.map((story)=>{
            let { id, description, name, current_state, url } = story;
            if(typeof description != 'undefined' && description.length > 255){
                description = description.substr(0,255) + '...';
            }
            return (
                <div key={id} className="mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title">
                        <h3 className="mdl-card__title-text">{name}</h3>
                    </div>
                    <div className="mdl-card__supporting-text">{description}</div>
                    <div className="mdl-card__actions">
                        <span className="mdl-chip">
                            <span className="mdl-chip__text">{current_state}</span>
                        </span>
                        <a href={url} target="_blank" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Open In Pivotal</a>
                        <a href="#" target="_blank" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Open PR in Github</a>
                    </div>
                </div>
            );
        })
    }
    buildStoryFilters(){
        const filters = ['unstarted', 'started', 'delivered', 'rejected', 'accepted', 'finished'];

        return filters.map((filter, idx)=>{
            console.log(this.props.storyFilters,filter,this.props.storyFilters.indexOf(filter));
            if(this.props.storyFilters.indexOf(filter) == -1){
                return (
                    <button key={idx} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={()=>this.props.addStoryFilter(filter)}>
                        {filter}
                    </button>
                );
            }
            else {
                return (
                    <button key={idx} className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={()=>this.props.removeStoryFilter(this.props.storyFilters.indexOf(filter))}>
                        {filter}
                    </button>
                );

            }

        })

    }
    render() {
        return (
            <div>
                <div className="story-filters">
                    {this.buildStoryFilters()}
                </div>
                {this.buildStories()}
            </div>
        );
    }
}

const StoryContainer = connect(
    ({ stories, storyFilters }) => ({ stories, storyFilters }),
    (dispatch) => ({
        fetchStories: bindActionCreators(fetchStories, dispatch),
        addStoryFilter: bindActionCreators(addStoryFilter, dispatch),
        removeStoryFilter: bindActionCreators(removeStoryFilter, dispatch)
    })
)(Story);
export default StoryContainer;
