import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counter/>
      </header>
    </div>
  );
}

export default App;

fetch('https://reqres.in/api/users?page=1/tasks/create',{
  method: 'POST',
  header:{
    'Content-Type':'aaplication/json'
  },
    body:JSON.stringify({text:'lorem ipsum', author: 123,}),
    
  
})
