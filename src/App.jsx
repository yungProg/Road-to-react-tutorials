import * as React from "react";

const welcome = {
  title: "React",
  greeting: "Hey"
}

const Lists = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]

const Search = () =>{
  const handleChange = (event) =>{
    console.log(event)
    console.log(event.target.value)
  }

  const handleBlur = (event1) => {
    console.log(event1)
    console.log(event1.target.value)
  }

  return(
    <div>
      <h1>{welcome.greeting} {welcome['title']}</h1>
      <label htmlFor="search">Search: </label>
      <input onChange={handleChange} onBlur={handleBlur} id="search" type="text" />
    </div>
  );
  };

const List = () =>(
    <div>
      <ul>
        {Lists.map(item => <li key={item.objectID}>
          <span><a href={item.url}>{item.title}</a></span>
          <span>{item.author }</span> 
          <span>{item.num_comments }</span> 
          <span>{item.points }</span>
          </li>)}
      </ul>
    </div>
  )


//concise body as multiple lines
const App = () =>(
    <div>
      <Search />

      <List />
    </div>
  );


export default App;