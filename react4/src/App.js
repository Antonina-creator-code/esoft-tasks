import React, { useEffect, useState } from 'react';
const CountdownTimer = ({ initialSeconds }) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    useEffect(() => {
        let intervalId = null;
        if (seconds > 0) {
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        } else {
            console.log ("Timer counted down");
        }
        return () => clearInterval(intervalId);
    }, [seconds]);
    return <h1>{seconds}</h1>;
};
const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, []);
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>Error: {error.message}</h1>;
    }
    return (
        <div>
            <h1>List of users:</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}({user.email})</li>
                ))}
            </ul>
        </div>
    );
};
const WindowSize = () => {
    const [_windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div>
            <h2>Window size:</h2>
            <p>Width: {_windowSize.width} pixels</p>
            <p>Height: {_windowSize.height} pixels</p>
        </div>
    );
};
export default function App() {
    return (
        <div>
            <CountdownTimer initialSeconds={10} />
            <UserList />
            <WindowSize />
        </div>
    )
}