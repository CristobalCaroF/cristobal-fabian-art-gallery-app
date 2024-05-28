export default function CommentForm({ onSubmitComment, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitComment(data, slug);
    event.target.reset();
  }

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h4 className="entry-form__title">Add Comment</h4>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <textarea name="message" id="message" rows="4" />
        </div>
        <div className="entry-form__button-wrapper">
          <button type="submit">Send</button>
        </div>
      </div>
    </form>
  );
}
