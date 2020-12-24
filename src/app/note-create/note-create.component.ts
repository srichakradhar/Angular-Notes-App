import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {
  @Output() addedNote = new EventEmitter();
  public noteTitle: string;
  public noteDescription: string;


  constructor() { }

  onSubmit() {
    const newNote = {
      noteTitle: this.noteTitle,
      noteContent: this.noteDescription,
    };

    this.addedNote.emit(newNote);

    this.noteTitle = '';
    this.noteDescription = '';
  }

  ngOnInit() {
  }
}
