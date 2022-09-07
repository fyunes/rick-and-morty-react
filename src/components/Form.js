import {useState} from "react"

const Form = () => {

  const [input, setInput] = useState ("");
  
  return (
    <div className="mainFormContainer">
      <h1>FORM</h1>
      <section className="form-message">
        <div className="form-container">
          <h1>Contact us!</h1>
          <h2>Fill out the form below to send us a message</h2>

          <form className="form" id="form" action=""
            onSubmit={(event)=> {
              event.preventDefault();
              setInput(event.target.input.value)
            }}
            >

            <legend>Your contact information</legend>
            {/************* name ************ */}
            <div className="container-form" id="field-name">
              <label className="label-form" for="name">Name: </label>
              <div className="input-container-form">

                <input className="input-form" id="name" 
                  type="text"
                  /* name="name" */
                  name="input"
                  placeholder="John Doe"
                />

                <i className="validation-status fas fa-times-circle"></i>
              </div>
              <p className="input-error">It has to be from 4 to 16 digits and can only contain numbers, letters and underscore.</p>
            </div>
            {/************* phone ************ */}
            {/* <div className="container-form" id="field-phone">
              <label className="label-form" for="phone">Phone: </label>
              <div className="input-container-form">
                <input type="tel" className="input-form" id="phone" name="phone" placeholder="1157123456" />
                <i className="validation-status fas fa-times-circle"></i>
              </div>
              <p className="input-error">It can only contain numbers and the maximum is 14 digits.</p>
            </div> */}
            {/************* email ************ */}
            {/* <div className="container-form" id="field-email">
              <label className="label-form"  for="email">Email: </label> 
              <div className="input-container-form">
                <input type="email" className="input-form" id="email" name="email" placeholder="johndoe@mail.com" />
                <i className="validation-status fas fa-times-circle"></i>
              </div>
              <p className="input-error">Can only contain letters, numbers, periods, hyphens and underscores.</p>
            </div> */}
            {/************* message ************ */}
            {/* <div className="container-form" id="field-email">
              <label className="label-form" for="message">Message: </label>
              <div className="input-container-form">
                <textarea name="message" id="message" cols="90" rows="10"></textarea>
                <i className="validation-status fas fa-times-circle"></i>
              </div>
            </div> */}
            {/* ************ contact ************ */}
            {/* <p className="label-radio">How would you like us to contact you?</p>
            <div className="input-radio">
              <input type="radio" name="contact" id="contactEmail" value="Email"/>
              <label for="contactEmail">Email</label>
            </div>
            <div className="input-radio">
              <input type="radio" name="contact" id="contactPhone" value="Phone"/>
              <label for="contactPhone">Phone</label>
            </div>
            <div className="input-radio">
              <input type="radio" name="contact" id="contactWhapp" value="WhatsApp"/>
              <label for="contactWhapp">WhatsApp</label>
            </div> */}
            {/********* message empty form ******** */}
            {/* <div className="empty-message-form" id="empty-message-form">
              <p><i className="fas fa-exclamation-triangle"></i> <b>Error:</b> Please fill in the form correctly.</p>
            </div> */}
            {/************* send ************ */}
            <div className="container-form cont-btn-send">
              <button type="submit" className="button-icon">Tuki and send</button>
              <p className="success-message-form" id="success-message-form">Form sent successfully!</p>
            </div>
          </form>		
        </div>
        {/* <div className="message-area" id="message-area">
          <div className="received-message" id="received-message"></div>
          Is added with js in the dom
        </div> */}
        <h3>Mensaje: {input}</h3>
      </section>
    </div>
  )
};

export default Form;