
import React,{useState,createContext} from 'react'

export const MovieContext= createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
    { name: "Harry porter", price: "$33", id: 23124 },
    { name: "Game of Thrones", price: "$10", id: 23127 },
    { name: "Inception", price: "$33", id: 23524 },
  ]);

  return (
    <MovieContext.Provider value={[movies,setMovies]}>
       {props.children}
    </MovieContext.Provider >
  )
}
 













// import React,{useState,createContext}  from 'react'


// export const MovieContext = createContext()

// export const MovieProvider = (props) = {
  

//     return(
//     <MovieContext.provider >
//         {props.children}
//         </MovieContext.provider>
//     )
    
// };
