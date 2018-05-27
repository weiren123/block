// function innerlist(arrs){   //将数组以列表li形式放入ul中  并添加style
//    var list = '';
//    var arr = new Array();
//    for (j=0 ; j <arrs.length;j++){
//          list += '<li style='+'"'+'color:green'+'"'+'>'+arrs[j].name+arrs[j].time+arrs[j].price+arrs[j].place+'</li>';
//          document.getElementById("list").innerHTML=list;
//     }
// }
function addTable() {
        var row1=document.getElementById("h").value;//获取属性值
        var col1=document.getElementById("l").value;//获取属性值
        var div1=document.getElementById("div1");
        var tab="<table border='1' bordercolor='blue' width='200' height='10'>";
        //循环行
        for(var i=1;i<=row1;i++)
        {
            tab+="<tr>";
            //循环列
            for(var j=1;j<=col1;j++)
            {
                tab+="<td>单元格j</td>";
            }
            tab+="</tr>";
        }
        tab+="</table>"
         div1.innerHTML=tab;
    }
