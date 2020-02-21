import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../components/Home';
import { getInitialState } from './initialState';

// Configuration for enzyme, fixed.
configure({ adapter: new Adapter() });

// Validate if exist an object in DOM with attribute equals to attr
// TODO: Move to a common
const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`.${attr}`);
  return wrapper;
};

// Create component for tests
const homeTestComponent = (props) => {
  const home = shallow(<Home { ...props } />);
  return home;
};

describe('Home component', () => {
  describe('Have props', () => {
    let component;
    beforeEach(() => {

    });

    // Validate that home screen loads correctly
    it('Should render without errors', () => {
      const props = {
        home: {
          ...getInitialState().home,
        },
      };
      component = homeTestComponent(props);

      const wrapper = findByTestAttr(component, 'container');
      expect(wrapper.length).toBe(1);
    });
  });
});
