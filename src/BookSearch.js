import React, { Component } from 'react'
import { search } from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class BookSearch extends Component {
    state = {
        query:'',
        searchBooks: []
    }

    // Called whenever the use types in the search bar
    updateQuery = (query) => {
        this.setState( {query: query} )
        if (query) {
            search(query).then((books) => {
                if (books !== null || books.error !== 'empty query') {
                    this.setState( {searchBooks: books} )
                }
            })
        } else {
            console.log("blank")
            this.setState( {searchBooks: []} )
        }
    }

    // Places the search result books in its respected shelf
    placeSearchedBookOnShelf = (currentBooks) => {
        this.state.searchBooks.forEach((searchedBook) => {
            searchedBook.shelf = 'none'
            for (let currentBook of currentBooks) {
                if (currentBook.id === searchedBook.id) {
                    searchedBook.shelf = currentBook.shelf
                    break
                }
            }
        })
    }

    render () {
        const { changeSelection, currentBooks } = this.props
        const { query, searchBooks } = this.state
        if (this.state.searchBooks.length > 0 && this.state.searchBooks !== null) {
            this.placeSearchedBookOnShelf(currentBooks);
        }
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                      <input
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                      />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchBooks.length > 0 && searchBooks.map((book, index) => (
                            <li key={index}>
                              <Book
                                  book={book}
                                  changeSelection={changeSelection}
                              />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch
