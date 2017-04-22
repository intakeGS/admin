import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import NavBarTop from '../../components/Nav/index'
import "./MessagePage.css"
import { withRouter } from 'react-router-dom';

class MessagePage extends Component {
  constructor(props) {
    super(props)

     this.state = {
       input : '',
       imagePreviewUrl: '',
       messages: props.messages,
       connected: false
     }

    //  this.handleOnChange = this.handleOnChange.bind(this)
    //  this.handleOnSubmit = this.handleOnSubmit.bind(this)
    //  this._handleMessageEvent = this._handleMessageEvent.bind(this)
    //  this._handleFileUpload = this._handleFileUpload.bind(this)
   }


  componentWillMount() {
    // this._init()
  }

  componentDidMount(){
    // console.log(this.props)
    // this._handleFileUpload()
    // this._handleMessageEvent()
  }

  handleOnChange(ev) {
    this.setState({ input: ev.target.value})
  }

  // handleOnSubmit(ev) {
  //
  //   ev.preventDefault()
  //   socket.emit('chat message', {message: this.state.input, room: this.props.room.title, user: this.props.user})
  //   this.setState({ input: '' })
  // }
  //
  // _handleMessageEvent(){
  //   socket.on('chat message', (inboundMessage) => {
  //      this.props.createMessage({room: this.props.room, newMessage: {user: JSON.parse(inboundMessage).user, message: JSON.parse(inboundMessage).message}})
  //    })
  // }

  _init(){
    // if(!(this.state.connected)){
    //   this.props.fetchRoom()
    //   socket.emit('ENTERROOMNAMEHERE', {room: this.props.room.title})
    //     this.setState({connected: true})
    // }
  }

  render() {

    return (
      <div>
        <NavBarTop/>
        <h3>HELLO</h3>
      </div>


    )
  }

}

function mapStateToProps(state) {
    console.log(state)
    return {
        isAuthenticated: state.loginDuck.isAuthenticated,
        errorAuthenticating: state.loginDuck.errorAuthenticating,
        loadingUser: state.loginDuck.loadingUser,
        loginError: state.loginDuck.loginError,
        messages: state.loginDuck.messages
    }
}

export default withRouter(connect( mapStateToProps, {})( MessagePage ))
