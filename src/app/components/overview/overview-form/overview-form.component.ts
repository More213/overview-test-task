import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Owner} from '../../../interfaces/owner';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-overview-form',
  templateUrl: './overview-form.component.html',
  styleUrls: ['./overview-form.component.css']
})
export class OverviewFormComponent implements OnInit {
  buttonDisabled = true;
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    secondName: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    profits: new FormControl('', [Validators.required]),
    losses: new FormControl('', [Validators.required]),
    phone: new FormControl('8', [Validators.required, Validators.pattern('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$')]),
    id: new FormControl(1)
  });

  @Output() addNewOwner = new EventEmitter<Owner>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onAdd(): void {
    this.profileForm.value.id = ++this.profileForm.value.id;
    const owner = new Owner(
      this.profileForm.value.firstName,
      this.profileForm.value.secondName,
      this.profileForm.value.endDate,
      this.profileForm.value.profits,
      this.profileForm.value.losses,
      this.profileForm.value.phone,
      this.profileForm.value.id,
      );
    this.addNewOwner.emit(owner);
    this.profileForm.reset();
    }
}
