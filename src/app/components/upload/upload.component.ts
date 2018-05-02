import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from "rxjs/Observable";

// Services
import {ItemService} from "../../services/item.service";

// Models
import { Item } from "../../models/item";


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  items: Item[];
  selectFile: File = null;
  imageUrl: string = "/assets/img/default-image.png";

  constructor( private itemService: ItemService ) { }

  ngOnInit() {
    this.itemService.getItems().subscribe( items => {
      this.items = items;
      console.log(items);
    })
  }

  onSelectedFile(file: FileList) {

    this.selectFile = file.item(0);

    //Show image preview
    let reader = new FileReader();

    reader.onload = (e:any) => {
      this.imageUrl = e.target.result;
      console.log(e.target);
    };
    reader.readAsDataURL(this.selectFile);

  }

  onUploadFile() {

  }

}
