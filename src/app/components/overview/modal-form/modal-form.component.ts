import { Component, OnInit } from '@angular/core';
import {Owner} from '../../../interfaces/owner';
import {ownersArray} from '../overview-table/overview-table.component';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {
  public owners: Owner[] = ownersArray;

  ngOnInit(): void {
  }

  onAdd(owner: Owner): void {
    this.owners.push(owner);
  }
}
