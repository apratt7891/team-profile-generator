const fs = require('fs');


const profileDataArgs = process.argv.slice(2, process.argv.length);
const gname = profileDataArgs[0];
const github = profileDataArgs[1];


const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

fs.writeFile('index.html', generatePage(gname, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });



  