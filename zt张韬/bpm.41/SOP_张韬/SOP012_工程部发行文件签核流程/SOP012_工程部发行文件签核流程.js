
document.write('<script type="text/javascript" src="../../CustomJsLib/EFGPShareMethod.js"></script>');//for 开窗


var tDbConn = new DataSource("SOP010","SQL0");//前面是表单代号，后面是sql command控件的名称
var tEFGP = "T100PROD"; 



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
   var tMsg = "";
    var tErrMsg = "不能为空"; 
    if(activityId == "UserTask_2" ){
    if(document.getElementById("txt1").value == ""){  
      tMsg = tMsg + "客户" + tErrMsg + " \r\n";
    }
     if(document.getElementById("txt2").value == ""){  
      tMsg = tMsg + "项目名称" + tErrMsg + " \r\n";
    }

    if(document.getElementById("Date0_txt").value=="" ){ 
      tMsg = tMsg + "报价时间" + tErrMsg + " \r\n";
    }                   
     if(document.getElementById("hdtxt1").value= ""){  
      tMsg = tMsg + "评估人员" + tErrMsg + " \r\n";
    }    
    if(document.getElementById("txt11").value =="" ){  
      tMsg = tMsg + "业务" + tErrMsg + " \r\n";
    }
   
   
    if(document.getElementById("txt7").value==""){  
      tMsg = tMsg + "材质" + tErrMsg + " \r\n";
    }
    if(document.getElementById("txt8").value==""){  
      tMsg = tMsg + "表面处理" + tErrMsg + " \r\n";
    }
    if(document.getElementById("txt9").value =="" ){  
      tMsg = tMsg + "需求量" + tErrMsg + " \r\n";
    }
    if(document.getElementById("txt10").value == "" ){ 
      tMsg = tMsg + "用途" + tErrMsg + " \r\n";
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
if (document.getElementById("txt3").value==""){
 
    var FileName = "SingleOpenWin";
    var sql = "SELECT EMPE_ID 員工编号, EMPE_LASTNAME|| EMPE_FIRSTNAME 員工姓名 FROM HR001_EMPE WHERE EMPE_ID='0167'or EMPE_ID='Z0407002' or EMPE_ID='W1410001'  ";

  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("員工编号"," 估价人员");//客製開窗的Grid Label
  var QBEField = new Array("EMPE_ID","EMPE_LASTNAME|| EMPE_FIRSTNAME");//模糊查詢,須和DB Table欄位名稱相同
  var QBELabel = new Array("員工编号","估价人员");//模糊查詢的Label
     var ReturnId = new Array("hdtxt1","txt3");
     singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
}else{
  alert("请填写估价人员")
}
  
 }

//检查不能为空

// function checkNull(){
//     var tMsg = "";
//     var tErrMsg = "不能为空"; 
//     if(activityId == "UserTask_2" ){
//     if(document.getElementById("txt1").value == ""){  
//       tMsg = tMsg + "客户" + tErrMsg + " \r\n";
//     }
//      if(document.getElementById("txt2").value == ""){  
//       tMsg = tMsg + "项目名称" + tErrMsg + " \r\n";
//     }

//     if(document.getElementById("Date0_txt").value=="" ){ 
//       tMsg = tMsg + "报价时间" + tErrMsg + " \r\n";
//     }
//      if(document.getElementById("txt3").value= ""){  
//       tMsg = tMsg + "评估人员" + tErrMsg + " \r\n";
//     }
//     if(document.getElementById("txt11").value =="" ){  
//       tMsg = tMsg + "业务" + tErrMsg + " \r\n";
//     }
//    if(document.getElementById("txt6").value==""){  
//       tMsg = tMsg + "状态（可添加附件）" + tErrMsg + " \r\n";
//     }
   
//     if(document.getElementById("txt7").value==""){  
//       tMsg = tMsg + "材质" + tErrMsg + " \r\n";
//     }
//     if(document.getElementById("txt8").value==""){  
//       tMsg = tMsg + "表面处理" + tErrMsg + " \r\n";
//     }
//     if(document.getElementById("txt9").value =="" ){  
//       tMsg = tMsg + "需求量" + tErrMsg + " \r\n";
//     }
//     if(document.getElementById("txt10").value == "" ){ 
//       tMsg = tMsg + "用途" + tErrMsg + " \r\n";
//     }
    
//       }
//          if(tMsg == ""){
//       return true;
//     }
//     else{
//       alert(tMsg);
//       return false;
//     }
//     }
    // if(activityId == "UserTask_24" ){
    // if(document.getElementById("rbgc_0").checked == true && document.getElementById("tapsyjgc").value == "" ){  
    //   tMsg = tMsg + "工程评审意见" + tErrMsg + " \r\n";
    // }
    // }
    // if(activityId == "UserTask_26" ){
    // if(document.getElementById("rbpb_0").checked == true && document.getElementById("tapsyjpb").value == "" ){  
    //   tMsg = tMsg + "品保评审意见" + tErrMsg + " \r\n";
    // }
    // }
    // if(activityId == "UserTask_28" ){
    // if(document.getElementById("rbmj_0").checked == true && document.getElementById("tapsyjmj").value == "" ){  
    //   tMsg = tMsg + "模具评审意见" + tErrMsg + " \r\n";
    // };
    // }
    // if(activityId == "UserTask_30" ){
    // if(document.getElementById("rbzz_0").checked == true && document.getElementById("tapsyjzz").value == "" ){  
    //   tMsg = tMsg + "制造评审意见" + tErrMsg + " \r\n";
    // }
    // }
    // if(activityId == "UserTask_32" ){
    // if(document.getElementById("rbsg_0").checked == true && document.getElementById("tapsyjsg").value == "" ){  
    //   tMsg = tMsg + "生管评审意见" + tErrMsg + " \r\n";
    // }
    // if(document.getElementById("rbsg_0").checked == true  ){
    //     if(document.getElementById("tbslztdd").value == "" || document.getElementById("tbslycl").value == "" || document.getElementById("tbslzzp").value == "" || document.getElementById("tbslcp").value == "" || document.getElementById("tbslkhdcp").value == ""){
    //   tMsg = tMsg + "数量" + tErrMsg + " \r\n";
    //     }
    // }
    // }
    // if(activityId == "UserTask_34" ){
    // if(document.getElementById("rbyx_0").checked == true && document.getElementById("tapsyjyx").value == "" ){  
    //   tMsg = tMsg + "营销评审意见" + tErrMsg + " \r\n";
    // }
    // }
    // if(activityId == "UserTask_56" ){
    // if(document.getElementById("rbgd_0").checked == true && document.getElementById("tapsyjgd").value == "" ){  
    //   tMsg = tMsg + "管代评审意见" + tErrMsg + " \r\n";
    // }
    // }
      
    // if(activityId == "UserTask_64" ){//发起人确认
    //   if(document.getElementById("taclfsztdd").value == "" || document.getElementById("taclfsycl").value == "" || document.getElementById("taclfszzp").value == "" || document.getElementById("taclfscp").value == "" || document.getElementById("taclfskhdcp").value == ""){
    //   tMsg = tMsg + "处理方式" + tErrMsg + " \r\n";
    //     } 
    //   if(document.getElementById("dwcrqztdd_txt").value == "" || document.getElementById("dwcrqycl_txt").value == "" || document.getElementById("dwcrqzzp_txt").value == "" || document.getElementById("dwcrqcp_txt").value == "" || document.getElementById("dwcrqkhdcp_txt").value == ""){
    //   tMsg = tMsg + "完成时间" + tErrMsg + " \r\n";
    //     }
    // }   
    
    // if(activityId == "UserTask_60" ){
    //   if(document.getElementById("taps").value == "" ){
    //   tMsg = tMsg + "批示" + tErrMsg + " \r\n";
    //     } 
    // } 
        
 










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