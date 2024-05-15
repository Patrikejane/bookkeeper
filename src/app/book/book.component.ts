import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  books : Book[] = []; 

  bookTitle : string = "";
  bookAuthor : string = "";
  
  
  ngOnInit(): void {
    let savedbooks = localStorage.getItem("booRepo");
    this.books = savedbooks ? JSON.parse(savedbooks):[];
  }


  addBook(){
    let newBook = {
      id:Date.now(),
      title:this.bookTitle,
      author:this.bookAuthor
    }

    this.books.push(newBook);
    localStorage.setItem("booRepo",JSON.stringify(this.books));
  }

  deleteBook(index:number){

    this.books.splice(index,1);
    localStorage.setItem("booRepo",JSON.stringify(this.books));

  }

  getAllBooks(){
    let savedbooks = localStorage.getItem("booRepo");
    this.books = savedbooks ? JSON.parse(savedbooks):[];
  }




}
