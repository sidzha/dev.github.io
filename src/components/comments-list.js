import React from 'react';
import Comment from './comment';

const CommentsList = ({ comments, remove }) => {
  if (!comments.length) return <h3>Нет комментариев!</h3>;
  return (
    <ul className="list-group">
      {comments.map((comment, i) => {
        const { id, name, userpic, time, text } = comment;

        return (
          <li key={i} className="list-group-item">
            <Comment
              id={id}
              name={name}
              userpic={userpic}
              time={time}
              text={text}
              remove={remove}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CommentsList;
