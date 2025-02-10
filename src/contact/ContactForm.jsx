import { useState } from 'react';
import { useImmer } from 'use-immer';

export default function ContactForm() {
  const [contacts, setContact] = useImmer({
    name: '',
    message: '',
  });

  const handleChangeName = (e) => {
    return setContact((contact) => (contact.name = e.target.value));
  };

  const handleChangeMessage = (e) => {
    return setContact((contact) => (contact.message = e.target.value));
  };

  return (
    <>
      <form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={contact.name}
            onChange={handleChangeName}
          />
        </div>

        <div className="form-control">
          <label htmlFor="message">Message</label>
          <textarea
            cols={30}
            rows={5}
            name="message"
            id="message"
            placeholder="Enter your message"
            value={contact.message}
            onChange={handleChangeMessage}
          ></textarea>
        </div>
      </form>
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h3>Contact Detail: </h3>
        <p>Name: {contacts.name}</p>
        <p>Message: {contacts.message}</p>
      </div>
    </>
  );
}
