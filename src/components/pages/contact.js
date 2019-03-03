import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div classNameName="container-fluid">
        <form
          class="form-horizontal"
          action=" "
          method="post"
          id="contact_form"
        >
          <fieldset>
            <legend>Something something something yay</legend>

            <div class="form-group">
              <div class="col-md-12 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <div class="buffer">
                      <i class="fas fa-user" />
                      <p class="addon-text">Name</p>
                    </div>
                  </span>
                  <input
                    name="name"
                    placeholder="Name"
                    class="form-control"
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-12 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <div class="buffer">
                      <i class="fas fa-at" />
                      <p class="addon-text">E-mail</p>
                    </div>
                  </span>
                  <input
                    name="email"
                    placeholder="E-Mail Address"
                    class="form-control"
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-12 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <div class="buffer">
                      <i class="fas fa-phone" />
                      <p class="addon-text">Phone</p>
                    </div>
                  </span>
                  <input
                    name="phone"
                    placeholder="(845)555-1212"
                    class="form-control"
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-12 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <div class="buffer">
                      <i class="fas fa-pencil-alt" />
                      <p class="addon-text">Message</p>
                    </div>
                  </span>
                  <textarea
                    class="form-control"
                    name="comment"
                    placeholder="Project Description"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-12">
                <button className="btn btn-primary">
                  <span className="btn-content">send</span>
                  <span className="icon">
                    <i class="fas fa-paper-plane" />
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
