# Basic form generator v1.0

## Goal

I didnt seek for an extremely complex logic in this project, but to improve my coding skills, make everything with as little hard code as possible, maintain a good project arquitecture and that everything is managed automatically, goals that i have acomplished.

### Tech stack
- React.js
- Sass (remains to be done)

### Main components

- FormGenerator
- FormCreated
- FormInfo

### How it works

- With `useContext` we manage two diferent states, one for the creation of the form inputs with its parameters, and other to print the information gathered when the form created with the previous parameters is filled .

- **FormGenerator** → You choose the input type, and edit its attributes. When the submit is done, it creates a template in our first state in useContext with the indications to be followed to establish a new form with our preferences.

- **FormCreated** → It takes the guidelines sent by `FormGenerator` to the _first_ useContext state, and creates our custom form. When this one is filled, it sends the values to our _second_ useContext state.

- **FormInfo** → It just takes the info from our second useContext state, and prints it.

> Working on Input Radio, checkbox & select to be implemented.
