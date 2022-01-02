import { useRef, useState } from "react";
import { BiUserCircle, BiMailSend, BiMessageDetail } from "react-icons/bi";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [isShowingAlert, setShowingAlert] = useState(false);
  const [alertHidden, setAlertHidden] = useState(true);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = () => {
    if (!validateEmail(emailRef.current.value)) {
      setShowingAlert(true);
      setAlertHidden(false);
    } else {
      setShowingAlert(false);
    }
  };

  const handleSumbit = (e) => {
    console.log(e);
    e.preventDefault();
  };

  return (
    <section id="contact">
      <div className="ct">
        <div className="line"></div>
        <div className="title">
          03 <span>Contact</span>
        </div>
        <form onSubmit={handleSumbit} className="contact-form">
          <div
            className={`alert alert-error ${isShowingAlert ? "alert-shown" : "alert-hidden"} ${
              alertHidden ? "alert-fade-out" : "alert-fade-in"
            }`}
            onTransitionEnd={() => {
              if (!isShowingAlert) setAlertHidden(true);
            }}
          >
            Invalid email
          </div>
          <div className="wrapper first-w">
            <div className="f-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              <input type="text" spellCheck="false" ref={nameRef} required />
              <div className="label">Name</div>
              <div className="icon">
                <BiUserCircle />
              </div>
            </div>
            <div
              className="f-wrapper"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="250"
              data-aos-once="true"
            >
              <input type="email" ref={emailRef} required onChange={handleEmailChange} />
              <div className="label">Email</div>
              <div className="icon">
                <BiMailSend />
              </div>
            </div>
          </div>
          <div className="wrapper second-w">
            <div
              className="f-wrapper w-message"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <textarea cols="30" rows="8" ref={messageRef} required></textarea>
              <div className="label">Message</div>
              <div className="icon">
                <BiMessageDetail />
              </div>
            </div>
          </div>
          <div
            className="wrapper third-w"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="750"
            data-aos-once="true"
          >
            <input type="submit" value="Send message" className="contact-btn" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
