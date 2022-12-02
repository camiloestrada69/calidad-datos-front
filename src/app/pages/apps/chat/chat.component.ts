import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';

import { ChatUser, ChatMessage } from './chat.model';
import { chatData, chatMessagesData } from './data';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})

/**
 * Chat Component
 */
export class ChatComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  chatData!: ChatUser[];
  chatMessagesData!: ChatMessage[];
  username: any = 'John Howard';
  usermessage!: string;
  formData!: UntypedFormGroup;
  chatSubmit?: boolean;
  profile: string = 'assets/images/users/avatar-2.jpg';

  constructor(public formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {

    //BreadCrumb 
    this.breadCrumbItems = [
      { label: 'Apps' },
      { label: 'Chat', active: true }
    ];

    // Validation
    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    });

    // Chat Data Get Function
    this._fetchData();
  }

  ngAfterViewInit() { }

  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  /***
   * Chat Data Get
   */
  private _fetchData() {
    this.chatData = chatData;
    this.chatMessagesData = chatMessagesData;
  }

  /***
   * OnClick User Chat show
   */
  chatUsername(name: any, profile: any) {
    this.username = name;
    this.usermessage = 'Hello';
    this.chatMessagesData = [];
    const currentDate = new Date();
    this.profile = profile;

    this.chatMessagesData.push({
      name: this.username,
      message: this.usermessage,
      time: currentDate.getHours() + ':' + currentDate.getMinutes(),
      profile: profile,
    });
  }

  /**
   * Save the message in chat
   */
  messageSave() {
    const message = this.formData.get('message')!.value;
    const currentDate = new Date();
    if (this.formData.valid && message) {
      // Message Push in Chat
      this.chatMessagesData.push({
        align: 'right',
        profile: 'assets/images/users/avatar-4.jpg',
        message,
        time: currentDate.getHours() + ':' + currentDate.getMinutes(),
      });

      // Set Form Data Reset
      this.formData = this.formBuilder.group({
        message: null,
      });
    }
    this.chatSubmit = true;
  }
}
