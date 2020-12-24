import { Pipe, PipeTransform } from '@angular/core';
import { Note } from './note';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(notes: Note[], searchTerm?: string): Note[] {
    if (!searchTerm) return notes;
    const search = searchTerm.toLowerCase();
    return notes.filter(note => (
      note.noteTitle.toLowerCase().includes(search) ||
      note.noteContent.toLowerCase().includes(search)
    ));
  }

}
