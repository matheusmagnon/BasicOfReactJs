import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

export function Comment({ content, OnDeleteComment }) {
  function handleDeleteComment() {
    OnDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/magon0.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Magno</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button type="submit">
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
