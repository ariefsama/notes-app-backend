// const getAllNotesHandler = require('./handler');
// const {addNoteHandler} = require('./handler.js');
import { 
  addNoteHandler,
  editNoteByIdHandler, 
  getAllNotesHandler, 
  getNoteByIdHandler,
  deleteNoteByIdHandler,
} from './handler.js';


const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  }
];

// module.exports = routes;
export{routes}

