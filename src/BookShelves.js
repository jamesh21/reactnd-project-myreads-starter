import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
class BookShelves extends Component {

    state = {
        // wantToRead: [],
        // read: [],
        // currentlyReading: []
    }

    // placeBooks = (books) => {
    //     books.forEach((book) => {
    //         if (book.shelf === 'currentlyReading') {
    //             this.state.currentlyReading.push(book)
    //         } else if (book.shelf === 'wantToRead') {
    //             this.state.wantToRead.push(book)
    //         } else {
    //             this.state.read.push(book)
    //         }
    //     })
    // }

    // changeSelection = (newSelection, book ) => {
    //     // console.log(newSelection)
    //     const currentSelection = book.shelf
    //
    //     book.shelf = newSelection
    //      BooksAPI.update(book, newSelection).then(() => {
    //          this.setState(state => ({
    //              [currentSelection]: state[currentSelection].filter(currentSelectShelf => currentSelectShelf.title !== book.title),
    //              [newSelection]: state[newSelection].concat( [book] )
    //          }))
    //      })
    //
    //
    // }

    render() {
        const { wantToRead, read, currentlyReading, changeSelection } = this.props
        // console.log(books)
        // this.placeBooks(books)
        // console.log(this.state.wantToRead)
        // console.log(this.state.read)
        // console.log(this.state.currentlyReading)
        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {currentlyReading.map((book, index) => (
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
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                          {wantToRead.map((book, index) => (
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
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                          {read.map((book, index) => (
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
                </div>
              </div>

              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>

        )
    }
}

export default BookShelves
