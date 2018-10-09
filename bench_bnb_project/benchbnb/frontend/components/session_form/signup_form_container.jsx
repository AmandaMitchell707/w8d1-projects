import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'signup',
});

mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
