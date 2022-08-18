import React, {Component} from "react";
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
			emailBody: "There was a problem. Email us directly at info@kdynamique.com or give us a call!",
			visible: false
		};
	}

	emailResponse(emailHeader, emailBody) {
		this.setState({emailHeader: emailHeader, emailBody: emailBody});
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
		this.setState({[e.target.name]: e.target.value});
	};

	onSubmit = e => {
		e.preventDefault();
		// get our form data out of state
		const {message, phone, email, name} = this.state;

		axios
			.post("https://formspree.io/f/mgedbabb", {
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
				this.emailResponse("There was a problem!", "Email directly at info@kdynamique.com or give us a call!");
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
				<h4 className="text-center">Try the facebook chat bubble to chat with us live</h4>

				<div className="panel panel-phone">
					<div className="panel-heading">
						<div className="panel-title text-center">For a quick reply, give us a text/call</div>
					</div>
					<div className="panel-body text-center d-flex">
						<h3>Siamak Samie:</h3>
						<h1>(514) 559-0578</h1>
					</div>
					<div className="panel-body text-center d-flex">
						<h3>Malik Bouabid:</h3>
						<h1>(438) 998-0466</h1>
					</div>
				</div>

				<form className="form-horizontal" id="contact_form" onSubmit={this.onSubmit}>
					<fieldset>
						<legend>Email us</legend>
						<div className="form-group">
							<div className="col-md-12 inputGroupContainer">
								<div className="input-group">
									<div className="input-group-addon">
										<div className="buffer">
											<i className="fas fa-user"/>
											<p className="addon-text">Name</p>
										</div>
									</div>
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
									<div className="input-group-addon">
										<div className="buffer">
											<i className="fas fa-at"/>
											<p className="addon-text">E-mail</p>
										</div>
									</div>
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
									<div className="input-group-addon">
										<div className="buffer">
											<i className="fas fa-phone"/>
											<p className="addon-text">Phone</p>
										</div>
									</div>
									<input
										name="phone"
										placeholder="(555) 555-5555"
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
									<div className="input-group-addon">
										<div className="buffer">
											<i className="fas fa-pencil-alt"/>
											<p className="addon-text">Message</p>
										</div>
									</div>
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
									<div className="icon">
										<i className="fas fa-paper-plane"/>
									</div>
								</button>
							</div>
						</div>
					</fieldset>
				</form>
				<Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp"
				       onClickAway={() => this.closeModal()}>
					<div>
						<h2 className="emailHeader">{this.state.emailHeader}</h2>
						<h3 className="emailBody">{this.state.emailBody}</h3>
						<button className="btn btn-primary emailModalButton" onClick={() => this.closeModal()}>
							close
						</button>
					</div>
				</Modal>
			</div>
		);
	}
}

export default Contact;
