# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1a. Indicate which of the following statements about React are false:

- React is a modern, efficient answer to complex UI applications (true)

- React will only render on the server using Node.js (false)
    React apps are by default made to be client-side rendered, but it is also possible to render react pages on the server (using NodeJS). Server Side Rendering, also called SSR, is the ability of a JavaScript application to render on the server rather than in the browser.
    Resources:
    https://reactjs.org/docs/getting-started.html
    https://codeburst.io/14-frequently-asked-questions-about-reactjs-68fd29e8dfea
    https://www.w3schools.com/whatis/whatis_react.asp

- React is a full stack framework for modern web applications (false)
    React is a front-end framework.

- React is a flexible library that plays the role of V in an MVC framework (true)
    Model–View–Controller is a software design pattern commonly used for developing user interfaces which divides the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user.

    As a User Interface (UI) library for building UI components, React is used to build the view part of the system.

- You should always update a component's state directly using this.state (false)
     You should always do this kind of manipulation with a functional approach, supplying the state and props and returning the new state based on the former, such as using setState()

- React is made up of encapsulated components that manage their own state (false)
    Dumb components such as function components do not have state so they do not manage state.

- React components render HTML (false; JSX?)
    React elements are typically created via JSX.

1b. Add an interesting TRUE fact about React to the list.
- React was developed internally in Facebook and now ReactJs is an Open Source Project developed by Facebook now maintained by Open Source Community

2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer:
    Smart components are the ones with states and their output changes with state. Dumb components are not stateful and will give the same output if given the same input.

    It's useful to know the difference so that we are aware of the dependencies between components. It is good practice to use dumb components as much as possible to avoid create dependencies between components.  

  Researched answer:
    Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. The components themselves only have a render() method (they don’t need any others) and are often just Javascript functions. They don’t have internal state to manage. They wouldn’t know how to change the data they are presenting if they were asked.

    Smart components (or container components) on the other hand keep track of state and care about how the app works. Using the container design pattern, the container components are separated from the presentational components and each handles their own side of things. The container components do the heavy lifting and pass the data down to the presentational components as props. These components also often contain other callback functions that are used to update the state and get passed down to their child components as props.


3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer:
    yarn is a package manager. When calling yarn we are asking it to manage our development environment. Not sure what file will be updated...

  Researched answer:  
    https://yarnpkg.com/lang/en/docs/managing-dependencies/

    Yarn is a package manager for your code. It allows you to use and share code with other developers from around the world. Code is shared through something called a package (sometimes referred to as a module). A package contains all the code being shared as well as a package.json file which describes the package.

    Call "yarn add" to add a dependency. This will automatically add the [package] to your dependencies in your package.json


4. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer:
    The information flow is different. State belongs to the parent component and can be passed to the child components in the form of props, which is short for properties. Props cannot be passed between child components. Child components can use props methods to communicate with parent components by setting the state through methods.

  Researched answer:
    https://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react
    Props and state are related. The state of one component will often become the props of a child component. Props are passed to the child within the render method of the parent as the second argument to React.createElement() or, if you're using JSX, the more familiar tag attributes.


5. How would you explain state to a friend who doesn't know code?

  Your answer:
    State in coding is similar to the generic sense of "state" or "status". It represent the information that is currently available for the program to use. Some programming components are "stateful," meaning they involve operations that change/update information that's available for future operations.

  Researched answer:

  In information technology and computer science, a system is described as stateful if it is designed to remember preceding events or user interactions; the remembered information is called the state of the system.

  Application UIs are dynamic and change over time. That’s why state was created. State allows software to change their output over time in response to user actions, network responses, and anything else, without violating this rule.
