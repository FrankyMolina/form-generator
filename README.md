# Basic form generator v1.0

## Goals.

I didnt seek for an extremely complex logic in this project but to improve my coding skills, and also make everything with as little hard code as possible. I also wanted to create a good project arquitecture so everything is managed automatically. 

### Tech stack.
- React.js
- Scss (WIP)

### Main components.

- FormGenerator
- FormCreated
- FormInfo

### How it works.

- With `useContext` we manage two diferent states. One for the creation of the form inputs with its parameters and other to print the information gathered when the form created with the previous parameters is filled.

- **FormGenerator** → You choose the input type and edit its attributes. When the submit is done, it creates a template in our first state in useContext following the previosly defined recipe.

- **FormCreated** → It takes the guidelines sent by `FormGenerator` to the _first_ useContext state, and creates our custom form. When this one is filled it sends the values to our _second_ useContext state.

- **FormInfo** → It just takes the info from our second useContext state and prints it.

> Working on Input Radio, checkbox & select to be implemented.

> Status: not finished yet. WIP.
