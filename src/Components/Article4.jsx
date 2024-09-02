import React from 'react';


const ArticleContent = ({ text, text1 }) => (

  <div >
     <h2>Introduction</h2>
          <p>React is a powerful JavaScript library for building dynamic and interactive user interfaces. It allows
            developers to create single-page applications with a component-based architecture, making it easier to
            manage and scale web projects. This guide will help you get started with React and understand the
            fundamentals of creating dynamic sites.</p>

          <h2>1. Getting Started with React</h2>

          <h3>1.1. What is React?</h3>
          <p>React is a JavaScript library developed by Facebook for building user interfaces. It enables developers to
            build reusable UI components and manage application state efficiently.</p>

          <h3>1.2. Why Use React?</h3>
          <ul>
            <li><strong>Component-Based Architecture:</strong> React's component-based structure promotes reusability
              and easier maintenance.</li>
            <li><strong>Declarative Syntax:</strong> React's declarative syntax makes it easier to reason about the
              application state and UI.</li>
            <li><strong>Virtual DOM:</strong> React uses a virtual DOM to efficiently update and render components,
              improving performance.</li>
          </ul>

          <h2>2. Setting Up Your React Environment</h2>

          <h3>2.1. Installing Node.js and npm</h3>
          <p>To work with React, you'll need Node.js and npm (Node Package Manager). Download and install them from the
            <a href="https://nodejs.org/" target="_blank">Node.js website</a>.</p>

          <h3>2.2. Creating a New React Project</h3>
          <p>Use the Create React App tool to set up a new React project quickly:</p>
          <pre><code>npx create-react-app my-app
    cd my-app
    npm start</code></pre>
          <p>This will create a new React project named <code>my-app</code> and start a development server.</p>

          <h2>3. Understanding React Basics</h2>

          <h3>3.1. Components</h3>
          <p>React applications are built using components. Components are JavaScript functions or classes that return
            JSX (JavaScript XML) to define the UI.</p>
          <pre><code>{`// Functional Component
    function App() {
        return <h1>Hello, React!</h1>;
    }
    
    // Class Component
    class App extends React.Component {
        render() {
            return <h1>Hello, React!</h1>;
        }
          }`}</code></pre>

          <h3>3.2. JSX</h3>
          <p>JSX is a syntax extension that allows you to write HTML-like code within JavaScript. It makes it easier to
            define the structure of your UI.</p>
          <pre><code>const element = <h1>Hello, world!</h1>;</code></pre>

          <h3>3.3. Props and State</h3>
          <ul>
            <li><strong>Props:</strong> Props (short for properties) are used to pass data from parent to child
              components.</li>
            <li><strong>State:</strong> State is used to manage data that changes over time within a component.</li>
          </ul>
          <pre><code>{`// Example of props
    function Greeting(props) {
        return <h1>Hello, {props.name}!</h1>;
    }
    
    // Example of state
    class Counter extends React.Component {
        constructor(props) {
            super(props);
            this.state = { count: 0 };
        }
    
        render() {
            return (
                <div>
                    <p>Count: {this.state.count}</p>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                        Increment
                    </button>
                </div>
            );
        }
    }`}</code></pre>

          <h2>4. Building Your First React App</h2>

          <h3>4.1. Creating Components</h3>
          <p>Create new components by defining JavaScript functions or classes. Organize components in separate files
            for better structure.</p>

          <h3>4.2. Handling Events</h3>
          <p>React allows you to handle events such as clicks, form submissions, and keyboard input:</p>
          <pre><code>{`function handleClick() {
        alert('Button clicked!');
    }
    
    function App() {
        return <button onClick={handleClick}>Click Me</button>;
    }`}</code></pre>

          <h3>4.3. Managing Application State</h3>
          <p>Use React's state management to keep track of data and respond to user interactions. Consider using state
            management libraries like Redux or Context API for more complex applications.</p>

          <h2>5. Advanced React Concepts</h2>

          <h3>5.1. React Hooks</h3>
          <p>Hooks are functions that let you use state and other React features in functional components. Common hooks
            include <code>useState</code> and <code>useEffect</code>.</p>
          <pre><code>{`import React, { useState, useEffect } from 'react';
    
    function Example() {
        const [count, setCount] = useState(0);
    
        useEffect(() => {
            document.title = Count: {count};
        }, [count]);
    
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
        );
            
        
    }`}</code></pre>

          <h3>5.2. React Router</h3>
          <p>React Router is a library for handling routing in React applications. It enables navigation between
            different views or pages in a single-page application.</p>
          <pre><code>{`import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    
    function App() {
        return (
          
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>
        );
    }`}</code></pre>

          <h2>6. Best Practices for React Development</h2>

          <h3>6.1. Code Organization</h3>
          <ul>
            <li><strong>Component Structure:</strong> Keep components small and focused on a single task.</li>
            <li><strong>File Organization:</strong> Use a consistent file structure for components, styles, and assets.
            </li>
          </ul>

          <h3>6.2. Performance Optimization</h3>
          <ul>
            <li><strong>Memoization:</strong> Use <code>React.memo</code> and <code>useMemo</code> to optimize
              performance by avoiding unnecessary re-renders.</li>
            <li><strong>Code Splitting:</strong> Implement code splitting using <code>React.lazy</code> and
              <code>React.Suspense</code> to improve load times.</li>
          </ul>

          <h2>7. Resources for Further Learning</h2>

          <h3>7.1. Books</h3>
          <ul>
            <li><strong>"React Up & Running" by Stoyan Stefanov:</strong> A practical guide to building React
              applications.</li>
            <li><strong>"Learning React" by Alex Banks and Eve Porcello:</strong> A comprehensive introduction to React
              and its ecosystem.</li>
          </ul>

          <h3>7.2. Online Tutorials</h3>
          <ul>
            <li><strong>React Official Documentation:</strong> The official React docs provide in-depth tutorials and
              guides.</li>
            <li><strong>YouTube Channels:</strong> Channels like "Traversy Media" and "The Net Ninja" offer React
              tutorials and projects.</li>
          </ul>

          <h2>8. Conclusion</h2>
          <p>React is a powerful tool for building dynamic and interactive web applications. By understanding its core
            concepts, practicing with real projects, and utilizing available resources, you can master React and create
            high-quality user interfaces.</p>

          <p><strong>Happy coding!</strong></p>
  </div>
);

const Article4 = () => (
  <div>
    <ArticleContent  />
  </div>
);

export default Article4;
