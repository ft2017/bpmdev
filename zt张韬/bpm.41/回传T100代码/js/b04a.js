document.write('<script type="text/javascript" src="../../CustomJsLib/EFGPShareMethod.js"></script>');//for 开窗

var tEFGP = "T100PROD"; 


function formCreate(){
document.getElementById("TBtdrid").value=userId;
document.getElementById("TBtdr").value=userName;//TBsqrq
document.getElementById("TBsqrq").value=systemDateTime;
document.getElementById("TBtdbmid").value=mainOrgUnitIds;
document.getElementById("TBtdbm").value=mainOrgUnitNames;


document.getElementById("TBbxrid").value=userId;
document.getElementById("TBbxr").value=userName;//TBsqrq
document.getElementById("TBsqrq").value=systemDateTime;
document.getElementById("TBbxbmid").value=mainOrgUnitIds;
document.getElementById("TBbxbm").value=mainOrgUnitNames;
}
function formOpen(){
  var tGrid1 = document.getElementById("Grid1").value; //取出儲存在隱藏欄位中的Grid資料 
var tGrid2 = document.getElementById("Grid2").value; //取出儲存在隱藏欄位中的Grid資料    
  if(typeof(Grid1Obj) != "undefined"){  //判斷grid物件是否存在表單中   
  
    if(tGrid1.length >1 ){  //判斷Grid是否有資料   
      Grid1Obj.reload(eval(tGrid1));  //若Grid有資料則將存於隱藏中的值載入Grid中   
    }   
  } 
if(typeof(Grid2Obj) != "undefined"){  //判斷grid物件是否存在表單中   
  
    if(tGrid2.length >1 ){  //判斷Grid是否有資料   
      Grid2Obj.reload(eval(tGrid2));  //若Grid有資料則將存於隱藏中的值載入Grid中   
    }   
  } 
return true;
}
function formSave(){
      if(typeof(Grid1Obj) != "undefined")
      {  //判斷grid物件是否存在表單中   
        document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將Grid裡的資料儲存至隱藏欄位中   
      }
  document.getElementById("TBbbbm").value = Textbox22.value
  document.getElementById("TBbb").value = Textbox20.value
return true;
}
function formClose(){
return true;
}


function BTxz_onclick(){   

    Grid1Obj.addRow();  //將Binding欄位的資料填入Grid中
      Grid1Obj.clearBinding();  //新增後清除Binding欄位資料   
      document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中  
      var fun= new add;
      var fun_sum= new sum;


}  
  
function BTxg_onclick(){   

  Grid1Obj.editRow();  //將修改後的欄位的資料填入Grid中   
  Grid1Obj.clearBinding();  //清除Binding欄位資料   
  document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中   
  var fun= new add;
  var fun_sum= new sum;

}   
 
function BTsc_onclick(){   
  Grid1Obj.deleteRow();  //將Grid某筆資料刪除   
  Grid1Obj.clearBinding();  //清除Binding欄位資料   
  document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中   
  var fun= new add;
  var fun_sum= new sum;

}   

function BTxza_onclick(){   

    Grid2Obj.addRow();  //將Binding欄位的資料填入Grid中
      Grid2Obj.clearBinding();  //新增後清除Binding欄位資料   
      document.getElementById("Grid2").value = Grid2Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中  
      var fun= new add2;
;
}  
  
function BTxg1_onclick(){   

  Grid2Obj.editRow();  //將修改後的欄位的資料填入Grid中   
  Grid2Obj.clearBinding();  //清除Binding欄位資料   
  document.getElementById("Grid2").value = Grid2Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中   
  var fun= new add2;

}   
 
function BTsc1_onclick(){   
  Grid2Obj.deleteRow();  //將Grid某筆資料刪除   
  Grid2Obj.clearBinding();  //清除Binding欄位資料   
  document.getElementById("Grid2").value = Grid2Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中   
  var fun= new add2;

}

  // 统计本币金额，张一翔，08-16
  var add=function GridTotal(){
  var gridData = Grid1Obj.getData();
  var tSellingPriceTemp = 0;
  var tSellingPriceTemp2 = 0;  
  if (gridData.length > 0){       
    for (i = 0; i < gridData.length; i++){
      if(gridData[i][10] != ""){
        tSellingPriceTemp = tSellingPriceTemp + eval(gridData[i][10]);
      }     
      if(gridData[i][8] != ""){
        tSellingPriceTemp2 = tSellingPriceTemp2 + eval(gridData[i][8]);
      }  
    }       
    document.getElementById("TBbxzje").value = eval(tSellingPriceTemp );
    document.getElementById("TBybzje").value = eval(tSellingPriceTemp2 );
    
  }
  else{
    document.getElementById("TBbxzje").value = '0';
    document.getElementById("TBybzje").value = '0';
  }
}
  // 统计本币金额，张一翔，08-16
  var add2=function GridTotal2(){
  var gridData = Grid2Obj.getData();
  var tSellingPriceTemp = 0;
  var tSellingPriceTemp2 = 0;  
  if (gridData.length > 0){       
    for (i = 0; i < gridData.length; i++){
      if(gridData[i][6] != ""){
        tSellingPriceTemp = tSellingPriceTemp + eval(gridData[i][6]);
      }     
    }       
    document.getElementById("TBbcdkjehj").value = eval(tSellingPriceTemp );

    
  }
  else{
    document.getElementById("TBbcdkjehj").value = '0';

  }
}
   /** 数字金额大写转换(可以处理整数,小数,负数) */    
    var sum = function smalltoBIG()     
    {    
        var fraction = ['角', '分'];    
        var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];    
        var unit = [ ['元', '万', '亿'], ['', '拾', '佰', '仟']  ];    
        var head = n < 0? '欠': '';    
        var n = 0;
        n = document.getElementById("TBbxzje").value; 
      
        var s = '';    
      
        for (var i = 0; i < fraction.length; i++)     
        {    
            s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');    
        }    
        s = s || '整';    
        n = Math.floor(n);    
      
        for (var i = 0; i < unit[0].length && n > 0; i++)     
        {    
            var p = '';    
            for (var j = 0; j < unit[1].length && n > 0; j++)     
            {    
                p = digit[n % 10] + unit[1][j] + p;    
                n = Math.floor(n / 10);    
            }    
            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零')  + unit[0][i] + s;    
        }    
        document.getElementById("TBdx").value = (head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整'));    
    } 

    //张一翔，开窗选择人员信息
