const theQuery = `
query allCategories {
    currencies{
        symbol
        label
      }
  }
`;

const currencies = () => {
    fetch("http://localhost:4000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                query: theQuery
            })
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            // console.log(data)
            const { currencies } = data.data
            console.log(currencies)
            return currencies
        });
}

export default currencies;
