import React from 'react';

const addCommentForm = props => {
  const { nameValue, textValue, onSubmit, onChange } = props;

  return (
    <form onSubmit={onSubmit} className="new-comment-form">
      <label className="form-label">
        Ваше имя:
        <input
          onChange={onChange}
          className="form-control"
          type="text"
          value={nameValue}
          name="name"
          required
        />
      </label>

      <label className="form-label">
        Ваш комментарий:
        <textarea
          onChange={onChange}
          className="form-control"
          rows="5"
          cols="40"
          name="text"
          value={textValue}
          required
        />
      </label>

      <button type="submit" className="submit-button">
        Отправить
      </button>
    </form>
  );
};

export default addCommentForm;
