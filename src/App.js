import './App.css';
import { Header } from './component/Header';

const HomeComponent = () => {
  return (
    <div>
      <section className='grid'>
        <div>
          <label for="filterSelect">Filter</label>
          <select id='filterSelect'>
            <option value="">All</option>
            <option value="out">Out of Stock</option>
            <option value="low">Low Stock</option>
          </select>
        </div>
        <div>
          <label for="sort-select">Sort By:</label>
          <select id='sort-select'>
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="stock">Stock</option>
          </select>
        </div>
        <div>
          <label for="direction-select">Direction:</label>
          <select id='direction-select'>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </section>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <header>
        <Header />
        <hgroup className='heading'>
          <h1>Warehourse</h1>
          <p>manage item in inventory</p>
        </hgroup>
      </header>
      <main>
        <HomeComponent />
      </main>
    </div>
  );
}

export default App;
