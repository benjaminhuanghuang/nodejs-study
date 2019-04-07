
const yargs = require('yargs');

//
const notes = require('./notes');


// Create add command
yargs.command(
  {
    command: 'add',   // handle: node app.js add --title="abc"
    describe: 'Add new note',
    builder:{
      title:{
        describe: 'Note title',
        demandOption : true,
        type: 'string'
      },

      body:{
        describe: 'Note body',
        demandOption : true,
        type: 'string'
      }
    },
    handler: function (argv) {
      notes.addNote(argv.title, argv.body);
    }
  }
);

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder:{
    title:{
      describe: 'Note title',
      demandOption : true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function () {
    console.log('Listing out all notes')
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading a note')
  }
})

yargs.parse();