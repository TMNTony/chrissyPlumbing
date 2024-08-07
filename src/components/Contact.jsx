import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cznazzg",
        "template_1o4nov9",
        form.current,
        "4qq7rH8WxV7GbQ2tk"
      )
      .then(
        (result) => {
            console.log("SUCCESS!", result.text);
            form.current.reset();
            alert("Thank You! Your message has been sent.");
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("Oops! Something went wrong and we couldn't send your message.");
          }
        );
  };
  return (
    <section
      id="contact"
      className="contact_area relative pt-18 pb-120 bg-gray"
    >
      <div className="contact_image flex items-center justify-end">
        <div className="image lg:pr-13">
          <img src="src/assets/images/contact.svg" alt="about" />
        </div>
      </div>

      <div className="container">
        <div className="row justify-end">
          <div className="w-full lg:w-1/2">
            <div className="contact_wrapper mt-11">
              <div className="section_title pb-4">
                <h5 className="sub_title">Contact</h5>
                <h4 className="main_title">Get In Touch</h4>
                <p>
                  Need to talk to someone? You can either call us at ??? or send
                  us a message and one of our representatives will reach out to
                  you shortly
                </p>
              </div>

              <div className="contact_form">
                <form ref={form} id="contact-form" onSubmit={sendEmail}>
                  <div className="row">
                    <div className="w-full md:w-1/2">
                      <div className="mx-3">
                        <div className="single_form mt-8">
                          <input
                            name="from_name"
                            id="name"
                            type="text"
                            placeholder="Name"
                            className="w-full rounded-md py-4 px-6 border border-solid border-body-color"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="mx-3">
                        <div className="single_form mt-8">
                          <input
                            name="reply_to"
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-md py-4 px-6 border border-solid border-body-color"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="mx-3">
                        <div className="single_form mt-8">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            rows="5"
                            className="w-full rounded-md py-4 px-6 border border-solid border-body-color resize-none"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <p className="form-message mx-3"></p>
                    <div className="w-full">
                      <div className="mx-3">
                        <div className="single_form mt-8">
                          <button
                            type="submit"
                            className="main-btn contact-btn"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