function BTbxr_onclick(){

  var FileName = "SingleOpenWin";   
  var sql = " select a.ooag001 工号,a.ooag011 姓名,b.ooefl001 部门编码,b.ooefl003 部门 from ooefl_t b,ooag_t a where a.ooagent = 10 and b.OOEFLENT = 10 and a.ooag003 = b.ooefl001"; 
  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("工号","姓名","部门编码","部门");//客制开窗的Grid Label
  var QBEField = new Array("a.ooag001","a.ooag011","a.ooag011","b.ooefl003");//模糊查询,須和DB Table栏位名称相同
  var QBELabel = new Array("工号","姓名","部门编码","部门");//模糊查询的Label
  var ReturnId = new Array("TBbxrid","TBbxr","TBbxbmid","TBbxbm");//表单上的栏位代号
  singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
     
}
    //张一翔，开窗选择单号
function BTzzd_onclick(){

  var FileName = "SingleOpenWin";   
  var sql = " select apcadocno 单号 from apca_t where apca014 = apca057 and apca014 = '"+TBbxrid.value+"' AND APCAENT = 11 "; 
  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("单号");//客制开窗的Grid Label
  var QBEField = new Array("apcadocno");//模糊查询,須和DB Table栏位名称相同
  var QBELabel = new Array("单号");//模糊查询的Label
  var ReturnId = new Array("TBzzdh");//表单上的栏位代号
  singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
     
}
    //张一翔，开窗选择费用类型、科目
function BTfyyy_onclick(){

  var FileName = "SingleOpenWin";   
  var sql = " SELECT a.glab003 费用类型编号,b.oocql004 费用类型,a.glab006 费用科目编号,c.glacl004 费用科目，a.glabent FROM GLAB_T a join oocql_t b on b.oocqlent=a.glabent and b.oocql001='3212' and b.oocql003='zh_CN' join glacl_t c on c.glaclent=a.glabent and c.glacl002=a.glab006 and c.glacl003='zh_CN' and b.oocql002=a.glab003 where a.glab006<>' ' and a.glabent = '11'"; 
  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("费用类型编号","费用类型","费用科目编号","费用科目");//客制开窗的Grid Label
  var QBEField = new Array("a.glab003","b.oocql004","a.glab006","c.glacl004");//模糊查询,須和DB Table栏位名称相同
  var QBELabel = new Array("费用类型编号","费用类型","费用科目编号","费用科目");//模糊查询的Label
  var ReturnId = new Array("TBfyyyid","TBfyyy","TBfykmid","TBfykm");//表单上的栏位代号
  singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
     
}

    //张一翔，开窗选择币别
function Button21_onclick(){

  var FileName = "SingleOpenWin";   
  var sql = " select COLUMN1 币别缩写,COLUMN2 币别 from h_bibie "; 
  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("币别缩写","币别");//客制开窗的Grid Label
  var QBEField = new Array("COLUMN1","COLUMN2");//模糊查询,須和DB Table栏位名称相同
  var QBELabel = new Array("币别缩写","币别");//模糊查询的Label
  var ReturnId = new Array("Textbox22","Textbox20");//表单上的栏位代号

  singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);   



}
    //张一翔，开窗选择币别
function Button31_onclick(){

  var FileName = "SingleOpenWin";   
  var sql = " select COLUMN1 币别缩写,COLUMN2 币别 from h_bibie "; 
  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("币别缩写","币别");//客制开窗的Grid Label
  var QBEField = new Array("COLUMN1","COLUMN2");//模糊查询,須和DB Table栏位名称相同
  var QBELabel = new Array("币别缩写","币别");//模糊查询的Label
  var ReturnId = new Array("TBbbbm","TBbb");//表单上的栏位代号
  singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
     
}
//$-----Auto generated script block, Please do not edit or modify script below this line.-----$//