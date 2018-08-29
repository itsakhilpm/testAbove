import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testProject';
  count:number=0;
  on :number;
  savedTags : string [] = [];
  isEdit :boolean = true;

  openTextBox() {
    this.savedTags.push({"index":this.count,"name":"", "isEdit":true});
    this.count++;
  }
  saveData(ix) {
    var item = this.savedTags.filter(ms => ms.index==ix)[0];
    if(typeof item != 'undefined'){
      this.savedTags[this.savedTags.indexOf(item)].isEdit= false;
    }
  }
  editData(ix){
    var item = this.savedTags.filter(ms => ms.index==ix)[0];
    if(typeof item != 'undefined'){
      this.savedTags[this.savedTags.indexOf(item)].isEdit= true;
    }
  }
  removeItem(ix){
    var item = this.savedTags.filter(ms => ms.index==ix)[0];
    if(typeof item != 'undefined'){
      this.savedTags.splice(this.savedTags.indexOf(item),1);
    }
  }
}
