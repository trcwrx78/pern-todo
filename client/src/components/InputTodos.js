import { useState } from 'react';
import todoAPI from '../api/todoAPI';

const InputTodos = () => {
  const [description, setDescription] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await todoAPI.post('/todos', {
        description,
      });

      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className='text-center mt-5'>Pern Todo List</h1>

      <form className='d-flex mt-5' onSubmit={onSubmitForm}>
        <input
          type='text'
          className='form-control'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='btn btn-success'>Add</button>
      </form>
    </>
  );
};

export default InputTodos;
