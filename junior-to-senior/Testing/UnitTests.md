# Unit Tests

- should cover all small, pure functions of an application. 
  
- small, pure functions are functions that takes an input and gives an output. It does one small, simple thing at a time. Therefore, it allows unit tests to be written easily. 

- and this is one of the biggest advantage of functional programming vs OOP. 

- recap: pure function is a function that has no side effects, does not affect another part of the program. Always return something based on an input. It is deterministic, meaning given the same input, it will always produce the same output. 

- React functional components (without class) are most pure functions, taking in the props and gives a view. It is easy to test. 

- unit tests does not test against contract, that is, the connection between things. e.g. the connection between a server and database; SignIn function and LoadProfile function, it would test each function individually, but not the contract between them. 