const styles = {
  form: {
    maxWidth: "400px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  fields: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    marginBottom: "20px",
  },
  label: {
    marginBottom: "5px",
    fontSize: "16px",
    fontWeight: "bold",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    resize: "vertical",
  },
  buttonWrapper: {
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#FFF8E3",
    color: "black",
    border: "1px solid #000",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    outline: "none",
  },
};

export default function CommentForm({ onSubmitComment, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitComment(data, slug);
    event.target.reset();
  }

  return (
    <form style={styles.form} className="entry-form" onSubmit={handleSubmit}>
      <h3 style={styles.title} className="entry-form__title">
        Add Comment
      </h3>
      <div style={styles.fields} className="entry-form__fields">
        <div style={styles.field} className="entry-form__field">
          <textarea
            style={styles.textarea}
            name="message"
            id="message"
            rows="4"
          />
        </div>
        <div
          style={styles.buttonWrapper}
          className="entry-form__button-wrapper"
        >
          <button style={styles.button} type="submit">
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
