import React from 'react';
import ReactDom from 'react-dom';

import './index.css'

const books = [
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
        title: 'I Love You to the Moon and Back',
        author: 'Amelia Hepworth'
    },
    {
        img: 'https://images-fe.ssl-images-amazon.com/images/I/510g8NLbpNL._SX218_BO1,204,203,200_QL40_ML2_.jpg',
        title: 'Our Class is a Family',
        author: 'Shannon Olsen'
    }
];

function BookList() {
    return (
        <section className="booklist">
            {books.map(book => <Book book={book} />)}
        </section>);
}

//object descructering in javascript
//const Book = ({image, title, author, children}) => {
const Book = (props) => {
    const {img, title, author} = props.book
    return <article className="book">
        <Image image={img}/>
        <Title title={title}/>
        <Author name={author}/>
    </article>
}

const Image = (props) =>
    (<img src={props.image} alt=''/>);

const Title = (props) => <h1>{props.title}</h1>
const Author = (props) => <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>{props.name}</h4>

ReactDom.render(<BookList/>, document.getElementById('root'));