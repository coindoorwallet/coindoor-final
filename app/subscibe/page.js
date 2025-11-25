export default function SubscribePage() {
  return (
    <section className="section max-w-md">
      <h1 className="page-title">Join the Crypto Education Waitlist</h1>
      <p className="muted">Enter Email and WhatsApp. We'll notify you when the curriculum opens.</p>

      <form
        action="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/formResponse"
        method="POST"
        className="form-grid"
      >
        <input name="entry.111111111" type="email" placeholder="Email" required className="input" />
        <input name="entry.222222222" type="text" placeholder="WhatsApp number" required className="input" />
        <button className="btn-primary">Join Waitlist</button>
      </form>

      <p className="text-xs muted mt-3">We’ll only use these details to contact you about CoinDoor education.</p>
    </section>
  );
}
