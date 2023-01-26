import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div>
        <h2 class="text-important">Contact me</h2>
        <form className='con'>
        <label>Full Name</label>
        <input type="text" placeholder="Email" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Message</label>
        <textarea rows="5" cols="40"></textarea>
        <button>Send</button>
      </form>
    </div>
  )
}

export default Contact