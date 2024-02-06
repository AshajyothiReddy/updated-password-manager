import {Component} from 'react'
import PasswordItem from './components/PasswordItem'
import RenderPasswordsVisible from './components/PasswordVisibleItem'
import './App.css'

class App extends Component {
  state = {
    showPasswords: '',
    website: '',
    username: '',
    password: '',
    count: 0,
    passwordsList: [],
  }

  onChangeWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeCheckbox = event => {
    this.setState({
      showPasswords: event.target.checked,
    })
  }

  renderNoPasswords = () => (
    <div className="no-passwords-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        className="no-password-img"
        alt="no passwords"
      />
      <p className="heading">No Passwords</p>
    </div>
  )

  onSubmitForm = event => {
    const {username, website, password} = this.state
    event.preventDefault()
    this.setState(prevState => ({count: prevState.count + 1}))
    this.setState(prevState => ({
      passwordsList: [
        ...prevState.passwordsList,
        {username: {username}, website: {website}, password: {password}},
      ],
    }))
  }

  renderPasswordsList = () => {
    const {passwordsList} = this.state
    return (
      <ul>
        {passwordsList.map(each => (
          <PasswordItem username={each.username} website={each.website} />
        ))}
      </ul>
    )
  }

  renderVisiblePasswordsList = () => {
    const {passwordsList} = this.state
    return (
      <ul>
        {passwordsList.map(each => (
          <RenderPasswordsVisible
            username={each.username}
            website={each.website}
            password={each.password}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {username, website, password} = this.state
    const {count, showPasswords} = this.state
    const updatedPasswordsList = showPasswords
      ? this.renderPasswordsList()
      : this.renderPasswordsList()

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="logo"
          alt="app logo"
        />
        <div className="add-password-container">
          <div className="add-new-pwd-container">
            <h1 className="heading">Add New Password</h1>
            <form className="form" onSubmit={this.onSubmitForm}>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="input-logo-img"
                  alt="website"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  value={website}
                  className="input-text-container"
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="input-logo-img"
                  alt="username"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  className="input-text-container"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="input-logo-img"
                  alt="password"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  className="input-text-container"
                  onChange={this.onChangePassword}
                />
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-img"
          />
        </div>
        <div className="password-manager-container">
          <div className="header">
            <div className="heading-password-img-container">
              <h1 className="heading">Your Passwords</h1>
              <p>{count}</p>
            </div>
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="input-logo-img"
                alt="search"
              />
              <input
                type="search"
                placeholder="Search"
                className="input-text-container"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="checkbox-container">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Show Passwords</label>
          </div>
          {count !== 0 ? {updatedPasswordsList} : this.renderNoPasswords()}
        </div>
      </div>
    )
  }
}

export default App
