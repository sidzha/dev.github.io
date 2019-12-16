import React from 'react';

const Comment = props => {
  const { id, name, userpic, time, text, remove } = props;
  return (
    <article className="comment">
      <h3 className="comment-header">{name}</h3>
      <img className="comment-avatar" src={userpic} />
      <time dateTime={time} className="comment-time">
        {time}
      </time>
      <p>{text}</p>
      <button
        className="submit-button delete-button"
        onClick={() => remove(id)}
      >
        Удалить
      </button>
    </article>
  );
};

export default Comment;
