import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Environment
import { environment } from "../environments/environment";

// Firestore
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireStorageModule } from "angularfire2/storage";


// Components
import { AppComponent } from './app.component';
import { UploadComponent } from './components/upload/upload.component';

// Services
import { ItemService } from './services/item.service';
import { UploadFileService } from './services/upload-file.service';



@NgModule({
  declarations: [
    AppComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [ItemService, UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
