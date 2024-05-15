import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "shriwarthan59@gmail.com" },
    { logo: "logo-whatsapp", text: "+94 076 7722381" },
    {
      logo: "location",
      text: " No 68, Ambagamuva Rd, Gampola, Kandy, Sri Lanka",
    },
  ];

  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    // Perform form validation
    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm("service_z7ot1jm", "template_8njv5ln", form.current, {
        publicKey: "zMuSP_cSV9wW2eweW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true); // Set isSubmitted to true after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const validateForm = () => {
    let isValid = true;

    if (form.current.user_name.value.trim() === "") {
      setIsNameValid(false);
      isValid = false;
    } else {
      setIsNameValid(true);
    }

    if (form.current.user_email.value.trim() === "") {
      setIsEmailValid(false);
      isValid = false;
    } else {
      setIsEmailValid(true);
    }

    if (form.current.message.value.trim() === "") {
      setIsMessageValid(false);
      isValid = false;
    } else {
      setIsMessageValid(true);
    }

    return isValid;
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          {!isSubmitted ? (
            <form
              action=""
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col flex-1 gap-5 "
            >
              <input
                type="text"
                name="user_name"
                placeholder={!isNameValid ? "Name is required" : "Your Name"}
                className={!isNameValid ? "border-red-500   bg-red-900" : ""}
              />
              <input
                type="email"
                name="user_email"
                placeholder={!isEmailValid ? "Email is required" : "Your Email"}
                className={!isEmailValid ? "border-red-500   bg-red-900" : ""}
              />
              <textarea
                name="message"
                placeholder={
                  !isMessageValid ? "Message is required" : "Your Message"
                }
                rows={8}
                className={!isMessageValid ? "border-red-500  bg-red-900" : ""}
              />
              <input type="submit" className="btn-primary w-fit" />
            </form>
          ) : (
            <div className="flex flex-col items-center">
              <p className="text-lg text-green-500 mb-4">✅ Message Sent!</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-primary w-fit"
              >
                Send Another Message
              </button>
            </div>
          )}
          <div className="flex flex-col gap-8 ">
            {contact_info?.map((contact, i) => (
              <div key={i} className="flex gap-4 w-fit items-center">
                <div className="min-w-[3rem] min-h-[3rem] text-2xl flex items-center justify-center text-white  bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="text-sm text-left">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
