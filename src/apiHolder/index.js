const apiData = async (gql) => {
  const response = await fetch('http://localhost:4000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: gql,
    }),
  });
  const data = await response.json();
  return data;
};

export default apiData;
