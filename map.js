const companies = [
  { name: 'Ford', ticker: 'F' },
  { name: 'Nvidia', ticker: 'NVDA' },
  { name: 'Alphabet', ticker: 'GOOGL' },
  { name: 'Apple', ticker: 'AAPL' },
  { name: 'Microsoft', ticker: 'MSFT' },
  { name: 'Amazon', ticker: 'AMZN' }
];

const tickers = companies.map(function(company) {
  delete company.name;

  return company;
});

// const tickers = [];
//
// for (let i = 0; i < companies.length; i++) {
//   tickers.push(companies[i].ticker);
// }
//
console.log(tickers);
