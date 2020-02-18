import { connect } from 'react-redux'
import Home from './Home';
import {withRouter} from 'react-router-dom';

import {
    handleSubmit,
    getData,
    setField,
} from '../actions/Actions'

const mapStateToProps = (state) => {
    return {
        home: state.home,
    }
};

const mapDispatchToProps = (dispatch) => ({
    handleSubmit: () => {
        dispatch(handleSubmit());
    },
    getData: () => {
        dispatch(getData());
    },
    setField: (field, value) => {
        dispatch(setField(field, value));
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));