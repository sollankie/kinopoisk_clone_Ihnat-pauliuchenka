import React from 'react';
import { SearchInput } from '../styles/components/Search';

const Search: React.FC = () => {
  return (
    <div>
      <SearchInput type="text" placeholder="Search" />
    </div>
  );
};

export default Search;