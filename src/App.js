import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookSearch from './BookSearch'
import BookShelves from './BookShelves'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: []
    }

    // Called to update the shelf the book is on currently;
    changeSelection = (shelf, book) => {
      BooksAPI.update(book, shelf).then(() => {
          this.getBooks()
      })
    }

    // Gets all the books from the API
    getBooks = () => {
      BooksAPI.getAll().then((books) => {
          this.setState( {books} )
      })
    }

    componentDidMount() {
        this.getBooks()
    }

    render() {
        return (
          <div className="app">
              <Route exact path="/" render={() => (
                  <BookShelves
                    books={this.state.books}
                    changeSelection={this.changeSelection}
                  />
              )}/>
              <Route path="/search" render={() => (
                  <BookSearch
                    currentBooks={this.state.books}
                    changeSelection={this.changeSelection}
                  />
              )}/>
         </div>
    )}
}

export default BooksApp
