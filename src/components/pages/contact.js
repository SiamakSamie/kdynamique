import React, { Component } from "react";
import axios from "axios";
import Modal from "react-awesome-modal";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      emailHeader: "Sorry!",
      emailBody:
        "There was a problem. Email us directly at info@kdypro.com or give us a call!",
      visible: false
    };
  }

  emailResponse(emailHeader, emailBody) {
    this.setState({ emailHeader: emailHeader, emailBody: emailBody });
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const { message, phone, email, name } = this.state;

    axios
      .post("https://www.enformed.io/ghnyxjd4/", {
        message,
        phone,
        email,
        name
      })
      .then(response => {
        console.log(response);
        this.emailResponse("Email sent!", "We will get back to you shortly");
        this.resetForm();
        this.openModal();
      })
      .catch(error => {
        console.log(error);
        this.emailResponse(
          "There was a problem!",
          "Email directly at info@kdypro.com or give us a call!"
        );
        this.resetForm();
        this.openModal();
      });
  };

  resetForm() {
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  }

  render() {
    return (
      <div className="container-fluid phone">
        <div className="panel panel-phone">
          <div className="panel-heading">
            <div className="panel-title text-center">
              For a quick reply, give us a call
            </div>
          </div>
          <div className="panel-body text-center">
            <h1>(438) 998-0466</h1>
          </div>
        </div>

        <form
          className="form-horizontal"
          id="contact_form"
          onSubmit={this.onSubmit}
        >
          <fieldset>
            <legend>email: info@kdypro.com</legend>
            <div className="form-group">
              <div className="col-md-12 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <div className="buffer">
                      <i className="fas fa-user" />
                      <p className="addon-text">Name</p>
                    </div>
                  </span>
                  <input
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    type="text"
                    onChange={this.onChange}
                    value={this.state.name}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="col-md-12 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <div className="buffer">
                      <i className="fas fa-at" />
                      <p className="addon-text">E-mail</p>
                    </div>
                  </span>
                  <input
                    name="email"
                    placeholder="E-Mail Address"
                    className="form-control"
                    type="text"
                    onChange={this.onChange}
                    value={this.state.email}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="col-md-12 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <div className="buffer">
                      <i className="fas fa-phone" />
                      <p className="addon-text">Phone</p>
                    </div>
                  </span>
                  <input
                    name="phone"
                    placeholder="(845) 555-1212"
                    className="form-control"
                    type="text"
                    onChange={this.onChange}
                    value={this.state.phone}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="col-md-12 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <div className="buffer">
                      <i className="fas fa-pencil-alt" />
                      <p className="addon-text">Message</p>
                    </div>
                  </span>
                  <textarea
                    className="form-control message"
                    name="message"
                    placeholder="Project Description"
                    onChange={this.onChange}
                    value={this.state.message}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="col-md-12">
                <button className="btn btn-primary">
                  <span className="btn-content">send</span>
                  <span className="icon">
                    <i className="fas fa-paper-plane" />
                  </span>
                </button>
              </div>
            </div>
          </fieldset>
        </form>
        <Modal
          visible={this.state.visible}
          width="400"
          height="300"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <h2 className="emailHeader">{this.state.emailHeader}</h2>
            <h3 className="emailBody">{this.state.emailBody}</h3>
            <button
              className="btn btn-primary emailModalButton"
              onClick={() => this.closeModal()}
            >
              close
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Contact;
