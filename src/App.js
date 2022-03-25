import React,{Suspense, lazy} from 'react';
import './App.scss';
const SearchInput = React.lazy(()=> import('./components/search_input/SearchInput'));
// import Cards from './components/searchCards/Cards';
// import SearchInput from './components/search_input/SearchInput';

function App() {
  return (
    <div className="App main-wrapper">
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Cards/> */}
        <SearchInput/>
      </Suspense>
      
      
    </div>
  );
}

export default App;
