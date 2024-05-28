export default function CommentForm({ onSubmitComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitComment(data);
    event.target.reset();
  }

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h3 className="entry-form__title">Add Comment</h3>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="notes">Comment</label>
          <textarea name="notes" id="notes" rows="4" />
        </div>
        <div className="entry-form__button-wrapper">
          <button type="submit">Create</button>
        </div>
      </div>
    </form>
  );
}
