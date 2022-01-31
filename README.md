Hippo React Native Developer Assessment
==============================================

This exercise is designed to assess how you approach tasks required in your
position as a React Native developer at Hippo. We are interested to see
how you work as well as what your final results are; include useful Git commit
messages and comments where you think your code may be unclear.

Please do not include your name or any other self-identifying information in
code or commit messages so we can anonymize your work before reviewing.

Tasks
-----
### (A) Expo

Using the provided Expo application in `/native`:

 1. Fetch post data from the provided Express API.
 2. Display a list of posts. Include the post title, summary, author, and
		publish date in the list.
 3. The list of posts should be displayed in reverse chronological order.
 4. Also list each unique author. Make touching an author filter the list of
		posts by the selected author.
 5. Make each post in the list touchable. When you touch a post, navigate to a
		new screen showing the formatted post body and title. The post body is
		formatted as Markdown.
 6. Include a way to return to the main screen with posts and authors.
 7. Create a test suite for your components. Jest is installed in the Expo
		project and can be run from the `native/` folder with `yarn test`. You do
		NOT need to actually implement the tests, just enough description, comments
		and/or pseudocode to make clear the purpose of each test. We're looking to
		understand how you approach testing and how you think about the failure
		state of your code. We're not interested in making you spend your time
		struggling with potentially unfamiliar apis for a job application.



### (B) Code Review

Using the sample application in `/review`:

 1. Run the Expo application.
 2. Review the React Native code.
 3. Make suggestions on how the example application could be improved. For this
		exercise your suggestions may apply to an entire application, file, or lines
		of code. You may use github PRs to do this, or if you prefer, a list of
		notes specifying enough information (file/line number) that we know to what
		code you are referring.

Environment
-----------
You can use any stable version of Node JS. The base project is configured to use
TypeScript but you may use vanilla JavaScript to complete the tasks.

Coding Standard
---------------
Please use [Prettier](https://prettier.io/) for your code. If your editor is not
already configured to use Prettier, you can format code in the project using:

```sh yarn prettier-write ```

Dependencies
------------
Please use the [Yarn](https://yarnpkg.com/) or
[NPM](https://docs.npmjs.com/cli/npm) tools for dependency
management. You can use any 3rd-party libraries as necessary or as desired in
order to achieve the tasks. The project is currently set up to use Yarn but
you may update it to use NPM if that is your preference.

Commits
-------
Your commit history is important to us! Try to make meaningful commit messages
that show your progress. Remember to not include your name or any other
self-identifying information in your commit messages.

Getting Started With the Express Backend (/api)
-----------------------------------------------
For this exercise a pre-built Express application is provided. The application
runs by default on `localhost:4000` and has the following endpoints:

 - `http://localhost:4000/posts` - returns a JSON-encoded array of blog posts.

### Running the Express Application

```sh
cd api/
yarn install
yarn start
```

You can verify the API is working by visiting http://localhost:4000/posts in
your browser or another HTTP client.

Getting Started with the React Native Frontend (/native)
--------------------------------------------------------
The React Native frontend is a bare Expo application. You will need the Expo
tools installed to work on the app. See https://docs.expo.io/ for instructions
on how to install the Expo CLI tools.

### Running the React Native Application

```sh
cd native/
yarn install
yarn start
```

This will start the web console where you may launch the application on iOS,
Android, or Web.
