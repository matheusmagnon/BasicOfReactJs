import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setComment] = useState([]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBr }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();
    setComment([...comments, newCommentText]);

    setNewCommentText("");
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComment(commentsWithoutDeletedOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type == "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              OnDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
