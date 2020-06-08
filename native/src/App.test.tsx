import React from 'react';
import renderer, { act, create } from 'react-test-renderer';

import { App } from './App';
import PostItem from './components/postItem';

const mockPostData = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: {
      id: '123',
      name: 'JK Rowling',
    },
    body: '# Three best friends taking on the world',
    published: new Date(),
    handleOnPressAuthor: () => {},
    handleOnPressPost: () => {},
  },
];

describe('<App />', () => {
  test('renders without crashing', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).not.toBeNull();
  });
});

describe('<PostComponent />', () => {
  test('check to make sure nothing extra is rendered in PostItem component', () => {
    let root;
    act(() => {
      root = create(
        <PostItem
          title={mockPostData[0].title}
          author={mockPostData[0].author}
          body={mockPostData[0].body}
          publishedAt={mockPostData[0].published}
          handleOnPressAuthor={mockPostData[0].handleOnPressAuthor}
          handleOnPressPost={mockPostData[0].handleOnPressPost}
        />
      );
    });

    expect(root.toJSON()).toMatchSnapshot();
  });
});

//TODO: I couldn't get this to work with typescript and passing in the route props. 
//I would love any feedback on this part because I'm stumped
describe('<PostDetails />', () => {
  test('it renders correctly when there is one item passed', () => {

    // const params = {
    //   route: {
    //     params: {
    //       title: 'Hey',
    //       body: 'Testteststst',
    //     },
    //   },
    // };
    // const tree = renderer.create(<PostDetails route={route: RouteProp<params, "Details">} />)
    // expect(tree).toMatchSnapshot();
  });

    // test('it renders correctly when there are multiple items passed', () => {
    //   const params = {
    //     route1: {
    //       params: {
    //         title: 'Hey',
    //         body: 'Testteststst',
    //       },
    //     },
    //     route2: {
    //       params: {
    //         title: 'Yo',
    //         body: 'Testtestststtest',
    //       },
    //     },
    //   };
    //   const tree = renderer.create(<PostDetails route={route: RouteProp<params, "Details">} />)
    //   expect(tree).toMatchSnapshot();
    // });

});
