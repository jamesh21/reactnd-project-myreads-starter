import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
class BookShelves extends Component {
    state = {
        wantToShelf: [],
        readShelf: [],
        currentShelf: []
    }
    placeBooks = (books) => {
        books.forEach((book) => {
            if (book.shelf === 'currentlyReading') {
                this.state.currentShelf.push(book)
            } else if (book.shelf === 'wantToRead') {
                this.state.wantToShelf.push(book)
            } else {
                this.state.readShelf.push(book)
            }
        })
    }
    render() {
        const { books } = this.props
        console.log(books)
        this.placeBooks(books)
        console.log(this.state.wantToShelf)
        console.log(this.state.readShelf)
        console.log(this.state.currentShelf)
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
                        {this.state.currentShelf.map((book, index) => (
                            <li key={index}><Book book={book}/></li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                          {this.state.wantToShelf.map((book, index) => (
                              <li key={index}><Book book={book}/></li>
                          ))}
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                          {this.state.readShelf.map((book, index) => (
                              <li key={index}><Book book={book}/></li>
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
