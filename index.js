const fs = require('fs');


const generatePage = require ('.src/generatePage');

fs.writeFile('index.html', generatePage(gname, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });



  