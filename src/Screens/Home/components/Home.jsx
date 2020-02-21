import React, { useEffect } from 'react';
import CardList from '../../../Common/Components/CardList';

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
      <div className="search__container">
        <p className={props.home.onSearch ? 'hidden' : 'search__title' }>
            Go ahead, Type a Name
        </p>
        <input
          className="search__input"
          type="text"
          placeholder="Search"
          value={props.home.searchField}
          onChange={(e) => {
              props.setField('searchField', e.target.value);
              props.handleSubmit()
            }
          }
          // onKeyPress={(event) => {
          //   if(event.key === 'Enter'){
          //     props.handleSubmit()
          //   }
          // }}
          // onChange={(e) => props.setField('searchField', e.target.value)}
        />
      </div>
      {props.home.cards.length > 0 && ( <CardList delete={props.deleteItem} cards={props.home.cards} /> )}

    </div>
  );
}

export default Home;