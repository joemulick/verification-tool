// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import TextFieldGroup from '../common/TextFieldGroup';
// // import { Link } from 'react-router-dom';
// import { addCode } from '../../actions/codeActions';
// // import { createCode } from '../../actions/codeActions';



// class CreateCode extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             displayDashboardInputs: false,
//             addCode: '',
//             errors: {}
//         }
//         this.onChange = this.onChange.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//     }

//     componentWillReceiveProps(nextProps) {
//         if(nextProps.errors){
//             this.setState({errors: nextProps.errors})
//         }
//     }

//     onSubmit(e){
//         e.preventDeault();

//         const codeData = {
//             addCode: this.state.addCode
//         }

//         this.props.createCode(codeData, this.props.history);
//     }

//     onChange(e) {
//         this.setState({[e.target.name]: e.target.value})
//     }

//     render() {
        
//         const { errors } = this.state;
        
//         return (
//             <div className="create-code">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-8 m-auto">
//                         <h1 className="display-4 text-center">
//                             Code Manager
//                         </h1>
//                         <small className="d-block pb-3">* = required fields</small>
//                         <form onSubmit={this.onSubmit}>
//                             <TextFieldGroup
//                                 placeholder="Add Code"
//                                 name="addCode"
//                                 value={this.state.addCode}
//                                 onChange={this.onChange}
//                                 errors={errors.addCode}
//                                 info="Add A Code With This Input Field"
//                             />
//                         </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// CreateCode.propTypes = {
//     addCode: PropTypes.string.isRequired,
//     errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//     addCode: state.code,
//     errors: state.errors
// });

// export default connect(mapStateToProps, { addCode })(
//     withRouter(CreateCode)
// );