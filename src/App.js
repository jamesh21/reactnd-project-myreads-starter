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
     books: []

  }
  componentDidMount() {
      BooksAPI.getAll().then((books) => {
          // console.log(books)
          this.setState( {books} );
      })
  }

  render() {
    return (
      <div className="app">
          <Route exact path="/" render={() => (
              <BookShelves
                books={this.state.books}
              />
          )}/>
          <Route path="/search" render={() => (
              <BookSearch />
          )}/>
     </div>
        // {this.state.showSearchPage ?
        //     <BookSearch/> :
        //     <BookShelves/>
        // }

  )}
}

export default BooksApp
