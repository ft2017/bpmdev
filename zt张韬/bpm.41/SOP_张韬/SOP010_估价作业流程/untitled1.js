
//管代为黄经理，如需修改需要在代码中调整，数据源注意检查

document.write('<script type="text/javascript" src="../../CustomJsLib/EFGPShareMethod.js"></script>');//for 开窗


var tDbConn = new DataSource("FT_HTPSB","SQL0");//前面是表单代号，后面是sql command控件的名称
var tEFGP = "BPM"; 


function formCreate(){
  document.getElementById("tbzdrid").value = userId;
    document.getElementById("tbzdr").value = userName;
  document.getElementById("tbzdbmid").value = mainOrgUnitIds;
  document.getElementById("tbzdbm").value = mainOrgUnitNames;
  document.getElementById("tbrq").value=systemDateTime;
  document.getElementById("tbpsridgd").value ="Z1006008";
  document.getElementById("tbpsrgd").value ="黄叶峰";
return true;
}
function formOpen(){
  document.getElementById("btpsrmj").style.display = "none";//不显示对象
  document.getElementById("btpsrsg").style.display = "none";//不显示对象
  document.getElementById("btpsrgd").style.display = "none";//不显示对象
    if(activityId == "UserTask_64" ){//发起人确认
  document.getElementById("tbzrrztdd").value = document.getElementById("tbzdr").value;
  document.getElementById("tbzrrycl").value = document.getElementById("tbzdr").value;
  document.getElementById("tbzrrzzp").value = document.getElementById("tbzdr").value;
  document.getElementById("tbzrrcp").value = document.getElementById("tbzdr").value;
  document.getElementById("tbzrrkhdcp").value = document.getElementById("tbzdr").value;

  }
return true;
}
function formSave(){
    //非空校验合格
  if (checkNull()) 
  {
    jlrq();
      return true;
    }
  return false;
}
function formClose(){
return true;
}


//工程是否参加评审
function rbgc_onclick(){
  if(document.getElementById("rbgc_0").checked == true){
    document.getElementById("btpsrgc").readOnly = false;//栏位可编辑
    document.getElementById("btpsrgc").disabled = false; //栏位可编辑
  }else{
    document.getElementById("tbpsridgc").value ="";
    document.getElementById("tbpsrgc").value ="";
    document.getElementById("btpsrgc").readOnly = true;//栏位只读
    document.getElementById("btpsrgc").disabled = true; //栏位不可编辑
  }
}


//工程评审人开窗
function btpsrgc_onclick(){

    var FileName = "SingleOpenWin";   
  var sql = " select id,userName from Users  where id='0167' or id ='Z0407002' or id ='W1410001'"; 
  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("评审人工号","评审人姓名");//客制开窗的Grid Label
  var QBEField = new Array("id","userName");//模糊查询,須和DB Table栏位名称相同
  var QBELabel = new Array("评审人工号","评审人姓名");//模糊查询的Label
     var ReturnId = new Array("tbpsridgc","tbpsrgc");//表单上的栏位代号
  singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
     
}

//品保是否参加评审
function rbpb_onclick(){
  if(document.getElementById("rbpb_0").checked == true){
    document.getElementById("btpsrpb").readOnly = false;//栏位可编辑
    document.getElementById("btpsrpb").disabled = false; //栏位可编辑
  }else{
    document.getElementById("tbpsridpb").value ="";
    document.getElementById("tbpsrpb").value ="";
    document.getElementById("btpsrpb").readOnly = true;//栏位只读
    document.getElementById("btpsrpb").disabled = true; //栏位不可编辑
  }
}


//品保评审人开窗
function btpsrpb_onclick(){

    var FileName = "SingleOpenWin";   
  var sql = " select U.id,U.userName"+
                   " from Users U left join Functions F on F.occupantOID = U.OID "+
                   " left join OrganizationUnit OU on OU.OID = F.organizationUnitOID "+
                   " inner join Organization O on O.OID = OU.organizationOID "+
                   " where U.leaveDate is null and F.isMain = 1 and OU.organizationUnitType = 0 and OU.id='1008'";
  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("评审人工号","评审人姓名");//客制开窗的Grid Label
  var QBEField = new Array("U.id","U.userName");//模糊查询,須和DB Table栏位名称相同
  var QBELabel = new Array("评审人工号","评审人姓名");//模糊查询的Label
     var ReturnId = new Array("tbpsridpb","tbpsrpb");//表单上的栏位代号
  singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
     
}

