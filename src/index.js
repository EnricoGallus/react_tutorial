import React from 'react';
import ReactDom from 'react-dom';

import './index.css'

const books = [
    {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
        title: 'I Love You to the Moon and Back',
        author: 'Amelia Hepworth'
    },
    {
        id: 2,
        img: 'https://images-fe.ssl-images-amazon.com/images/I/510g8NLbpNL._SX218_BO1,204,203,200_QL40_ML2_.jpg',
        title: 'Our Class is a Family',
        author: 'Shannon Olsen'
    },
    {
        id: 3,
        img: 'https://images-na.ssl-images-amazon.com/images/I/51CPNIRSWeL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
        title: 'Atomic Habits',
        author: 'James Clear'
    }
];

function BookList() {
    return (
        <section className="booklist">
            {books.map((book, index) => <Book key={book.id} {...book} />)}
        </section>);
}

//object descructering in javascript
//const Book = ({image, title, author, children}) => {
const Book = (props) => {
    const clickHandler = (e) => {
        console.log(e)
        console.log(e.target)
        alert('Hello World')
    }
    const moreComplexExample = (author) => {
        console.log(author)
    }
    const {img, title, author} = props
    return <article className="book" onMouseOver={() => { console.log(title)}}>
        <Image image={img}/>
        <Title title={title}/>
        <Author name={author}/>
        <button type='button' onClick={clickHandler}>reference example</button>
        <button type='button' onClick={() => moreComplexExample(author)}>more complex example</button>
    </article>
}

const Image = (props) =>
    (<img src={props.image} alt=''/>);

const Title = (props) => <h1 onClick={() => console.log(props.title)}>{props.title}</h1>
const Author = (props) => <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>{props.name}</h4>

ReactDom.render(<BookList/>, document.getElementById('root'));