"use strict";(self.webpackChunkdatta_able_free_angular_admin_template=self.webpackChunkdatta_able_free_angular_admin_template||[]).push([[679],{1679:(h,l,a)=>{a.r(l),a.d(l,{default:()=>c});var d=a(2389),e=a(3953),r=a(4341),u=a(3413);let c=(()=>{class p{constructor(){this.rangevalue=4,this.randomPassword="",this.possible="",this.upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ",this.lowerCase="abcdefghijklmnopqrstuvwxyz",this.numbers="1234567890",this.symbols=",./;'[]=-)(*&^%$#@!~`"}valueChanged(i){this.rangevalue=i.target.value,this.getPassword()}copyPassword(){navigator.clipboard.writeText(this.randomPassword)}getPassword(){let i="",t="";0==this.passwordOptions1&&0==this.passwordOptions2&&0==this.passwordOptions3&&0==this.passwordOptions4&&(this.passwordOptions2=!0),this.passwordOptions1&&(t+=this.upperCase),this.passwordOptions2&&(t+=this.lowerCase),this.passwordOptions3&&(t+=this.numbers),this.passwordOptions4&&(t+=this.symbols),this.possible=t;for(let o=0;o<this.rangevalue;o++)i+=this.possible.charAt(Math.floor(Math.random()*this.possible.length));this.randomPassword=i}ngOnInit(){this.passwordOptions1=!0,this.passwordOptions2=!0,this.passwordOptions3=!0,this.passwordOptions4=!1,this.getPassword()}static#e=this.\u0275fac=function(t){return new(t||p)};static#o=this.\u0275cmp=e.VBU({type:p,selectors:[["app-home-page"]],standalone:!0,features:[e.aNF],decls:69,vars:11,consts:[[1,"row"],[1,"col-sm-12"],["cardTitle","Password Generator Tool",3,"options"],[1,"col-md-10"],["action","javascript:"],["for","customRange1"],["type","range","id","customRange1","min","4","max","100","step","1","value","4",1,"form-range","d-block",3,"input"],[1,"custom-control","custom-checkbox"],["type","checkbox","name","options1","id","customCheck1",1,"custom-control-input",3,"ngModelChange","change","ngModel","checked"],["for","customCheck1",1,"custom-control-label","ps-2"],["type","checkbox","name","options2","id","customCheck2",1,"custom-control-input",3,"ngModelChange","change","ngModel","checked"],["for","customCheck2",1,"custom-control-label","ps-2"],["type","checkbox","name","options3","id","customCheck3",1,"custom-control-input",3,"ngModelChange","change","ngModel","checked"],["for","customCheck3",1,"custom-control-label","ps-2"],["type","checkbox","name","options4","id","customCheck4",1,"custom-control-input",3,"ngModelChange","change","ngModel","checked"],["for","customCheck4",1,"custom-control-label","ps-2"],[1,"form-group"],["for","exampleInputEmail1"],[1,"input-group"],["type","email","id","exampleInputEmail1",1,"form-control",3,"value"],[1,"input-group-text",2,"cursor","pointer",3,"click"],[1,"fa",2,"font-size","24px"],["type","submit",1,"btn","btn-primary",3,"click"],["src","assets/images/pinnumber.png"]],template:function(t,o){1&t&&(e.j41(0,"div",0)(1,"div",1)(2,"app-card",2)(3,"p"),e.EFF(4,"This tool is used to generate unique random password that can be used for any of your applications. We are using password for application to authenticate you are the right person to access the page, to protect data misuse by others and for privacy reasons. "),e.k0s(),e.j41(5,"h3"),e.EFF(6,"Generate Strong password "),e.k0s(),e.nrm(7,"hr"),e.j41(8,"div",0)(9,"div",3)(10,"form",4)(11,"label",5),e.EFF(12,"Password Length"),e.k0s(),e.j41(13,"input",6),e.bIt("input",function(s){return o.valueChanged(s)}),e.k0s(),e.EFF(14),e.j41(15,"div",7)(16,"input",8),e.mxI("ngModelChange",function(s){return e.DH7(o.passwordOptions1,s)||(o.passwordOptions1=s),s}),e.bIt("change",function(){return o.getPassword()}),e.k0s(),e.j41(17,"label",9),e.EFF(18,"Upper Case"),e.k0s()(),e.j41(19,"div",7)(20,"input",10),e.mxI("ngModelChange",function(s){return e.DH7(o.passwordOptions2,s)||(o.passwordOptions2=s),s}),e.bIt("change",function(){return o.getPassword()}),e.k0s(),e.j41(21,"label",11),e.EFF(22,"Lower Case"),e.k0s()(),e.j41(23,"div",7)(24,"input",12),e.mxI("ngModelChange",function(s){return e.DH7(o.passwordOptions3,s)||(o.passwordOptions3=s),s}),e.bIt("change",function(){return o.getPassword()}),e.k0s(),e.j41(25,"label",13),e.EFF(26,"Numbers"),e.k0s()(),e.j41(27,"div",7)(28,"input",14),e.mxI("ngModelChange",function(s){return e.DH7(o.passwordOptions4,s)||(o.passwordOptions4=s),s}),e.bIt("change",function(){return o.getPassword()}),e.k0s(),e.j41(29,"label",15),e.EFF(30,"Symbols"),e.k0s()(),e.j41(31,"div",16)(32,"label",17),e.EFF(33,"Generated Password Here"),e.k0s(),e.j41(34,"div",18),e.nrm(35,"input",19),e.j41(36,"span",20),e.bIt("click",function(){return o.getPassword()}),e.j41(37,"i",21),e.EFF(38,"\uf021"),e.k0s()()()(),e.j41(39,"button",22),e.bIt("click",function(){return o.copyPassword()}),e.EFF(40,"Copy Password"),e.k0s()()()(),e.j41(41,"div",0)(42,"div",3),e.nrm(43,"br"),e.j41(44,"h3"),e.EFF(45,"What is Strong Password ?"),e.k0s(),e.j41(46,"p"),e.EFF(47,"Minimum length of the password must be 8 charectors long. password that must contain one uppercase, one lower case, one numeric, and one symbol. If these condition satisfy then only it be a good strong password. "),e.k0s(),e.nrm(48,"p"),e.j41(49,"h3"),e.EFF(50,"Why we need to generate strong password ?"),e.k0s(),e.j41(51,"p"),e.EFF(52,"Most of the users creating the password that can be guessed by the others. So please use this tool to generate unique strong password and save it on your computer. "),e.k0s(),e.j41(53,"p"),e.EFF(54,"Many applications are recommended to use strong password to avoid data theft. In this tool you can generate any type of password. Just copy the generated password and store it your local computer. "),e.k0s(),e.j41(55,"p"),e.EFF(56," You can use this tool for forgot password page, or change password page, and generating random pin number to your applications. "),e.k0s()(),e.j41(57,"div",3)(58,"h3"),e.EFF(59,"How to generate unique PIN for applications ?"),e.k0s(),e.j41(60,"p"),e.EFF(61,"Most applications such as MPIN, ATM PIN, Credit, Debit card pin will ask for 4 digits to 6-digit pins. This can be generated by this tool. Please check the below image for reference. "),e.k0s(),e.j41(62,"p"),e.nrm(63,"img",23),e.k0s()(),e.j41(64,"div",3)(65,"p"),e.EFF(66,'"Treat your password like your toothbrush. Don\'t let anybody else use it, and get a new one every six months". - '),e.j41(67,"b"),e.EFF(68,"Clifford Stoll"),e.k0s()()()()()()()),2&t&&(e.R7$(2),e.Y8G("options",!1),e.R7$(12),e.SpI("",o.rangevalue," "),e.R7$(2),e.R50("ngModel",o.passwordOptions1),e.Y8G("checked",!0),e.R7$(4),e.R50("ngModel",o.passwordOptions2),e.Y8G("checked",!0),e.R7$(4),e.R50("ngModel",o.passwordOptions3),e.Y8G("checked",!0),e.R7$(4),e.R50("ngModel",o.passwordOptions4),e.Y8G("checked",!1),e.R7$(7),e.FS9("value",o.randomPassword))},dependencies:[d.G,r.qT,r.Zm,r.BC,r.cb,r.vS,r.cV,u.i]})}return p})()}}]);