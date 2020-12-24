import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from './note';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NoteService{

 /*
 Define a variable for NOTES_API_URL and set the value to "http://localhost:3000/notes"
 */
private NOTES_API_URL = 'http://localhost:3000/notes';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  /** GET Notes from the server */
  getNotes (): Observable<Note[]> {
    return this.http.get<Note[]>(this.NOTES_API_URL)
      .pipe(
        catchError(this.handleError('getNotes', []))
      );
  }

  /** GET Note by id. Return `undefined` when id not found */
  getNoteNo404<Data>(id: number): Observable<Note> {
    const url = `${this.NOTES_API_URL}/?id=${id}`;
    return this.http.get<Note[]>(url)
      .pipe(
        map(Notes => Notes[0]), // returns a {0|1} element array
        catchError(this.handleError<Note>(`getNote id=${id}`))
      );
  }

  /** GET Note by id. Will 404 if id not found */
  getNote(id: number): Observable<Note> {
    const url = `${this.NOTES_API_URL}/${id}`;
    return this.http.get<Note>(url).pipe(
      catchError(this.handleError<Note>(`getNote id=${id}`))
    );
  }

  /* GET Notes whose title contains search term */
  searchNotes(term: string): Observable<Note[]> {
    if (!term.trim()) {
      // if not search term, return empty Note array.
      return of([]);
    }
    return this.http.get<Note[]>(`${this.NOTES_API_URL}/?title=${term}`)
      .pipe(
        catchError(this.handleError<Note[]>('searchNotes', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new Note to the server */
  addNote (Note: Note): Observable<Note> {
    return this.http.post<Note>(this.NOTES_API_URL, Note, httpOptions)
      .pipe(
        catchError(this.handleError<Note>('addNote'))
      );
  }

  /** DELETE: delete the Note from the server */
  deleteNote (Note: Note | number): Observable<Note> {
    const id = typeof Note === 'number' ? Note : Note.id;
    const url = `${this.NOTES_API_URL}/${id}`;

    return this.http.delete<Note>(url, httpOptions)
      .pipe(
        catchError(this.handleError<Note>('deleteNote'))
      );
  }

  /** PUT: update the Note on the server */
  updateNote (Note: Note): Observable<Note> {
    return this.http.put<Note>(this.NOTES_API_URL, Note, httpOptions)
      .pipe(
        catchError(this.handleError<Note>('updateNote'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
