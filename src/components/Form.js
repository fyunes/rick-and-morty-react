import React from "react";
import {useState} from "react"

const Form = () => {

  const form = document.getElementById('form');
  const inputs = document.querySelectorAll('#form input:not([type="radio"])');

  const rexp = {
    name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/
  }

  const fieldsFalseTrue = {
    name: false,
    email: false,
    phone: false,
  }

  const formValidate = (event) => {
    switch (event.target.name) {
      case "name":
        validateField(rexp.name, event.target, 'name');
      break;
      case "email":
        validateField(rexp.email, event.target, 'email');
      break;
      case "phone":
        validateField(rexp.phone, event.target, 'phone');
      break;
      // no default 
    }
  }

  const validateField = (expression, input, area) => {
    if(expression.test(input.value)){
      document.getElementById(`field-${area}`).classList.remove('container-form-incorrect');
      document.getElementById(`field-${area}`).classList.add('container-form-correct');
      document.querySelector(`#field-${area} i`).classList.add('fa-check-circle');
      document.querySelector(`#field-${area} i`).classList.remove('fa-times-circle');
      document.querySelector(`#field-${area} .input-error`).classList.remove('input-error-active');
      fieldsFalseTrue[area] = true;
    } else {
      document.getElementById(`field-${area}`).classList.add('container-form-incorrect');
      document.getElementById(`field-${area}`).classList.remove('container-form-correct');
      document.querySelector(`#field-${area} i`).classList.add('fa-times-circle');
      document.querySelector(`#field-${area} i`).classList.remove('fa-check-circle');
      document.querySelector(`#field-${area} .input-error`).classList.add('input-error-active');
      fieldsFalseTrue[area] = false;
    }
  }
  inputs.forEach((input) => {
    input.addEventListener('keyup', formValidate);
    input.addEventListener('blur', formValidate);
  });
  
  if(fieldsFalseTrue.name && fieldsFalseTrue.email && fieldsFalseTrue.phone){
		form.reset();

		document.getElementById('success-message-form').classList.add('success-message-form-active');
		setTimeout(() => {
			document.getElementById('success-message-form').classList.remove('success-message-form-active');
		}, 4000);

		document.querySelectorAll('.container-form-correct').forEach((icon) => {
			icon.classList.remove('container-form-correct');
		});
	} /* else {
		document.getElementById('empty-message-form').classList.add('empty-message-form-active');
    setTimeout(() => {
			document.getElementById('empty-message-form').classList.remove('empty-message-form-active');
		}, 4000);
	} */
  
  

  const [input, setInput] = useState ({});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values, [name]:value}))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    console.log(input);

    let nameValue = document.getElementById("name").value;
    let phoneValue = document.getElementById("phone").value;
    let emailValue = document.getElementById("email").value;
    let messageValue = document.getElementById("message").value;
    let selectedContact = document.querySelector('input[name="contact"]:checked');

    let body = ``;
    body += `
      <div className="portal-img">
        <img className="portal-img" src="./img/pngfind.png">
      </div> 
      <img className="img-title" src="./img/message.png" alt="Image title message received ">
      <div className="background-mssg">
        <h3 className="text-dimension"> From: Dimensión C-137</h3>
        <div id="text-form">
          <p className = "label-message">Message sent by:</p>
          <p className = "text-message">${nameValue}</p>
          <p className = "label-message">Phone:</p>
          <p className = "text-message">${phoneValue}</p>
          <p className = "label-message">Email:</p>
          <p className = "text-message">${emailValue}</p>
          <p className = "label-message">Message:</p>
          <p className = "text-message">${messageValue}</p>
          <p className = "label-message">Contact through:
          <p className = "text-message">${selectedContact}</p>
      </div>
    `;
    document.getElementById('message-area').classList.add('message-area-active');
    document.getElementById("received-message").innerHTML = body;
  }
  

  return (
    <div className="mainFormContainer">
      <div className="form-message">
        <div className="form-container">
          <h1>Contact us!</h1>
          <h2>Fill out the form below to send us a message</h2>

          <form className="form" id="form" 
            onSubmit={handleSubmit}
            >

            <legend>Your contact information</legend>
            {/************* name ************ */}
            <div className="container-form" id="field-name">
              <label className="label-form" htmlFor="name">Name: </label>
              <div className="input-container-form">

                <input className="input-form" id="name" 
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={input.name || ""}
                  onChange={handleChange}
                />

                <i className="validation-status fas fa-times-circle"></i>
              </div>
              <p className="input-error">It has to be from 4 to 16 digits and can only contain numbers, letters and underscore.</p>
            </div>

            {/************* phone ************ */}
            <div className="container-form" id="field-phone">
              <label className="label-form" htmlFor="phone">Phone: </label>
              <div className="input-container-form">

                <input
                  id="phone" 
                  className="input-form" 
                  type="tel"
                  name="phone"
                  placeholder="John Doe"
                  value={input.phone || ""} 
                  onChange={handleChange}
                />

                <i className="validation-status fas fa-times-circle"></i>
              </div>
              <p className="input-error">It can only contain numbers and the maximum is 14 digits.</p>
            </div>

            {/************* email ************ */}
            <div className="container-form" id="field-email">
              <label className="label-form" htmlFor="email">Email: </label> 
              <div className="input-container-form">

                <input
                  id="email"
                  className="input-form"  
                  type="email"
                  name="email"
                  placeholder="johndoe@mail.com"
                  value={input.email || ""} 
                  onChange={handleChange}
                />

                <i className="validation-status fas fa-times-circle"></i>
              </div>
              <p className="input-error">Can only contain letters, numbers, periods, hyphens and underscores.</p>
            </div>

            {/************* message ************ */}
            <div className="container-form" id="field-message">
              <label className="label-form" htmlFor="message">Message: </label>
              <div className="input-container-form">

                <textarea 
                  id="message" 
                  cols="90" rows="10" 
                  type="email"
                  name="message"
                  value={input.message || ""} 
                  onChange={handleChange}
                />

                <i className="validation-status fas fa-times-circle"></i>
              </div>
            </div>
            {/* ************ contact ************ */}
            <p className="label-radio">How would you like us to contact you?</p>
            <div className="input-radio">
              <input
                id="contactEmail"
                type="radio" 
                name="contact"
                value="Email"
                checked={input.contact === "Email"}
                onChange={handleChange}
              />
              <label htmlFor="contactEmail">Email</label>
            </div>
            <div className="input-radio">
              <input 
                id="contactPhone"
                type="radio"
                name="contact"
                value="Phone"
                checked={input.contact === "Phone"}
                onChange={handleChange}
              />
              <label htmlFor="contactPhone">Phone</label>
            </div>
            <div className="input-radio">
              <input 
                id="contactWhapp"
                type="radio"
                name="contact"
                value="WhatsApp"
                checked={input.contact === "WhatsApp"}
                onChange={handleChange}
              />
              <label htmlFor="contactWhapp">WhatsApp</label>
            </div>

            {/********* message empty form ******** */}
            <div className="empty-message-form" id="empty-message-form">
              <p><i className="fas fa-exclamation-triangle"></i> <b>Error:</b> Please fill in the form correctly.</p>
            </div>

            {/************* send ************ */}
            <div className="container-form cont-btn-send">

              <button type="submit" className="button-icon">Tuki and send</button>

              <p className="success-message-form" id="success-message-form">Form sent successfully!</p>
            </div>
          </form>		
        </div>

        {/* **** Message received and displayed in the dom ****  */}
        <div className="message-area" id="message-area">
          <div className="received-message" id="received-message"></div>
          {/* Is added with js in the dom */}
        </div>
      </div>
    </div>
  )
};

export default Form;