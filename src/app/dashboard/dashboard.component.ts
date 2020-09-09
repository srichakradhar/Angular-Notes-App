import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  constructor() { 
   
  }

  /*
  Fetch the notes using NoteService's getNotes() function 
  and display the notes in to the UI
  */
  ngOnInit() {
   

  }

  /*
  This function is responsible to call the NoteService's addNote() function
  If the note is added successfully , the notes list should be updated in the UI
  If any error occurs , display the error message in the UI
  */
  addNote(){
    
  }

}
