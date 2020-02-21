import React, { useEffect } from 'react';
import CardList from '../../../Common/Components/CardList';
import SearchForm from '../../../Common/Components/SearchForm';

function Home(props) {

  useEffect(() => {
    props.getData();
  }, []);

  return (
    <div className="container">
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>
      {props.home.isFetching && (
        <div className="spinner-container">
          <div className="spinner-border custom-spinner" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <SearchForm
        onSearch={props.home.onSearch}
        searchField={props.home.searchField}
        setField={props.setField}
        handleSubmit={props.handleSubmit}
      />
      {props.home.cards.length > 0 && ( <CardList delete={props.deleteItem} cards={props.home.cards} /> )}

    </div>
  );
}

export default Home;