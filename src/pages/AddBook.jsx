import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ title: '', author: '', category: '', coverImage: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.category || !form.coverImage) return alert('Please fill in all fields');
    dispatch(addBook({ id: Date.now(), ...form }));
    navigate(`/books/${form.category}`);
  };

  return (
    <div className="text-white">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <input className="form-control mb-2" placeholder="Author" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} />
        <input className="form-control mb-2" placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
        <input className="form-control mb-2" placeholder="Cover Image URL" value={form.coverImage} onChange={e => setForm({ ...form, coverImage: e.target.value })} />
        <button className="btn btn-success">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;