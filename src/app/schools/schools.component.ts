import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService} from 'ngx-spinner';
import { Router} from '@angular/router';
import { SchoolService} from '../services/school.service';
import { ToastrService} from 'ngx-toastr';

declare var $;

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  schools: Array<any>;
  public num = 1;

  constructor(
      private   route: Router,
      private   spinner: NgxSpinnerService,
      private   schoolService: SchoolService,
      private toast: ToastrService,
  ) {
  }

  ngOnInit() {
    this.spinner.show();
    this.schoolService.getAllPrimarySchools()
        .subscribe(
        response => {
          $(document).ready(function() {
            $('#myTable').DataTable();
          } );
          this.schools = response.data;
          console.log(this.schools);
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
  deleteSchool(schoolId) {
      this.schoolService.deleteSchool(schoolId).subscribe(
          response => {
              $(document).ready(function() {
                  $('#myTable').DataTable();
              } );
              this.schools = response.schools;
              this.toast.warning('', 'School Deleted Successfully', {
                  timeOut: 2000,
                  positionClass: 'toast-top-center',
                  progressBar: false,
              });
              console.log(response);
          }
      );
  }
  editSchoolDetails() {
      this.spinner.show();
  }
  schoolDetails() {
      this.spinner.show();
  }
}
