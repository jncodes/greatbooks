import { connect } from 'react-redux';
import navbarSearch from '../search/navbar_search';
import { search } from '../../actions/search_actions';
import { withRouter } from 'react-router-dom';


const mdp = (dispatch, ownProps) => {
    return {
        search: query => dispatch(search(query))
    };
};

export default withRouter(connect(null, mdp)(navbarSearch));