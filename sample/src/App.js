
// import './App.css'
// import Header from './components/Header';
// function App() {
//   const data='react'
//   return (
//     <div>
//       <Header data={data}/>
//       <h1 className='hello'>hello World</h1>
//       <p>This is my fist project</p>
//       <p>{data}</p>
      
//     </div>
    
//   );
// }
// export default App

// import {useState} from 'react'
// import Counter from './Counter'
// function App(){
//   const[count,setCount]=useState(0)
//   const addCount=()=>{
//   setCount(count+1)
//   }
//   let obj={
//     title:'1st Counter',
//     count
//   }


  
//   return(
//      <div className="App">
//       <button onClick={addCount}> Click</button>
//       <h1>Counter:{count}</h1>
//       <Counter title='1st counter' count={count}/> 
//       <Counter {...obj}/>
//       <Counter title='2nd counter' count={count}/>
//      </div>
//   )
// }

// export default App;
import {useState} from 'react'
import Employee from './Employee'
function App(){


  let emp=[{name:'Alli',age:20},
  {name:'Asha',age:21},
  {name:'Unni',age:21}
  ]
  
  return(
    <div className="App">
      {
        emp.map((obj,index)=>{ 
         return(
        // <Employee key={index} name={obj.name} age={obj.age}/>
        <Employee key={index} {...obj}/>
         )    

        })
      }
    </div>
  )
}
export default App