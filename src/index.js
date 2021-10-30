import React from 'react';
import ReactDom from 'react-dom';

import './index.css'

const firstBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth'
}

const secondBook = {
    img: 'https://images-fe.ssl-images-amazon.com/images/I/510g8NLbpNL._SX218_BO1,204,203,200_QL40_ML2_.jpg',
    title: 'Our Class is a Family',
    author: 'Shannon Olsen'
}

function BookList() {
    return (
        <section className="booklist">
            <Book title={firstBook.title} author={firstBook.author} image={firstBook.img}>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </Book>
            <Book title={secondBook.title} author={secondBook.author} image={secondBook.img}/>
        </section>);
}

//object descructering in javascript
//const Book = ({image, title, author, children}) => {
const Book = (props) => {
    const {image, title, author} = props
    return <article className="book">
        <Image image={image}/>
        <Title title={title}/>
        <Author name={author}/>
        {props.children}
    </article>
}

const Image = (props) =>
    (<img src={props.image} alt=''/>);

const Title = (props) => <h1>{props.title}</h1>
const Author = (props) => <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>{props.name}</h4>

ReactDom.render(<BookList/>, document.getElementById('root'));