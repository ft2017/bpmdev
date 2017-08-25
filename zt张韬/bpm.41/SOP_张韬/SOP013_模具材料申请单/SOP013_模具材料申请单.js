
document.write('<script type="text/javascript" src="../../CustomJsLib/EFGPShareMethod.js"></script>');//for 开窗


var tDbConn = new DataSource("SOP010","SQL0");//前面是表单代号，后面是sql command控件的名称
var tEFGP = "T100PROD"; 
var tDbConn1 = new DataSource("SOP002","SQL1");
var tT100 = "T100PROD"; 


function formCreate(){
  document.getElementById("txt11").value = userName;
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
  if(activityId == "UserTask_2" ){
    if(document.getElementById("txt1").value==""){  
      alert("客户名称不能为空");
      return false;
    }else{
      return true;
    }
  }
return true;
}
function formClose(){
return true;
}

// //Grid新增

function btxz_onclick(){  


  Grid1Obj.addRow();  //將Binding欄位的資料填入Grid中   
  
  //Grid1Obj.clearBinding();  //新增後清除Binding欄位資料   
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


//txt1开窗带出客户名称

function btn002_onclick(){
    var FileName = "SingleOpenWin";
    var sql = "select b.pmaal003 客户全名 from pmaa_t a left join pmaal_t b on b.pmaal001=a.pmaa001 where a.pmaa002=2 and a.pmaaent=11 ";

  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("客户全名");//客製開窗的Grid Label
  var QBEField = new Array("b.pmaal003");//模糊查詢,須和DB Table欄位名稱相同
  var QBELabel = new Array("客户全名");//模糊查詢的Label
     var ReturnId = new Array("txt1");
     singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
}
//txt3开窗带出員工编号估价人员
 
function btn001_onclick(){

 
    var FileName = "SingleOpenWin";
    var sql = "SELECT EMPE_ID 員工编号, EMPE_LASTNAME|| EMPE_FIRSTNAME 員工姓名 FROM HR001_EMPE WHERE EMPE_ID='0167'or EMPE_ID='Z0407002' or EMPE_ID='W1410001'  ";

  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("員工编号"," 估价人员");//客製開窗的Grid Label
  var QBEField = new Array("EMPE_ID","EMPE_LASTNAME|| EMPE_FIRSTNAME");//模糊查詢,須和DB Table欄位名稱相同
  var QBELabel = new Array("員工编号","估价人员");//模糊查詢的Label
     var ReturnId = new Array("hdtxt1","txt3");
     singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
 
  
 
     //   document.getElementById("txt3").readOnly = true;
     // document.getElementById("txt3").disabled = true; //栏位不可编辑
  
  //   var FileName = "SingleOpenWin";
  //   var sql = "SELECT EMPE_ID 員工编号, EMPE_LASTNAME|| EMPE_FIRSTNAME 員工姓名 FROM HR001_EMPE WHERE EMPE_ID='0167'or EMPE_ID='Z0407002' or EMPE_ID='W1410001'  ";

  // var SQLClaused = new Array(sql);
  // var SQLLabel = new Array("員工编号"," 估价人员");//客製開窗的Grid Label
  // var QBEField = new Array("EMPE_ID","EMPE_LASTNAME|| EMPE_FIRSTNAME");//模糊查詢,須和DB Table欄位名稱相同
  // var QBELabel = new Array("員工编号","估价人员");//模糊查詢的Label
  //    var ReturnId = new Array("hdtxt1","txt3");
  //    singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
   
}
//检查不能为空


if(activityId == "UserTask_14" ){
    var tMsg = "";
    var tErrMsg = "不能为空";     
    if(document.getElementById("hdn_sgzg").value==""){  
      tMsg = tMsg + "请确认预计交货日期是否OK" + tErrMsg + " \r\n";
    }if(txt_sgzg.value == "" && document.getElementById("hdn_sgzg").value!="Y"){  
      tMsg = tMsg + "生管主管确认-说明" + tErrMsg + " \r\n";
    }if(tMsg == ""){
      return true;
    }else{
      alert(tMsg);
      return false;
    }
    return true;
  }
if(activityId == "UserTask_19" ){
    var tMsg = "";
    var tErrMsg = "不能为空";     
    if(document.getElementById("hdn_cz").value==""){  
      tMsg = tMsg + "请确认预计交货日期是否OK" + tErrMsg + " \r\n";
    }if(txt_cz.value == "" && document.getElementById("hdn_cz").value!="Y"){  
      tMsg = tMsg + "厂长确认-说明" + tErrMsg + " \r\n";
    }if(tMsg == ""){
      return true;
    }else{
      alert(tMsg);
      return false;
    }
    return true;
  }
if(activityId == "UserTask_24" ){
    var tMsg = "";
    var tErrMsg = "不能为空";     
    if(document.getElementById("txt_ywzg").value==""){  
      tMsg = tMsg + "业务主管备注" + tErrMsg + " \r\n";
    }if(tMsg == ""){
      return true;
    }else{
      alert(tMsg);
      return false;
    }
    return true;
  }
  else{return true;}
}


















// // function formCreate(){

// //     document.getElementById("txt11").value = userName;
  
// // return true;
// // }
// // function formOpen(){
// //     //var tGrid1 = document.getElementById("Grid1").value; //取出儲存在隱藏欄位中的Grid資料   
// //     //if(typeof(Grid1Obj) != undefined){  //判斷grid物件是否存在表單中   
// //     // if(tGrid1.length >1 ){  //判斷Grid是否有資料   
// //       // Grid1Obj.reload(eval(tGrid1));  //若Grid有資料則將存於隱藏中的值載入Grid中   
// //      // }  
// //    // }
   
// // return true;
// // }
// // function formSave(){
// //   //   if(typeof(Grid1Obj) != "undefined"){  //判斷grid物件是否存在表單中   
// //   //   document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將Grid裡的資料儲存至隱藏欄位中   
// //   //   }       
// //   // //判斷Grid是否有資料 
// //   //     if(document.getElementById("Grid1").value=="[]")
// //   //   {
// //   //     alert("单身不能为空！");
// //   //     return false ;
// //   //     }
// //   return true;
// // }

// // function formclose(){
// //   return true;
// // }




// // //Grid新增

// function btxz_onclick(){  


//   Grid1Obj.addRow();  //將Binding欄位的資料填入Grid中   
  
//   //Grid1Obj.clearBinding();  //新增後清除Binding欄位資料   
//   document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中   

  
// }   
//   //Grid修改
  
// function btxg_onclick(){   

//   Grid1Obj.editRow();  //將修改後的欄位的資料填入Grid中   
  
//   //Grid1Obj.clearBinding();  //清除Binding欄位資料   
//   document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中   
  
// }   
//   //Grid删除
  
// function btsc_onclick(){   

//   Grid1Obj.deleteRow();  //將Grid某筆資料刪除   
//   //Grid1Obj.clearBinding();  //清除Binding欄位資料   
//   document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中   
  
// }  




// // //$-----Auto generated script block, Please do not edit or modify script below this line.-----$//