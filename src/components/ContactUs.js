import "./ContactUsStyles.css";

function ContactUs() {
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button className="contact-btn">Send Message</button>
      </form>
    </div>
  );
}
export default ContactUs;