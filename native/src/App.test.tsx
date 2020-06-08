import React from 'react';
import renderer, { act, create } from 'react-test-renderer';


import { App } from './App';
import PostDetails from './components/PostDetails';
import PostItem from './components/postItem';
import PostList from './components/postList';

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
          publishedDate={mockPostData[0].published}
          handleOnPressAuthor={mockPostData[0].handleOnPressAuthor}
          handleOnPressPost={mockPostData[0].handleOnPressPost}
        />
      );
    });

    expect(root.toJSON()).toMatchSnapshot();
  });
});

describe('<PostList />', () => {
  test('renders correctly!', () => {
    const tree = renderer.create(<PostList />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <View
        style={
          Object {
            "flex": 1,
          }
        }
      >
        <RCTScrollView
          disableVirtualization={false}
          getItem={[Function]}
          getItemCount={[Function]}
          horizontal={false}
          initialNumToRender={10}
          keyExtractor={[Function]}
          maxToRenderPerBatch={10}
          numColumns={1}
          onContentSizeChange={[Function]}
          onEndReachedThreshold={2}
          onLayout={[Function]}
          onMomentumScrollEnd={[Function]}
          onScroll={[Function]}
          onScrollBeginDrag={[Function]}
          onScrollEndDrag={[Function]}
          removeClippedSubviews={false}
          renderItem={[Function]}
          scrollEventThrottle={50}
          stickyHeaderIndices={Array []}
          style={
            Object {
              "width": "100%",
            }
          }
          updateCellsBatchingPeriod={50}
          viewabilityConfigCallbackPairs={Array []}
          windowSize={21}
        >
          <View />
        </RCTScrollView>
      </View>
    `);
  });
});

describe('<PostDetails />', () => {
  test('it renders correctly when there are multiple items', () => {
    //TODO: figure out how to pass in navigation and route props to testing

  });
});
