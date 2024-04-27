import React, { useState, useEffect } from 'react';

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/api/student');
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            <nav>
                <h1>Learning _101 Full Stack (MERN)</h1>
            </nav>
            <main>
                {data ? (
                    
                    <p>{data[1].email}</p>
                ) : (
                    <p>Loading...</p>
                )}
            </main>
            <footer>
                <p>Barrack Amuyunzu @ full Stack L:earing</p>
            </footer>
        </div>
    );
};

export default Home;