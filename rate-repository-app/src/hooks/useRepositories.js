import { useState, useEffect } from 'react'; 
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';


const useRepositories = () => {
    const [repositories, setRepositories] = useState();
    const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network'
    });
    if (error) {
        console.log(`Error: ${error}`);
    }
    useEffect(() => {
        if(!loading) {
            setRepositories(data.repositories);
        }
    }, [loading])
    return { repositories, loading, refetch: refetch};
}

export default useRepositories;