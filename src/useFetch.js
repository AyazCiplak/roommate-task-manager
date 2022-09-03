import { useState, useEffect } from 'react';

const useFetch = ( url ) => {
    
    //Gets filled with data from JSON file
    const [tasks, setTasks] = useState(null)

    const [tasksPending, setTasksPending] = useState(true);
    const [error, setError] = useState(null);

    //Fetches data from taskdb JSON file (note: must be running on port 8000)
    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error("Data could not be fetched for that resource.")
            }
            return res.json()
        })
        .then(data => {
            setTasksPending(false);
            setTasks(data); 
            setError(null);
        })
        .catch(err => {
            setTasksPending(false);
            setError(err.message);
    })
    }, [url]);

    return { tasks, tasksPending, error }

}

export default useFetch;