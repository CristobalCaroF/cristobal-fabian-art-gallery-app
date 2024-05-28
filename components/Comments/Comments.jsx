export default function Comments({ comments }) {
  return (
    <>
      <h4 style={{ textAlign: "center" }}>Comments</h4>
      <ul style={{ textAlign: "center" }}>
        {comments?.map((comment, index) => {
          return (
            <li style={{ listStyleType: "none" }} key={index}>
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
