// JavaScript Document
Ext.namespace('math');

var popup=window.createPopup();
var imagenum;
function image_mouseon(image_id,i)
{//alert(image_id);

	var im=document.getElementById(image_id);
	var n=image_data.getCount();
    var rec=image_data.getRange(0,n);
	im.style.background="url(javascript/image/selected.gif)";
    window.status='点击图片查看详细信息……';
    return true;
}

function image_click(image_id,i)
{
	var im=document.getElementById(image_id);//"background-Image="'javascript/image/selected.gif";
	//im.className=imageclass;
	var n=image_data.getCount();
    var rec=image_data.getRange(0,n);
	im.style.background="url(javascript/image/selected.gif)";
	imagenum=image_id;
	var tip_html="<span id='tip'><p>图&nbsp;&nbsp;片&nbsp;&nbsp;名: "+rec[i].data.name+"<br><br>函数表达式: "+rec[i].data.expression+"</p></span><image src="+rec[i].data.type+"></image>";
	
	var bod=popup.document.body;
	bod.setAttribute("ondrag",function(){popup.top=window.event.y;});
	bod.innerHTML=tip_html;
	bod.style.padding="10px";
	bod.style.border="solid 2px #99FFCC";
	bod.style.fontsize="24pt";
	bod.style.background="#A7B4E7";

	if(window.event.x+670+Ext.getCmp('draw_west_panel').getInnerWidth()<document.body.clientWidth)
	popup.show(window.event.x+3,window.event.y+3,670+rec[i].data.expression.length,600,document.all.photo_panel);
	else if(window.event.x-670+Ext.getCmp('draw_west_panel').getInnerWidth()<0)
	popup.show(window.event.x+3-Ext.getCmp('draw_west_panel').getInnerWidth(),window.event.y+3,670+rec[i].data.expression.length,600,document.all.photo_panel);
	else
	{
		popup.show(window.event.x+3-670,window.event.y+3,670+rec[i].data.expression.length,600,document.all.photo_panel);
	}

}

function image_mouseout(image_id)
{//alert(image_id);
	var im=document.getElementById(image_id);
	//popup.hide();
	im.style.background="url(javascript/image/unselected.gif)";

}