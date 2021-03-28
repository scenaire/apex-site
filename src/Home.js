import { useState } from 'react';

const Home = () => {

    const [writings, setWritings] = useState([
        { title: 'Chapter 1 - in the darkest night', body: 'Lorem ipsum...', author: 'fang', id: 1},
        { title: 'Chapter 2 - cheesecake', body: 'Lorem ipsum...', author: 'fang', id: 2},
        { title: 'Chapter 3 - stand in my ground', body: 'Lorem ipsum...', author: 'fang', id: 3},
    ]);

    return ( 
        <div className="home">
            {writings.map((writing) => (
                <div className="writing-preview" key={writing.id}>
                    <h2>{writing.title}</h2>
                    <p>written by {writing.author}</p>
                    <p>{writing.body}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;
