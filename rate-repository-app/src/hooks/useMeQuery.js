import { useState, useEffect } from 'react'; 
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useMeQuery = () => {
    const [user, setUser] = useState('');
    const { data, error, loading, refetch } = useQuery(ME, {
      fetchPolicy: 'cache-and-network'
    });
    if (error) {
      console.log(`Error: ${error}`);
    }
    useEffect(() => {
      if(!loading) {
        setUser(data)
      }
    }, [loading]);
    
    return { user, refetch: refetch }
}



export default useMeQuery;