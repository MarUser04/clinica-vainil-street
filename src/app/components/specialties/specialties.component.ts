import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss'],
})
export class SpecialtiesComponent implements OnInit {
  specialities = [
    'Cardiología',
    'Dermatología',
    'Endocrinología',
    'Gastroenterología',
    'Ginecología',
    'Odontología',
    'Otorrinolaringología',
    'Pediatría',
    'Proctología',
  ];

  constructor() {}

  ngOnInit() {}
}
