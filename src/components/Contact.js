import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Отправка формы
  };

  return (
    <div>
      <h1>Контакты</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Сообщение:
          <textarea name="message" value={message} onChange={(event) => setMessage(event.target.value)} />
        </label>
        <button type="submit">Отправить</button>
      </form>
      <h2>Карта с местоположением офиса</h2>
      
    </div>
  );
};

export default Contact;