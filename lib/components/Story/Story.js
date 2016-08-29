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
    toggleStoryFilter(filter){
        if(this.props.storyFilters.indexOf(filter) != -1){
            this.props.removeStoryFilter(this.props.storyFilters.indexOf(filter));
        } else {
            this.props.addStoryFilter(filter);
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
        let items = filters.map((filter, idx)=>{
            return (
                <li key={idx} className="mdl-menu__item" onClick={()=>this.toggleStoryFilter(filter)}>
                    {filter}
                </li>
            );
        });

        return (
            <div>
                <button className="mdl-button mdl-js-button" id="storyStateFilter">
                    States
                </button>
                <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect" htmlFor="storyStateFilter">
                    {items}
                </ul>
            </div>
        );
    }
    render() {
        return (
            <div>
                <div className="story-filters">
                    <h3>Filters: </h3>
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
