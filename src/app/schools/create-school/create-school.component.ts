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
      ]))
    });
  }

  createSchool(formData) {
    this.spinner.show();
    console.log(formData);
  }
}
