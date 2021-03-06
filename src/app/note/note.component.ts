import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { Router } from '@angular/router';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;
  @Input() noteChange: Function;
  @Input() deleteNote: Function;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDelete(): void {
    this.deleteNote(this.note);
  }

  toEditPage(): void {
    this.router.navigate([`/edit/${this.note.id}`]);
  }

}
