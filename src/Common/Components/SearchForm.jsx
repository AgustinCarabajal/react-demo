import React from 'react';

export default function SearchForm(props) {
  return (
    <div className="search__container">
      <p className={props.onSearch ? 'hidden' : 'search__title' }>
          Go ahead, Type a Name
      </p>
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        value={props.searchField}
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
  )
}