document.write('<script type="text/javascript" src="../../CustomJsLib/EFGPShareMethod.js"></script>');//for 开窗


var tDbConn = new DataSource("SOP011","SQL0");//前面是表单代号，后面是sql command控件的名称
var tEFGP = "T100PROD"; 
//var tDbConn1 = new DataSource("SOP002","SQL1");
//var tT100 = "T100PROD"; 

function formCreate(){

    document.getElementById("Textbox1").value=userName;
  
return true;
}
function formOpen(){
 var tGrid1 = document.getElementById("Grid1").value; //取出儲存在隱藏欄位中的Grid資料   
   if(typeof(Grid1Obj) != undefined){  //判斷grid物件是否存在表單中   
    if(tGrid1.length >1 ){  //判斷Grid是否有資料   
      Grid1Obj.reload(eval(tGrid1));  //若Grid有資料則將存於隱藏中的值載入Grid中   
     }  
   }
return true;
}
function formSave(){
  var tMsg = "";
    var tErrMsg = "不能为空"; 
    if(activityId == "UserTask_2" ){
    if(document.getElementById("txt1").value == ""){  
      tMsg = tMsg + "客户" + tErrMsg + " \r\n";
    }
     if(document.getElementById("txt2").value == ""){  
      tMsg = tMsg + "品名" + tErrMsg + " \r\n";
    }

    if(document.getElementById("Date0_txt").value=="" ){ 
      tMsg = tMsg + "报价日期" + tErrMsg + " \r\n";
    }                   
     if(document.getElementById("txt3").value= ""){  
      tMsg = tMsg + "估价单号" + tErrMsg + " \r\n";
    }    
    if(document.getElementById("txt7").value =="" ){  
      tMsg = tMsg + "业务报价-产品单价" + tErrMsg + " \r\n";
    }
   
   
    if(document.getElementById("txt5").value==""){  
      tMsg = tMsg + "业务报价-模具费" + tErrMsg + " \r\n";
    }
    if(document.getElementById("txt6").value==""){  
      tMsg = tMsg + "估价单-产品单价" + tErrMsg + " \r\n";
    }
    if(document.getElementById("txt4").value =="" ){  
      tMsg = tMsg + "批价单-模具费" + tErrMsg + " \r\n";
    }
    if(document.getElementById("Date27_txt").value == "" ){ 
      tMsg = tMsg + "报价日期" + tErrMsg + " \r\n";
    }
    
      }
         if(tMsg == ""){
      return true;
    }
    else{
      alert(tMsg);
      return false;
    }
return true;
}
function formClose(){
return true;
}



function cblcxgbmhq_onclick(){
  var tCheckbox=document.getElementsByName("cblcxgbmhq");   
  var tSelectedValue="";   
  for(var i=0;i<tCheckbox.length;i++){  
   if(tCheckbox[i].checked){ 
  tSelectedValue=tSelectedValue+tCheckbox[i].value+";"; 
   }
    if(tCheckbox[1].checked){ 
      document.getElementById("hdnmj").value='100306';  
    //tSelectedValue = document.getElementById("hdnmj").value +";";
    }else{
     document.getElementById("hdnmj").value = ""; 
   }
   if(tCheckbox[2].checked){   
      document.getElementById("hdnyz").value='100301';   
    //tSelectedValue = tSelectedValue + document.getElementById("hdnyz").value+";";
    }else{
     document.getElementById("hdnyz").value = ""; 
   }
   if(tCheckbox[3].checked){   
      document.getElementById("hdnjg").value='100302';
   // tSelectedValue = tSelectedValue + document.getElementById("hdnjg").value+";";
    }else{
     document.getElementById("hdnjg").value = ""; 
   }
   if(tCheckbox[4].checked){   
      document.getElementById("hdnsg").value='100305';   
    // tSelectedValue = tSelectedValue + document.getElementById("hdnsg").value+";";
    }else{
     document.getElementById("hdnsg").value = ""; 
   }
   if(tCheckbox[5].checked){   
      document.getElementById("hdnpg").value='1008';  
   // tSelectedValue = tSelectedValue + document.getElementById("hdnpg").value+";";
    }else{
     document.getElementById("hdnpg").value = ""; 
   }
   if(tCheckbox[6].checked){   
      document.getElementById("hdnzc").value='100701';   
    //tSelectedValue = tSelectedValue + document.getElementById("hdnzc").value+";";
    }else{
     document.getElementById("hdnzc").value = ""; 
   }
  } 

document.getElementById("HiddenTextField0").value = tSelectedValue;

//alert(document.getElementById("HiddenTextField0").value);
}


//Grid新增
function btxz_onclick(){  


  Grid1Obj.addRow();  //將Binding欄位的資料填入Grid中   
  
  Grid1Obj.clearBinding();  //新增後清除Binding欄位資料   
  document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中   

  
}   
  //Grid修改
function btxg_onclick(){   
  Grid1Obj.editRow();  //將修改後的欄位的資料填入Grid中   
  
  //Grid1Obj.clearBinding();  //清除Binding欄位資料   
  document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中   
  
}   
  //Grid删除
function btsc_onclick(){   
  Grid1Obj.deleteRow();  //將Grid某筆資料刪除   
  //Grid1Obj.clearBinding();  //清除Binding欄位資料   
  document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中   
  
}  

function Button0_onclick(){
    var FileName = "SingleOpenWin";
    var sql = "select b.pmaal003 客户全名 from pmaa_t a left join pmaal_t b on b.pmaal001=a.pmaa001 where a.pmaa002=2 and a.pmaaent=11 ";

  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("客户全名");//客製開窗的Grid Label
  var QBEField = new Array("b.pmaal003");//模糊查詢,須和DB Table欄位名稱相同
  var QBELabel = new Array("客户全名");//模糊查詢的Label
     var ReturnId = new Array("txt1");
     singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
}



//$-----Auto generated script block, Please do not edit or modify script below this line.-----$//