const mottos = [
  { company: 'Ford', motto: 'Quality is job one' },
  { company: 'IBM', motto: 'Think' },
  { company: 'Google', motto: 'Don\'t be evil'  },
  { company: 'Adidas', motto: 'Impossible is nothing' },
  { company: 'KFC', motto: 'Finger Lickin\' Good' },
  { company: 'Nokia', motto: 'Connecting People' }
];

mottos.forEach(function(item) {
});

for (const item of mottos) {
  console.log(`${item.company}'s motto is: "${item.motto}"`);
}
