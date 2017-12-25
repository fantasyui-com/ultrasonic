const samples = require(__dirname + '/index.json');

const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());


samples.data = samples.data.map(i=>{

  i.name = i.name.replace(/^guit/, 'Guitar')
  i.name = i.name.replace(/^guit/, 'Guitar')

  i.name = i.name.replace( /([0-9]+)/g, " #$1")

  i.name = i.name.replace(/^elec/, 'Electric Sound')

  i.name = i.name.replace(/^guit/, 'Guitar')
  i.name = i.name.replace(/^perc/, 'Percussion')
  i.name = i.name.replace(/^sn/, 'Snare')
  i.name = i.name.replace(/^drum/, 'Drums')
  i.name = i.name.replace(/^bd/, 'Drums Bass')
  i.name = i.name.replace(/^bd/, 'Drums Bass')

  i.name = i.name.replace(/^drum_bass/, 'Bass Drums')

  i.name = i.name.replace(/_/g, ' ')
  i.name = capitalizeEveryWord(i.name);

  return i;
});

console.log(JSON.stringify(samples, null, '  '))
