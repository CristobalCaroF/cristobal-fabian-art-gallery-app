export default function Comments({ comments }) {
  return (
    <>
      <h4>Comments</h4>
      <ul>
        {comments?.map((comment, index) => {
          return (
            <li key={index}>
              <p>
                {Date(comment.date).toLocaleString()}: {comment.comment.message}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
