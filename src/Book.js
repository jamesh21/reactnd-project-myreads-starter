import React, { Component } from 'react'

class Book extends Component {

    render () {
        const { book, changeSelection } = this.props;
        return book != null && (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : ""})` }}></div>
                <div className="book-shelf-changer">
                  <select value={book.shelf} onChange={(event) => changeSelection(event.target.value, book)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">
                  {book.authors ? book.authors.map((author, index) => (
                      book.authors.length > index + 1 ? <span key={index}>{author}, </span> : <span key={index}>{author}</span>
                  )) : "No Author"}
              </div>
            </div>
        )
    }
    }

export default Book