//模具是否参加评审
function rbmj_onclick(){
  if(document.getElementById("rbmj_0").checked == true){
    //document.getElementById("btpsrmj").readOnly = false;//栏位可编辑
    //document.getElementById("btpsrmj").disabled = false; //栏位可编辑
     var tmpsql ="select U.id,U.userName from Users U left join Functions F on F.occupantOID = U.OID left join OrganizationUnit OU on OU.OID = F.organizationUnitOID inner join Organization O on O.OID = OU.organizationOID where U.leaveDate is null  and OU.organizationUnitType = 0 and OU.managerOID=U.OID and OU.id = '100306'";
   //  alert(tmpsql);
       var tResult= tDbConn.query(tmpsql);
      document.getElementById("tbpsridmj").value =tResult[0][0];
    document.getElementById("tbpsrmj").value =tResult[0][1];
     
  }else{
    document.getElementById("tbpsridmj").value ="";
    document.getElementById("tbpsrmj").value ="";
    //document.getElementById("btpsrmj").readOnly = true;//栏位只读
    //document.getElementById("btpsrmj").disabled = true; //栏位不可编辑
  }
}


//模具评审人开窗
/*function btpsrmj_onclick(){

    var FileName = "SingleOpenWin";   
  var sql = " select id,userName from Users  where id='0167' or id ='Z0407002' or id ='W1410001'"; 
  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("评审人工号","评审人姓名");//客制开窗的Grid Label
  var QBEField = new Array("id","userName");//模糊查询,須和DB Table栏位名称相同
  var QBELabel = new Array("评审人工号","评审人姓名");//模糊查询的Label
     var ReturnId = new Array("tbpsridmj","tbpsrmj");//表单上的栏位代号
  singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
     
}*/

//制造是否参加评审
function rbzz_onclick(){
  if(document.getElementById("rbzz_0").checked == true){
    document.getElementById("btpsrzz").readOnly = false;//栏位可编辑
    document.getElementById("btpsrzz").disabled = false; //栏位可编辑
  }else{
    document.getElementById("tbpsridzz").value ="";
    document.getElementById("tbpsrzz").value ="";
    document.getElementById("btpsrzz").readOnly = true;//栏位只读
    document.getElementById("btpsrzz").disabled = true; //栏位不可编辑
  }
}


//制造评审人开窗
function btpsrzz_onclick(){

    var FileName = "SingleOpenWin";   
  var sql = "select U.id,U.userName from Users U left join Functions F on F.occupantOID = U.OID left join OrganizationUnit OU on OU.OID = F.organizationUnitOID inner join Organization O on O.OID = OU.organizationOID where U.leaveDate is null  and OU.organizationUnitType = 0 and OU.managerOID=U.OID and (OU.id = '100305' or OU.id = '1003' or OU.id = '100301'or OU.id = '100302'or OU.id = '100303'or OU.id = '100304' or OU.id = '100306')"; 
  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("评审人工号","评审人姓名");//客制开窗的Grid Label
  var QBEField = new Array("U.id","U.userName");//模糊查询,須和DB Table栏位名称相同
  var QBELabel = new Array("评审人工号","评审人姓名");//模糊查询的Label
     var ReturnId = new Array("tbpsridzz","tbpsrzz");//表单上的栏位代号
  singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
     
}

