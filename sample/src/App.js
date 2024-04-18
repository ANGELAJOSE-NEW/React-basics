
import './App.css'
import Header from './components/Header';
function App() {
  const data='react'
  return (
    <div>
      <Header data={data}/>
      <h1 className='hello'>hello World</h1>
      <p>This is my fist project</p>
      <p>{data}</p>
      
    </div>
    
  );
}

export default App;
