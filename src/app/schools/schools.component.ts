import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService} from 'ngx-spinner';
import { Router} from '@angular/router';
import { SchoolService} from '../services/school.service';

declare var $;

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  constructor(
      private   route: Router,
      private   spinner: NgxSpinnerService,
      private   schoolService: SchoolService,
  ) {
    $(document).ready(function() {
      $('#myTable').DataTable();
    } );
  }

  ngOnInit() {
    this.spinner.show();
    this.schoolService.getAllPrimarySchools().subscribe(
        response => {
          console.log(response);
          this.spinner.hide();
        }
    );
  }
  getPrimarySchools() {
    this.spinner.show();
    this.schoolService.getAllPrimarySchools().subscribe(
        response => {
          console.log(response);
          this.spinner.hide();
        }
    );
  }
}
