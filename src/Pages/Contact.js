import React, { useRef, useState } from 'react';
import classes from './Contact.module.css';

function AddContact({ onAddContact = () => {} }) {
  const [error, setError] = useState(null); // Define error state
  const nameRef = useRef('');
  const openingTextRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');

  async function addContactHandler(contact) {
    try {
      const response = await fetch('https://contact-678e2-default-rtdb.firebaseio.com/contact.json', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error('Something went wrong while adding the contact!');
      }
    } catch (error) {
      setError(error.message); // Set error state
    }
  }

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const contact = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      openingText: openingTextRef.current.value,
    };

    addContactHandler(contact);
    console.log(onAddContact);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' ref={nameRef} />
      </div>

      <div className={classes.control}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' ref={emailRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='phone'>Phone</label>
        <input type='tel' id='phone' ref={phoneRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if error exists */}
      <button>Submit</button>
    </form>
  );
}

export default AddContact;
