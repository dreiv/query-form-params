import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form = new FormGroup({
    searchTerm: new FormControl(''),
    category: new FormControl('one'),
  });

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log('fetch data with new value', value);
    });
  }
}
