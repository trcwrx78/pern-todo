import InputTodos from './components/InputTodos';
import ListTodos from './components/ListTodos';

const App = () => {
  return (
    <>
      <div className='container'>
        <InputTodos />
        <ListTodos />
      </div>
    </>
  );
};

export default App;
