import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService implements OnInit{

 /*
 Define a variable for NOTES_API_URL and set the value to "http://localhost:3000/notes"
 */

  

  

  constructor() { }

  ngOnInit(){

  }

  /*
  This function is responsible for fetching notes from db.json
  */
  getNotes() : Observable<Array<Note>>{
    
  }

  /*
  This function is responsible for adding note to db.json
  */

  addNote(note: Note) : Observable<Note>{
   
  }
  
}
