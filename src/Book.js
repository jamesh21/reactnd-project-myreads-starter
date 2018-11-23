import React, { Component } from 'react'

class Book extends Component {
    changeSelection = () => {
        console.log("changed");
    }
    render () {
        const { book } = this.props;
        // console.log(book);
        return book != null && (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select onChange={this.changeSelection}>
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
                  {book.authors.map((author, index) => (
                      book.authors.length > index + 1 ? <span key={index}>{author}, </span> : <span key={index}>{author}</span>
                  ))}
              </div>
            </div>
        )
    }
}

export default Book
