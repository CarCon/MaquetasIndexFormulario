import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-nuevo-ticket',
  templateUrl: './nuevo-ticket.component.html',
  styleUrls: ['./nuevo-ticket.component.scss']
})

export class NuevoTicketComponent {
  name = new FormControl('');
  company = new FormControl('');
  rol = new FormControl('');
  email = new FormControl('');
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    incidencia: this.fb.group({
      tituloIncidencia: [''],
      city: [''],
      state: [''],
      detalleIncidencia: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: '',
      incidencia: {
        tituloIncidencia: ''
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}

