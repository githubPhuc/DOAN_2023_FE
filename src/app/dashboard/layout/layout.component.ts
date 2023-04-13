import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  constructor(private router:Router) { }

  [x: string]: any;
  scr:boolean=false;  
  txt:any;
  username:any;
  islogin!:boolean;
  lstCategory:any;
  lstProduct:any;
  lstTrademark:any;
  productForm=new FormGroup({
    txtSearch: new FormControl(''),
  });
  ngOnInit(): void {
    window.onscroll=()=>this.onSCR();
    if(localStorage.getItem('role')!='Admin')
    {
      this.router.navigate(['/admin']);
    }
    localStorage.getItem('token')!=null?this.islogin=true:this.islogin=false;
    this.username=window.localStorage.getItem('username');
    
    

  }
  onSCR()
  {
    if(document.documentElement.scrollTop>400)
    {
      
      this.scr=true;
    }else
    {
      this.scr=false;
    }

  }
}
