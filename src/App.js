import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import ContactItem from './components/ContactItem'

import './App.css'

const initialBooksList = [
  {
    id: uuidv4(),
    name: 'Harry porter',
    url: 'https://m.media-amazon.com/images/I/5165He67NEL.jpg',
  },
  {
    id: uuidv4(),
    name: 'The Lord of Rings',
    url:
      'https://cdn.lifehack.org/wp-content/uploads/2022/11/51wEd2FprXL._SL500_.webp',
  },
  {
    id: uuidv4(),
    name: 'The Book Theif',
    url:
      'https://cdn.lifehack.org/wp-content/uploads/2022/11/41LxDicrz2L._SL500_.webp',
  },
]

class App extends Component {
  state = {
    booksList: initialBooksList,
    name: '',
    url: '',
  }

  onAddContact = event => {
    event.preventDefault()
    const {name, url} = this.state
    const newBook = {
      id: uuidv4(),
      name,
      url,
    }

    this.setState(prevState => ({
      booksList: [...prevState.booksList, newBook],
      name: '',
      url: '',
    }))
  }

  onChangeurl = event => {
    this.setState({url: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, url, booksList} = this.state
    return (
      <div className="app-container">
        <h1>Famous Books</h1>
        <div className="responsive-container">
          <form className="contact-form-container" onSubmit={this.onAddContact}>
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Name"
            />
            <input
              className="input"
              value={url}
              onChange={this.onChangeurl}
              placeholder="url"
            />
            <button type="submit" className="button">
              Add Book
            </button>
          </form>
          <ul className="contacts-table">
            {booksList.map(eachContact => (
              <ContactItem key={eachContact.id} BookDetails={eachContact} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
