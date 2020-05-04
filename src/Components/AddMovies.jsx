import React,{useState,useContext} from 'react'
import { MovieContext } from "../Context/MovieContext";

const AddMovies = () => {
    const [name, setName] = useState(" ")
    const [price, setPrice] = useState(" ");
      const [movies, setMovies] = useContext(MovieContext);

    const upDateName = (e) => {
        setName(e.target.value)
    }

    const upDatePrice = (e) => {
        setPrice(e.target.value);
    };

    const AddMovie = (e) => {
        e.preventDefault();
        setMovies(previousMovies=>[...previousMovies,{name:name, price:price}])
    }
    
   

  return (
    <div>
          <form onSubmit={AddMovie}>
        <input
          className="input"
          onChange={upDateName}
          type="text"
          name="name"
          value={name}
        />
        <input
          className="input"
          onChange={upDatePrice}
          type="text"
          name="price"
          value={price}
        />
        <button className="btn" onChange={upDatePrice}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddMovies


