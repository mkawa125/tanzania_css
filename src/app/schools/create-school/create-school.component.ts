import { Component, OnInit } from '@angular/core';
import {FormGroup, Validator, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { SchoolService} from '../../services/school.service';
import { NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'fmyp-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.css']
})
export class CreateSchoolComponent implements OnInit {
  formData; name; regNumber;

  constructor(
      private toast: ToastrService,
      private schoolService: SchoolService,
      private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.formData = new FormGroup({
      regNumber: new FormControl('', Validators.compose([
          Validators.required,
          Validators.maxLength(20)
      ])),
      region: new FormControl('', Validators.compose([
          Validators.required
      ])),
      district: new FormControl('', Validators.compose([
        Validators.required
      ])),
      ward: new FormControl('', Validators.compose([
        Validators.required
      ])),
      schoolName: new FormControl('', Validators.compose([
          Validators.required,
      ])),
      level: new FormControl('', Validators.compose([
        Validators.required,
      ])),

      gender: new FormControl('', Validators.compose([
        Validators.required,
      ])),

      dateStarted: new FormControl('', Validators.compose([
        Validators.required,
      ])),

      ownership: new FormControl('', Validators.compose([
        Validators.required,
      ])),

      schoolType: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }

  createSchool(formData) {
    try {
      this.spinner.show();
      console.log(formData);
      this.schoolService
          .createSchool(formData)
          .subscribe(response => {
            console.log(response);
            this.spinner.hide();
            this.toast.success('School Successfully added', 'School Created', {
              timeOut: 1500,
              positionClass: 'toast-top-right',
              progressBar: true,
            });
            this.formData.reset();
          });
    } catch (e) {
      console.log(e);
      this.spinner.hide();
      this.toast.error('School Not Created', 'Failure', {
        timeOut: 2000,
        positionClass: 'toast-top-right',
        progressBar: true,
      });
    }
  }
}
