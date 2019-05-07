
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      fname: "",
      email: "",
      password: "",
      phone: "",
      usrId: null
    }

  }


  onSubmit(form: NgForm) {
    if (this.service.formData.usrId == null || this.service.formData.usrId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);

  }

  insertRecord(form: NgForm) {
    this.service.postUser().subscribe(
      res => {
        // debugger;
        this.resetForm(form);
        // this.toastr.success('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        //debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putUser().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  populateForm(pd: User) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(userid) {
    if (confirm('Are you sure to delete this record ?')) {
      console.log(userid)
      this.service.deleteUser(userid)
        .subscribe(res => {
          //debugger;
          this.service.refreshList();
          //this.toastr.warning('Deleted successfully', 'Payment Detail Register');
        },
          err => {
            //debugger;
            console.log(err);
          })
    }
  }

}
