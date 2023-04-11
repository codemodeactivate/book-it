# cwru-project-one

Case Western Coding Bootcamp Group Project # 1

## Team Members
[Claudia Gillota](https://github.com/cgillota)
[Christopher Schmidt](https://github.com/cschmidt216)

## Demo

[Live Demo](https://codemodeactivate.github.io/book-it/)

![Screenshot](./assets/img/screenshot.gif)

## Description
This is our first bootcamp project in which we're required to use at least two APIs to make an interactive website that makes use of the user's local storage. We're also to use a CSS framework other than Bootstrap. We decided on Bulma because it had good documentation and positive reviews.

## Known Issues
~~Sometimes books are displayed, especially on the Have Read shelf, are cut off and shown floating through the top of the shelf area.~~

## Future Development Ideas
- [ ] Make it so that the shelves that are displayed show books immediately upon page load. Will require some code refactoring and more template literals.
- [ ] Add logic for if the user searches for a book they're already reading, there's a UI indication
- [ ] Should not be able to duplicate books on any list
- [ ] Send lists to friends
- [ ] Create way for user to login and store data on server
- [ ] User should be able to send list(s) to their friends.
- [ ] Count how many books are read over x time
- [X] Add functionality to rate & store rating of book that's read
- [ ] Users should be able to rate the books they've read and have that stored locally
- [ ] Mobile and other screen size responsiveness
- [ ] Error handling


## Notes


## Credits
[Inspiration for bookshelf implementation](https://www.codeply.com/go/bp/7h2JKXv40U)

[Book Stuff](https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/)

## User Story

```md
AS A book reader
I WANT keep track of what I've read, am reading, or want to read
SO THAT I can stay organized and reflect and look back at notes
```

## Acceptance Criteria

```md
Users can search for books using the Google Books API and Goodreads API.
Users can view book details, including the synopsis and average ratings, for each search result.
Users can save books to their "Want to Read" list.
Users can mark books as "Read" and provide their own rating and notes for each book.
Users can mark books as "Currently Reading."
Users can navigate through their saved books on a visual bookshelf.
All saved information about books, including "Want to Read," "Read," and "Currently Reading" statuses, ratings, and notes, is stored locally using local storage.
The bookshelf layout is visually appealing and easy to navigate.
The application is responsive and functions well on desktop and mobile devices.
The application accurately retrieves and displays book information from both the Google Books API and Goodreads API.
The application allows users to search for books by title, author, and ISBN.
The application has a user-friendly interface with clear and intuitive controls.
The application is secure and protects user data from unauthorized access or modification.
The application has clear error handling and provides helpful feedback to users if any errors occur.
The application loads quickly and efficiently, even when displaying large numbers of books on the bookshelf.

```

## Mock-Up
![Rough Wireframe](./assets/img/rough-mock-up.png)
