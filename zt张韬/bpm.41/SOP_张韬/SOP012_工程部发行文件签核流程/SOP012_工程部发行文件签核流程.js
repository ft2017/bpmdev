document.write('<script type="text/javascript" src="../../CustomJsLib/EFGPShareMethod.js"></script>');//for 开窗


var tDbConn = new DataSource("SOP012","SQL0");//前面是表单代号，后面是sql command控件的名称
var tEFGP = "T100PROD"; 
function formCreate(){
  document.getElementById("txtbm").value = mainOrgUnitNames;
  document.getElementById("txtxm").value = userName;

return true;
}
function formOpen(){
return true;
}
function formSave(){
return true;
}
function formClose(){
return true;
}
function cbspry_onclick(){
var tCheckbox=document.getElementsByName("cbspry");   
  var tSelectedValue="";   
  for(var i=0;i<tCheckbox.length;i++){  
   if(tCheckbox[i].checked){ 
  tSelectedValue=tSelectedValue+tCheckbox[i].value+";"; 
   }
    if(tCheckbox[0].checked){ 
      document.getElementById("hdkz").value='Z0407002';  
    //tSelectedValue = document.getElementById("hdkz").value +";";
    }else{
     document.getElementById("hdkz").value = ""; 
   }
   if(tCheckbox[1].checked){   
      document.getElementById("hdjl").value='0167';   
  // tSelectedValue = tSelectedValue + document.getElementById("hdjl").value+";";
    }else{
     document.getElementById("hdjl").value = ""; 
   }
   
   document.getElementById("hdkj").value = tSelectedValue;
}
}
function cbbmzg_onclick(){
  var tCheckbox=document.getElementsByName("cbbmzg");   
  var tSelectedValue="";   
  for(var i=0;i<tCheckbox.length;i++){  
   if(tCheckbox[i].checked){ 
  tSelectedValue=tSelectedValue+tCheckbox[i].value+";"; 
   }
    if(tCheckbox[0].checked){ 
      document.getElementById("hdyz").value='Z0205001';  
    tSelectedValue = document.getElementById("hdyz").value +";";
    }else{
     document.getElementById("hdyz").value = ""; 
   }
   if(tCheckbox[1].checked){   
      document.getElementById("hdjg").value='0096';   
   tSelectedValue = tSelectedValue + document.getElementById("hdjg").value+";";
    }else{
     document.getElementById("hdjg").value = ""; 
   }
   if(tCheckbox[2].checked){   
      document.getElementById("hdsy").value='Z1105041';
   tSelectedValue = tSelectedValue + document.getElementById("hdsy").value+";";
    }else{
     document.getElementById("hdsy").value = ""; 
   }
   if(tCheckbox[3].checked){   
      document.getElementById("hdkq").value='ZY110';   
     tSelectedValue = tSelectedValue + document.getElementById("hdkq").value+";";
    }else{
     document.getElementById("hdkq").value = ""; 
   }
   if(tCheckbox[4].checked){   
      document.getElementById("hdzz").value='Z9511001';  
   tSelectedValue = tSelectedValue + document.getElementById("hdzz").value+";";
    }else{
     document.getElementById("hdzz").value = ""; 
   }
  

document.getElementById("hdjh").value = tSelectedValue;

//alert(document.getElementById("hdjh").value);
}
}
function  btpb_onclick(){

    var FileName = "SingleOpenWin";
    var sql = "select UNIQUE(a.ooag001) 员工编号,a.ooag011 全名 from ooag_t a where a.ooag001='Z1208011' or a.ooag001='Z1404010' or a.ooag001='Z1507001' or a.ooag001='Z1306017' or a.ooag001='Z1511020' or a.ooag001='Z1311006' or a.ooag001='Z1703032' ";

  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("员工编号"," 品保人员");//客製開窗的Grid Label
  var QBEField = new Array("a.ooag001","a.ooag011");//模糊查詢,須和DB Table欄位名稱相同
  var QBELabel = new Array("员工编号","品保人员");//模糊查詢的Label
     var ReturnId = new Array("hdpb","txtpbry");
     singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
 
}
 //$-----Auto generated script block, Please do not edit or modify script below this line.-----$//