//生管是否参加评审
function rbsg_onclick(){
  if(document.getElementById("rbsg_0").checked == true){
    //document.getElementById("btpsrsg").readOnly = false;//栏位可编辑
    //document.getElementById("btpsrsg").disabled = false; //栏位可编辑
    //SQLCommond控件查询 
     var tmpsql ="select U.id,U.userName from Users U left join Functions F on F.occupantOID = U.OID left join OrganizationUnit OU on OU.OID = F.organizationUnitOID inner join Organization O on O.OID = OU.organizationOID where U.leaveDate is null  and OU.organizationUnitType = 0 and OU.managerOID=U.OID and OU.id = '100305'";
   //  alert(tmpsql);
       var tResult= tDbConn.query(tmpsql);
      document.getElementById("tbpsridsg").value =tResult[0][0];
    document.getElementById("tbpsrsg").value =tResult[0][1];
     
  }else{
    document.getElementById("tbpsridsg").value ="";
    document.getElementById("tbpsrsg").value ="";
    //document.getElementById("btpsrsg").readOnly = true;//栏位只读
    //document.getElementById("btpsrsg").disabled = true; //栏位不可编辑
  }
}


//生管评审人开窗
/*function btpsrsg_onclick(){

    var FileName = "SingleOpenWin";   
  var sql = " select id,userName from Users  where id='0167' or id ='Z0407002' or id ='W1410001'"; 
  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("评审人工号","评审人姓名");//客制开窗的Grid Label
  var QBEField = new Array("id","userName");//模糊查询,須和DB Table栏位名称相同
  var QBELabel = new Array("评审人工号","评审人姓名");//模糊查询的Label
     var ReturnId = new Array("tbpsridsg","tbpsrsg");//表单上的栏位代号
  singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
     
}*/

//营销是否参加评审
function rbyx_onclick(){
  if(document.getElementById("rbyx_0").checked == true){
    document.getElementById("btpsryx").readOnly = false;//栏位可编辑
    document.getElementById("btpsryx").disabled = false; //栏位可编辑
  }else{
    document.getElementById("tbpsridyx").value ="";
    document.getElementById("tbpsryx").value ="";
    document.getElementById("btpsryx").readOnly = true;//栏位只读
    document.getElementById("btpsryx").disabled = true; //栏位不可编辑
  }
}


//营销评审人开窗
function btpsryx_onclick(){

    var FileName = "SingleOpenWin";   
  var sql = " select U.id,U.userName"+
                   " from Users U left join Functions F on F.occupantOID = U.OID "+
                   " left join OrganizationUnit OU on OU.OID = F.organizationUnitOID "+
                   " inner join Organization O on O.OID = OU.organizationOID "+
                   " where U.leaveDate is null and F.isMain = 1 and OU.organizationUnitType = 0 and OU.id='1004'";
  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("评审人工号","评审人姓名");//客制开窗的Grid Label
  var QBEField = new Array("U.id","U.userName");//模糊查询,須和DB Table栏位名称相同
  var QBELabel = new Array("评审人工号","评审人姓名");//模糊查询的Label
     var ReturnId = new Array("tbpsridyx","tbpsryx");//表单上的栏位代号
  singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
     
}

function jlrq(){
  if(activityId == "UserTask_24" ){//工程
  document.getElementById("tapsrqgc").value = systemDateTime;
  }
  if(activityId == "UserTask_26" ){//品保
  document.getElementById("tapsrqpb").value = systemDateTime;
  }
  if(activityId == "UserTask_28" ){//模具
  document.getElementById("tapsrqmj").value = systemDateTime;
  }
  if(activityId == "UserTask_30" ){//制造
  document.getElementById("tapsrqzz").value = systemDateTime;
  }
  if(activityId == "UserTask_32" ){//生管
  document.getElementById("tapsrqsg").value = systemDateTime;
  }
  if(activityId == "UserTask_34" ){//营销
  document.getElementById("tapsrqyx").value = systemDateTime;
  }
  if(activityId == "UserTask_56" ){//管代
  document.getElementById("tapsrqgd").value = systemDateTime;
  }
  if(activityId == "UserTask_64" ){//发起人确认
  document.getElementById("tbzrrztdd").value = document.getElementById("tbzdr").value;
  document.getElementById("tbzrrycl").value = document.getElementById("tbzdr").value;
  document.getElementById("tbzrrzzp").value = document.getElementById("tbzdr").value;
  document.getElementById("tbzrrcp").value = document.getElementById("tbzdr").value;
  document.getElementById("tbzrrkhdcp").value = document.getElementById("tbzdr").value;

  }
  
}

