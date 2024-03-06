import './App.css';
import UserProfile from './components/user/UserProfile';
import ProductCard from './components/product/ProductCard';

function App() {
  return (
    <div className='app-div'>
      <p>User Profile Component:</p>
      <UserProfile name='Siya' email='jabbarovasia@gmail.com'/>
      <p>Product Card Component:</p>
      <ProductCard name='Macbook Pro' price='4899.99' desc='M3 pro'/>
    </div>
  );
}

export default App;
