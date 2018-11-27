import React, { Component } from 'react'
import { search } from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class BookSearch extends Component {
    state = {
        query:'',
        books: []
    }
    updateQuery = (query) => {
        this.setState( {query: query} )
        if (query) {
            search(query).then((books) => {
                console.log(books)
                if (books !== null || books.error !== 'empty query') {
                    this.setState( {books: books} )
                }

            })
        } else {
            this.setState( {books: []} )
        }

        // if (query === '') {
        //     this.setState( {books: []} )
        // } else {
        //     this.searchForBook()
        //     this.setState( {query: query.trim()} )
        // }

    }


    // searchForBook = () => {
    //     BooksAPI.search(this.state.query).then((books) => {
    //         if (books !== undefined && books.error !== 'empty query') {
    //             this.setState( {books: books})
    //         } else {
    //             this.setState( {books: []} )
    //         }
    //
    //         console.log(this.state.books)
    //     })
    // }

    render () {
        const { changeSelection } = this.props
        const { query, books } = this.state
        return (

            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                      {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                      */}
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
                        {books.length > 0 && books.map((book, index) => (
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
