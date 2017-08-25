function RadioButton0_onclick() {
    if (document.getElementById("RadioButton0_0").checked == true) {
//document.getElementById("btpsrmj").readOnly = false;//栏位可编辑
//document.getElementById("btpsrmj").disabled = false; //栏位可编辑
       // var tmpsql = "select UNIQUE(a.ooag001) 员工编号,a.ooag011 全名,a.ooag003 归属部门,TO_CHAR(a.ooagcrtdt, 'YYYY-MM-DD') 录入日期 from ooag_t a where a.ooagent=11 and a.ooag003='1006'";
        //  alert(tmpsql);
       // var tResult = tDbConn.query(tmpsql);
        document.getElementById("txtBh").readOnly = false; //栏位可编辑
        document.getElementById("txtBh").disabled = false; //栏位可编辑
        document.getElementById("txtgc").readOnly = false; //栏位可编辑
        document.getElementById("txtgc").disabled = false; //栏位可编辑
    } else {
        document.getElementById("txtBh").value = "";
        document.getElementById("txtgc").value = "";
        document.getElementById("txtBh").readOnly = true;//栏位只读
        document.getElementById("txtBh").disabled = true; //栏位不可编辑
        document.getElementById("txtgc").readOnly = true;//栏位只读
        document.getElementById("txtgc").disabled = true; //栏位不可编辑
    }  
}
function txtBh_onclick() {

    var FileName = "SingleOpenWin";
    var sql = "select UNIQUE(a.ooag001) 员工编号,a.ooag011 全名 from ooag_t a where a.ooagent=11 and a.ooag003='1006'";
    var SQLClaused = new Array(sql);
    var SQLLabel = new Array("员工编号", "全名"); //客制开窗的Grid Label
    var QBEField = new Array("a.ooag001", "a.ooag011"); //模糊查询,須和DB Table栏位名称相同
    var QBELabel = new Array("员工编号", "全名"); //模糊查询的Label
    var ReturnId = new Array("txtBh", "txtgc"); //表单上的栏位代号
    singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
}
function RadioButton6_onclick() {
    if (document.getElementById("RadioButton6_0").checked == true) {
//document.getElementById("btpsrmj").readOnly = false;//栏位可编辑
//document.getElementById("btpsrmj").disabled = false; //栏位可编辑
        var tmpsql = "select UNIQUE(a.ooag001) 员工编号,a.ooag011 全名 from ooag_t a where a.ooagent=11 and a.ooag001='W1608010' ";
        //  alert(tmpsql);
        var tResult = tDbConn.query(tmpsql);
        document.getElementById("txtBm").value = tResult[0][0];
        document.getElementById("txtcz").value = tResult[0][1];
    } else {
        document.getElementById("txtBm").value = "";
        document.getElementById("txtcz").value = "";
        //document.getElementById("btpsrmj").readOnly = true;//栏位只读
        //document.getElementById("btpsrmj").disabled = true; //栏位不可编辑
    }
}
function RadioButton1_onclick(){
  if (document.getElementById("RadioButton1_0").checked == true) {
//document.getElementById("btpsrmj").readOnly = false;//栏位可编辑
//document.getElementById("btpsrmj").disabled = false; //栏位可编辑
        var tmpsql = "select UNIQUE(a.ooag001) 员工编号,a.ooag011 全名 from ooag_t a where a.ooagent=11 and a.ooag001='FB2159'";
        //  alert(tmpsql);
        var tResult = tDbConn.query(tmpsql);
        document.getElementById("Textbox2").value = tResult[0][0];
        document.getElementById("Textbox4").value = tResult[0][1];
    } else {
        document.getElementById("Textbox2").value = "";
        document.getElementById("Textbox4").value = "";
        //document.getElementById("btpsrmj").readOnly = true;//栏位只读
        //document.getElementById("btpsrmj").disabled = true; //栏位不可编辑
    }
}
function RadioButton2_onclick(){
  if (document.getElementById("RadioButton2_0").checked == true) {
//document.getElementById("btpsrmj").readOnly = false;//栏位可编辑
//document.getElementById("btpsrmj").disabled = false; //栏位可编辑
        var tmpsql = "select UNIQUE(a.ooag001) 员工编号,a.ooag011 全名 from ooag_t a where a.ooagent=11 and a.ooag001='Z0808001'";
        //  alert(tmpsql);
        var tResult = tDbConn.query(tmpsql);
        document.getElementById("Textbox5").value = tResult[0][0];
        document.getElementById("Textbox3").value = tResult[0][1];
    } else {
        document.getElementById("Textbox5").value = "";
        document.getElementById("Textbox3").value = "";
        //document.getElementById("btpsrmj").readOnly = true;//栏位只读
        //document.getElementById("btpsrmj").disabled = true; //栏位不可编辑
    }
}
function RadioButton3_onclick(){
  if (document.getElementById("RadioButton3_0").checked == true) {
//document.getElementById("btpsrmj").readOnly = false;//栏位可编辑
//document.getElementById("btpsrmj").disabled = false; //栏位可编辑
        var tmpsql = "select UNIQUE(a.ooag001) 员工编号,a.ooag011 全名 from ooag_t a where a.ooagent=11 and a.ooag001='Z1607022' ";
        //  alert(tmpsql);
        var tResult = tDbConn.query(tmpsql);
        document.getElementById("Textbox6").value = tResult[0][0];
        document.getElementById("Textbox8").value = tResult[0][1];
    } else {
        document.getElementById("Textbox6").value = "";
        document.getElementById("Textbox8").value = "";
        //document.getElementById("btpsrmj").readOnly = true;//栏位只读
        //document.getElementById("btpsrmj").disabled = true; //栏位不可编辑
    }
}
function RadioButton4_onclick(){
  if (document.getElementById("RadioButton4_0").checked == true) {
//document.getElementById("btpsrmj").readOnly = false;//栏位可编辑
//document.getElementById("btpsrmj").disabled = false; //栏位可编辑
        var tmpsql = "select UNIQUE(a.ooag001) 员工编号,a.ooag011 全名 from ooag_t a where a.ooagent=11 and a.ooag001='Z1505023' ";
        //  alert(tmpsql);
        var tResult = tDbConn.query(tmpsql);
        document.getElementById("Textbox10").value = tResult[0][0];
        document.getElementById("Textbox7").value = tResult[0][1];
    } else {
        document.getElementById("Textbox10").value = "";
        document.getElementById("Textbox7").value = "";
        //document.getElementById("btpsrmj").readOnly = true;//栏位只读
        //document.getElementById("btpsrmj").disabled = true; //栏位不可编辑
    }
}