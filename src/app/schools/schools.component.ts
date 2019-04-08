import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  constructor() {
    $(function () {
      $('#myTable').DataTable();
    });
  }

  ngOnInit() {
  }

}
