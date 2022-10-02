import React, { useState } from "react";
// import utils function to validate emails
import { validateEmail } from "../../utils/helpers";
import "tw-elements";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // destructuring form state
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);

      if (!isValid) {
        setErrorMessage("Your email is invalid!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required!`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
// not needed anymore because we are using getform.io
 /*  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  } */

  return (
   <section className="w-full h-screen flex justify-center items-center ">
    <form className="flex flex-col" method="POST" action="https://getform.io/f/1c0b62ce-3b87-4b95-9b8b-388347876616">
      <div className="pb-8">
        <p className="text-5xl">Contact Me!</p>
        <p className="">Please sumbit the form below or email me - chris.sarm15@gmail.com</p>
      </div>
      <input type="text" defaultValue={name} onBlur={handleChange} name="name" placeholder="Name" className="p-2"></input>
      <input type="email" defaultValue={email} name="email" onBlur={handleChange} placeholder="Email" className="my-4 p-2"></input>
      <textarea name="message" defaultValue={message} onBlur={handleChange} placeholder="Message" rows="10" className="p-2">
      </textarea>
      <button type="submit" className="border-2 px-4 py-3 my-3 mx-auto flex items-center hover:bg-blue-500">Submit</button>

    </form>
   </section>
  );
}

export default Contact;
