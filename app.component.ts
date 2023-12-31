import { Component ,OnInit} from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  regForm:FormGroup

  constructor( private fb:FormBuilder) {
     this.regForm= this.fb.group({
      firstName:[' ',[Validators.required]],
      lastName:[' ',[Validators.required]],
      email:[' ',[Validators.required,Validators.email]],
      password:[' ',[Validators.required,Validators.minLength(8)]],
      confirmPassword:[' ',[Validators.required]],
     
     }
      
  )
    }
    ngOnInit():void{
    
  }

    submit(){
      console.log(this.regForm.value)
    }
    reset(){
  
      this.regForm.reset()
    }

}
