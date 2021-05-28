import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-service-medical',
  templateUrl: './add-service-medical.component.html',
  styleUrls: ['./add-service-medical.component.scss']
})
export class AddServiceMedicalComponent implements OnInit {


  sm_form: FormGroup | any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
