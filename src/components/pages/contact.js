import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="container-fluid">
        <form className="form-horizontal" action=" " method="post" id="contact_form">
          <fieldset>
            <legend>Something something something yay</legend>

            <div className="form-group">
              <div className="col-md-12 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <div className="buffer">
                      <i className="fas fa-user" />
                      <p className="addon-text">Name</p>
                    </div>
                  </span>
                  <input name="name" placeholder="Name" className="form-control" type="text" required />
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
                  <input name="email" placeholder="E-Mail Address" className="form-control" type="text" required />
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
                  <input name="phone" placeholder="(845)555-1212" className="form-control" type="text" required />
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
                  <textarea className="form-control" name="comment" placeholder="Project Description" required />
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
      </div>
    );
  }
}

export default Contact;
