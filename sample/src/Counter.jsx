import React from 'react'

// function Counter(props) {
// const {title,count}=props
//   return (
//     <div>
//       {/* <h1>{props.title}:{props.count}</h1> */}
//       <h1>{title}:{count}</h1>
//     </div>
//   )
// }

function Counter({title,count}){
    return(
        <div>
            <h1>{title} {count}</h1>
        </div>
    )
}

export default Counter
