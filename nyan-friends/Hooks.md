# Hooks

```
// import useState and useEffect to use hooks
import React, { useState, useEffect } from 'react';
```

- We need a state variable and a function that updates the state. 
- Inside of useState, we give it the initial state of the state variable, 
  in this case cats is an empty array, and searchField is empty string. 

```
// array destructuring
const [cats, setCats] = useState([]);
const [searchField, setSearchField] = useState('');
```

- when App renders, react runs the useEffect. 
- useEffect takes in a second parameter. By giving it an empty array,
  it's like telling useEffect to behave like componentDidMount. 