function checkNull(){
    var tMsg = "";
    var tErrMsg = "不能为空"; 
    if(activityId == "UserTask_2" ){
    if(document.getElementById("tbkh").value == ""){  
      tMsg = tMsg + "客户" + tErrMsg + " \r\n";
    }
    if(document.getElementById("cbhylx_0").checked != true && document.getElementById("cbhylx_1").checked != true && document.getElementById("cbhylx_2").checked != true && document.getElementById("cbhylx_3").checked != true && document.getElementById("cbhylx_4").checked != true ){ 
      tMsg = tMsg + "合约类型" + tErrMsg + " \r\n";
    }
    if(document.getElementById("rbgc_0").checked != true && document.getElementById("rbgc_1").checked != true ){  
      tMsg = tMsg + "工程是否需要参加评审" + tErrMsg + " \r\n";
    }
    if(document.getElementById("rbpb_0").checked != true && document.getElementById("rbpb_1").checked != true ){  
      tMsg = tMsg + "品保是否需要参加评审" + tErrMsg + " \r\n";
    }
    if(document.getElementById("rbmj_0").checked != true && document.getElementById("rbmj_1").checked != true ){  
      tMsg = tMsg + "模具是否需要参加评审" + tErrMsg + " \r\n";
    }
    if(document.getElementById("rbzz_0").checked != true && document.getElementById("rbzz_1").checked != true ){  
      tMsg = tMsg + "制造是否需要参加评审" + tErrMsg + " \r\n";
    }
    if(document.getElementById("rbsg_0").checked != true && document.getElementById("rbsg_1").checked != true ){  
      tMsg = tMsg + "生管是否需要参加评审" + tErrMsg + " \r\n";
    }
    if(document.getElementById("rbyx_0").checked != true && document.getElementById("rbyx_1").checked != true ){  
      tMsg = tMsg + "营销是否需要参加评审" + tErrMsg + " \r\n";
    }
    
    if(document.getElementById("rbgc_0").checked == true && document.getElementById("tbpsridgc").value == "" ){ 
      tMsg = tMsg + "工程评审人" + tErrMsg + " \r\n";
    }
    if(document.getElementById("rbpb_0").checked == true && document.getElementById("tbpsridpb").value == "" ){ 
      tMsg = tMsg + "品保评审人" + tErrMsg + " \r\n";
    }
    if(document.getElementById("rbmj_0").checked == true && document.getElementById("tbpsridmj").value == "" ){ 
      tMsg = tMsg + "模具评审人" + tErrMsg + " \r\n";
    }
    if(document.getElementById("rbzz_0").checked == true && document.getElementById("tbpsridzz").value == "" ){ 
      tMsg = tMsg + "制造评审人" + tErrMsg + " \r\n";
    }
    if(document.getElementById("rbsg_0").checked == true && document.getElementById("tbpsridsg").value == "" ){ 
      tMsg = tMsg + "生管评审人" + tErrMsg + " \r\n";
    }
    if(document.getElementById("rbyx_0").checked == true && document.getElementById("tbpsridyx").value == "" ){ 
      tMsg = tMsg + "营销评审人" + tErrMsg + " \r\n";
    }
  
    if(document.getElementById("rbgc_0").checked == true && document.getElementById("taxpsnrgc").value == "" ){ 
      tMsg = tMsg + "工程需评审内容" + tErrMsg + " \r\n";
    }
    if(document.getElementById("rbpb_0").checked == true && document.getElementById("taxpsnrpb").value == "" ){ 
      tMsg = tMsg + "品保需评审内容" + tErrMsg + " \r\n";
    }
    if(document.getElementById("rbmj_0").checked == true && document.getElementById("taxpsnrmj").value == "" ){ 
      tMsg = tMsg + "模具需评审内容" + tErrMsg + " \r\n";
    }
    if(document.getElementById("rbzz_0").checked == true && document.getElementById("taxpsnrzz").value == "" ){ 
      tMsg = tMsg + "制造需评审内容" + tErrMsg + " \r\n";
    }
    if(document.getElementById("rbsg_0").checked == true && document.getElementById("taxpsnrsg").value == "" ){ 
      tMsg = tMsg + "生管需评审内容" + tErrMsg + " \r\n";
    }
    if(document.getElementById("rbyx_0").checked == true && document.getElementById("taxpsnryx").value == "" ){ 
      tMsg = tMsg + "营销需评审内容" + tErrMsg + " \r\n";
    }
      }
      
    if(activityId == "UserTask_24" ){
    if(document.getElementById("rbgc_0").checked == true && document.getElementById("tapsyjgc").value == "" ){  
      tMsg = tMsg + "工程评审意见" + tErrMsg + " \r\n";
    }
    }
    if(activityId == "UserTask_26" ){
    if(document.getElementById("rbpb_0").checked == true && document.getElementById("tapsyjpb").value == "" ){  
      tMsg = tMsg + "品保评审意见" + tErrMsg + " \r\n";
    }
    }
    if(activityId == "UserTask_28" ){
    if(document.getElementById("rbmj_0").checked == true && document.getElementById("tapsyjmj").value == "" ){  
      tMsg = tMsg + "模具评审意见" + tErrMsg + " \r\n";
    };
    }
    if(activityId == "UserTask_30" ){
    if(document.getElementById("rbzz_0").checked == true && document.getElementById("tapsyjzz").value == "" ){  
      tMsg = tMsg + "制造评审意见" + tErrMsg + " \r\n";
    }
    }
    if(activityId == "UserTask_32" ){
    if(document.getElementById("rbsg_0").checked == true && document.getElementById("tapsyjsg").value == "" ){  
      tMsg = tMsg + "生管评审意见" + tErrMsg + " \r\n";
    }
    if(document.getElementById("rbsg_0").checked == true  ){
        if(document.getElementById("tbslztdd").value == "" || document.getElementById("tbslycl").value == "" || document.getElementById("tbslzzp").value == "" || document.getElementById("tbslcp").value == "" || document.getElementById("tbslkhdcp").value == ""){
      tMsg = tMsg + "数量" + tErrMsg + " \r\n";
        }
    }
    }
    if(activityId == "UserTask_34" ){
    if(document.getElementById("rbyx_0").checked == true && document.getElementById("tapsyjyx").value == "" ){  
      tMsg = tMsg + "营销评审意见" + tErrMsg + " \r\n";
    }
    }
    if(activityId == "UserTask_56" ){
    if(document.getElementById("rbgd_0").checked == true && document.getElementById("tapsyjgd").value == "" ){  
      tMsg = tMsg + "管代评审意见" + tErrMsg + " \r\n";
    }
    }
      
    if(activityId == "UserTask_64" ){//发起人确认
      if(document.getElementById("taclfsztdd").value == "" || document.getElementById("taclfsycl").value == "" || document.getElementById("taclfszzp").value == "" || document.getElementById("taclfscp").value == "" || document.getElementById("taclfskhdcp").value == ""){
      tMsg = tMsg + "处理方式" + tErrMsg + " \r\n";
        } 
      if(document.getElementById("dwcrqztdd_txt").value == "" || document.getElementById("dwcrqycl_txt").value == "" || document.getElementById("dwcrqzzp_txt").value == "" || document.getElementById("dwcrqcp_txt").value == "" || document.getElementById("dwcrqkhdcp_txt").value == ""){
      tMsg = tMsg + "完成时间" + tErrMsg + " \r\n";
        }
    }   
    
    if(activityId == "UserTask_60" ){
      if(document.getElementById("taps").value == "" ){
      tMsg = tMsg + "批示" + tErrMsg + " \r\n";
        } 
    } 
        
    if(tMsg == ""){
      return true;
    }
    else{
      alert(tMsg);
      return false;
    }
}



//$-----Auto generated script block, Please do not edit or modify script below this line.-----$//