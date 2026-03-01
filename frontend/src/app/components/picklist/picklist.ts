import { TitleCasePipe } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { PickListOption } from '../../models/picklist-option.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TextReplacePipe } from '../../pipes/text-replace-pipe/text-replace-pipe';


@Component({
  selector: 'app-picklist',
  imports: [TitleCasePipe, ReactiveFormsModule, TextReplacePipe],
  templateUrl: './picklist.html',
  styleUrl: './picklist.css',
})
export class Picklist {
    inputData = input.required<{"title": string, "field" : string, "todoFormGroupFieldName": string}>();
    picklistOptions = input.required<PickListOption[]>();
    control = input.required<FormControl>();
    isOpen = false;
    selectedOption= signal<string>("");
    // markAsError = computed<boolean>(() => !this.isOpen && this.control().hasError('required') && (this.control().dirty || this.control().touched))

    get isMarkedError() {
        return !this.isOpen && this.control().hasError('required') && (this.control().dirty || this.control().touched)
    }

    ngOnInit() {
        // console.log(this.input);
    }

    toggleIsOpen() {
        this.isOpen=!this.isOpen;
        this.control().markAsTouched();
    }

    selectOption(option:PickListOption) {
        this.selectedOption.set(option.content);
        if (this.inputData().field == "assigned_to_id") {
            this.control().setValue(option.id);
        } else {
            this.control().setValue(option.content);
        }
    }
}
