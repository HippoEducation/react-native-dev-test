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
    published: new Date('2015-12-14T21:09:00+0000'),
  },
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: {
      id: '122',
      name: 'JK Rowling',
    },
    body: '# Three best friends taking on the world',
    published: new Date('2015-12-15T22:17:00+0000'),
  },
];

describe('<App />', () => {
  test('renders without crashing', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).not.toBeNull();
  });
});

describe('<PostComponent />', () => {
  test('checks to make sure nothing extra is rendered in PostItem component ', () => {
    let root;
    act(() => {
      root = create(
        <PostItem
          title={mockPostData[0].title}
          author={mockPostData[0].author}
          body={mockPostData[0].body}
          publishedDate={mockPostData[0].published}
        />
      );
    });

    expect(root.toJSON()).toMatchSnapshot();

    act(() => {
      root = create(
        <PostItem
          title={mockPostData[1].title}
          author={mockPostData[1].author}
          body={mockPostData[1].body}
          publishedDate={mockPostData[1].published}
        />
      );
    });

    expect(root.toJSON()).toMatchSnapshot();
  });
});
