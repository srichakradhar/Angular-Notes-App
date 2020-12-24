import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public notes: Note[] = [];
  public searchTerm: string;
  
  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    public router: Router,
  ) { }

  /*
  Fetch the notes using NoteService's getNotes() function 
  and display the notes in to the UI
  */
  ngOnInit() {
    // this.notes = this.route.snapshot.data.notes;
    this.noteService.getNotes().subscribe((notes) => {this.notes = notes});
  }

  /*
  This function is responsible to call the NoteService's addNote() function
  If the note is added successfully , the notes list should be updated in the UI
  If any error occurs , display the error message in the UI
  */
  addNote(newNote: Note): void {
    this.noteService.addNote(newNote)
      .subscribe((addedNote) => {this.notes = this.notes.concat(addedNote)});    
  }

}
