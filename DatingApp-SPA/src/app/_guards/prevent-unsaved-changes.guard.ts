import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable()

export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent>{
    canDeactivate(component: MemberEditComponent){
        if(component.editForm.dirty){
            return confirm('Are You Sure You Want To Continue?. Any Unsaved Changes Will Be Lost !');
        }

        return true;
    }
}