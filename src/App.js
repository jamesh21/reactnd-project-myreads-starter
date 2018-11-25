import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookSearch from './BookSearch'
import BookShelves from './BookShelves'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     books: [],
     wantToRead: [],
     read: [],
     currentlyReading: []

  }

  placeBooks = (books) => {
      books.forEach((book) => {
          if (book.shelf === 'currentlyReading') {
              this.state.currentlyReading.push(book)
          } else if (book.shelf === 'wantToRead') {
              this.state.wantToRead.push(book)
          } else {
              this.state.read.push(book)
          }
      })
  }

  changeSelection = (newSelection, book ) => {
      if (book.shelf !== newSelection) {
          const currentSelection = book.shelf
          book.shelf = newSelection
          if (newSelection === 'none') {
              this.removeFromShelf(book, currentSelection)
          } else {
              this.moveToDiffShelf(book, currentSelection, newSelection)

          }
      }
  }
  moveToDiffShelf = (book, currentSelection, newSelection) => {
      BooksAPI.update(book, newSelection).then(() => {
          this.setState(state => ({
              [currentSelection]: state[currentSelection].filter(currentSelectShelf => currentSelectShelf.title !== book.title),
              [newSelection]: state[newSelection].concat( [book] )
          }))
      })
  }
  removeFromShelf = (book, currentSelection) => {
      BooksAPI.update(book, 'none').then(() => {
          this.setState(state => ({
              [currentSelection]: state[currentSelection].filter(currentSelectShelf => currentSelectShelf.title !== book.title)
          }))
      })

  }
  componentDidMount() {
      BooksAPI.getAll().then((books) => {
          this.placeBooks(books)
          this.setState( {books} )

      })
  }

  render() {
    return (
      <div className="app">
          <Route exact path="/" render={() => (
              <BookShelves
                wantToRead={this.state.wantToRead}
                read={this.state.read}
                currentlyReading={this.state.currentlyReading}
                changeSelection={this.changeSelection}
              />
          )}/>
          <Route path="/search" render={() => (
              <BookSearch />
          )}/>
     </div>

  )}
}

export default BooksApp
