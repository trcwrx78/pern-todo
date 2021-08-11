import { useState } from 'react';
import todoAPI from '../api/todoAPI';

const EditTodos = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      await todoAPI.put(`/${todo.todo_id}`, {
        description,
      });

      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-warning'
        data-bs-toggle='modal'
        data-bs-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        className='modal fade'
        id={`id${todo.todo_id}`}
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
        onClick={() => setDescription(todo.description)}
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Edit Todo
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={() => setDescription(todo.description)}
              ></button>
            </div>
            <div className='modal-body'>
              <input
                type='text'
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-warning'
                onClick={updateDescription}
              >
                Edit
              </button>
              <button
                type='button'
                className='btn btn-danger'
                data-bs-dismiss='modal'
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodos;
