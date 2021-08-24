import { useState, useEffect } from "react";
import styles from "./contact.module.scss";
import emailjs from "emailjs-com";
import validate from "utils/validation";
import { useToasts } from "react-toast-notifications";
import CircularProgress from "@material-ui/core/CircularProgress";

const initState = {
  email: "",
  name: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const { addToast } = useToasts();

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBtnValid, setBtnValid] = useState(false);
  const [loading, setLoading] = useState(false);


  // useEffect(() => {
  //   console.log("values", values);
  // }, [errors, values]);

  useEffect(() => {
    if (loading) {
      console.log("show progreess bar");
    }
  }, [loading]);

  const sendEmail = ({ name, email, subject, message }) => {
    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    setLoading(true);
    emailjs
      .send(
        "service_lmzg4kv",
        "template_nqvhys5",
        templateParams,
        "user_piYoC5XCyi9di2TiNFSKQ"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setBtnValid(false);
          setValues(initState);
          addToast("Success!! Email was send!!", { appearance: "success" });
        },
        (err) => {
          setLoading(false);
          setBtnValid(false);
          setValues(initState);
          addToast("Error!! Send email failed", { appearance: "error" });
        }
      );
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors(validate(values));
    if (Object.keys(errors).length === 0) {
      setBtnValid(true);
    } else {
      setBtnValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    sendEmail({name:values.name, email:values.email, subject:values.subject, message:values.subject});
      
  };
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        {loading ? (
          <CircularProgress color="green" />
        ) : (
          <>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your email"
                name="email"
                onChange={handleOnChange}
                value={values.email}
              />
              {errors.email && <p>{errors.email}</p>}
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleOnChange}
                value={values.name}
              />
              {errors.name && <p>{errors.name}</p>}
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                onChange={handleOnChange}
                value={values.subject}
              />
              {errors.subject && <p>{errors.subject}</p>}
              <textarea
                placeholder="Message"
                name="message"
                rows="10"
                onChange={handleOnChange}
                value={values.message}
              ></textarea>
              {errors.message && <p>{errors.message}</p>}
              <button type="submit" disabled={!isBtnValid}>
                Send
              </button>
             
            </form>
          </>
        )}
      </div>
    </section>
  );
}
