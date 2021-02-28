import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-location-entry-form',
  templateUrl: './location-entry-form.component.html',
  styleUrls: ['./location-entry-form.component.scss'],
})
export class LocationEntryFormComponent implements OnInit, AfterViewChecked {
  @Input() initialFormVisibility?: boolean;
  @Output() onSubmit = new EventEmitter<string>();
  @ViewChild('zipCodeInput') zipCodeInput?: ElementRef;

  isFormVisible = false;
  private justMadeFormVisible = false;

  constructor() {}

  ngOnInit(): void {
    this.isFormVisible =
      typeof this.initialFormVisibility === 'undefined'
        ? false
        : this.initialFormVisibility;
  }

  toggleFormVisibility() {
    this.isFormVisible = !this.isFormVisible;

    if (this.isFormVisible) this.justMadeFormVisible = true;
  }

  ngAfterViewChecked() {
    if (this.justMadeFormVisible) {
      this.zipCodeInput?.nativeElement.focus();
      this.justMadeFormVisible = false;
    }
  }

  submit(form: NgForm) {
    if (form.invalid) return;
    this.onSubmit.emit(form.value['zip-code']);
  }
}
