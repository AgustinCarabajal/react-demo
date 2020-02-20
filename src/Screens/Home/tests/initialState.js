export function getInitialState() {
  return {
    home: {
      onSearch: false,
      redirect: false,
      isFetching: false,
      dataList: [],
      cards: [],
      searchField: '',
    },
  };
}
