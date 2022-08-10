import { useQuery, gql } from '@apollo/client';

const getData = gql`
    query {
    categories
    category
    product
    currencies
    }
`;

function API() {
    const { data } = useQuery(getData)
    return data
}

export default API;
