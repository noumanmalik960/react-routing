# Basics of React Routing 

1. First we have to install react routing and history as:

    npm install history@5 react-router@next react-router-dom@next

2. Now in index.js we have to wrap <App /> components inside <Router></Router> but first we have to import it as 

    import { BrowserRouter as Router } from 'react-router-dom';

3. Now we have to create different pages (componensts) and import them inside App component then do this inside App component

        
    import { Routes, Route } from 'react-router';
    import { Link } from 'react-router-dom';

    # sample components/pages
    import Home from './Home';
    import About from './About';
    import Product from './Product';

    # component to use if wrong address is entered        
    function NotFound() {
    return <div>Url Not Found</div>
    }

    function App() {
    return (
        <div>
        <h1>Welcome</h1>
        <div>
            <Link to="/">Home</Link> {' '}
            <Link to="About">About</Link>

        </div>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="About" element={<About />}></Route>
            <Route path="product/:productId" element={<Product />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
        </div>
    );
    }

    export default App;
