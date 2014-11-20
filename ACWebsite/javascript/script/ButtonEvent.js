// JavaScript Document
Ext.namespace('math');

var str1="";
var str2="";
var str_to_server="";      //主要对符号计算，向服务器发送的函数字符串
var str_before=new Array();   //存放符号计算面板textarea代码的历史记录，用于back键的恢复操作
var str_out_history=new Array();  //用于存放id='out'区域的历史
var convert_str_before=new Array();
var clcalute_flag=0;     //普通计算，是否点过等号按钮标志
var n=0;
var m=0;
var math_active=0;

function button_append(st)
{
	if(clcalute_flag==1)
	{clcalute_flag=0;
		//button_clc();
	}
	var outnode = document.getElementById('commandContainer_out');
	var gram_now=document.getElementById('grammar_now');
	str_before[m]=document.getElementById('entryBox_out').value;
	m++;
	if(math_active==0)
	document.getElementById('entryBox_out').value+=st;
	else
	document.getElementById('entryBox_out').value=st;
	gram_now.innerHTML=document.getElementById('entryBox_out').value;
	var str=document.getElementById('entryBox_out').value;
	str1=str;
					str2=str;
	str="amath`"+str;
    outnode.innerHTML=str;  
    AMprocessNode(outnode);
	
}

function button_back()
{
	if(m-1>=0)
	{
		document.getElementById('in').value="";
	document.getElementById('in').value=str_before[m-1];
	str="amath`"+document.getElementById('in').value;
	var outnode = document.getElementById('out');
	var n=outnode.childNodes.length;
	if(n>0)
	 {
		 outnode.removeChild(outnode.lastChild);
		 
	 }
	AMprocessNode(outnode);
	m--;
	}
}

function button_calculate()
{
	
	//式子显示处理
	var command_out=document.getElementById('commandContainer_out');
           var text_out=document.getElementById('entryBox_out');
           var prompt_out=document.getElementById('commandPrompt_out');
		var str_return=calculate('entryBox_out','commandContainer_out');
		clcalute_flag=1;
		 prompt_out.innerHTML+="amath`"+text_out.value+'<br><br>'+'&nbsp;&nbsp;ans=<br><br>';
         prompt_out.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"amath`"+str_return+"<br><br>"+'AC:\\\>&nbsp;';
		 command_out.innerHTML='';
		 
		 //代码显示处理
		var gram_now=document.getElementById('grammar_now');
		var gram_last=document.getElementById('grammar_last');
		gram_last.innerHTML+=text_out.value+'<br><br>'+'&nbsp;&nbsp;ans=<br><br>';
		gram_last.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+str_return+'<br><br>'+'AC:\\\>&nbsp;';
		gram_now.innerHTML="";
		
	    text_out.value="";
        setFocusToEntryBox();
	    m=0;
	    n=0;
    	AMprocessNode(document.getElementById('out'));
		
}

function button_cls()
{
	
	n=0;
	m=0;
	clcalute_flag=0;
	//式子显示处理
	var prompt1=document.getElementById('commandPrompt_out');
	prompt1.innerHTML='AC:\\\>&nbsp;';
    
	document.getElementById('commandContainer_out').innerHTML="";
	document.getElementById('entryBox_out').value="";
	
	start_textnode();
}

function button_cls1()
{
	
	n=0;
	m=0;
	clcalute_flag=0;
	var command_out=document.getElementById('commandContainer_out');
	var text_out=document.getElementById('entryBox_out');
	if(document.getElementById('commandContainer_out').innerHTML!="")
	{
		//式子显示处理
	    var prompt1=document.getElementById('commandPrompt_out');
        prompt1.innerHTML+=command_out.innerHTML+'<br/>'+'AC:\\\>&nbsp;';
	
	    //代码显示处理
	    var gram_now=document.getElementById('grammar_now');
	    var gram_last=document.getElementById('grammar_last');
	    gram_last.innerHTML+=str1+'<br/>'+'AC:\\\>&nbsp;';
	    gram_now.innerHTML="";
		command_out.innerHTML="";
	    text_out.value="";
	    AMprocessNode(document.getElementById('out'));
	}
	
	start_textnode();
}


function display_integrate(id){
                
                    var str = document.getElementById('field_int').value;
					var int_x = document.getElementById('field_int_x').value;
					str_to_server="integrate("+str+","+int_x+");";
                    str = "int("+ str+")"+"d"+int_x;
					str1=str;
					str2=str;
					document.getElementById('entryBox_out').value=str;
					str="amath`"+str;
					document.getElementById('commandContainer_out').innerHTML=str;
                    AMprocessNode(document.getElementById('out'));
                
            }



function amath_integrate() //不定积分,添加事件:onclick='ACSymbolic(str_to_server)'
{
	var active=document.getElementById('active_area');
	active_cls();
	document.getElementById('commandContainer_out').innerHTML="";
str="<br><fieldset><br>&nbsp;&nbsp;<label style=margin-left:40><font size=2>被积函数 ：</label></font><input id='field_int' style=height:30 type=text name=textfield value=f(x) height=20 onkeyup=display_integrate(this.id) /> <br>&nbsp;&nbsp;&nbsp;<label style=margin-left:38><font size=2>指定变量 ：</label></font><input id='field_int_x' style=height:30 type=text name=textfield value=x height=20 onkeyup=display_integrate(this.id) /> <br><br><button id='sub_integrate' onclick='ACSymbolic(str_to_server)'><font size=2>确定</font></button>&nbsp;&nbsp;&nbsp;&nbsp;<button id='reset_integrate' onclick=button_reset('field_int','field_int','field_int')><font size=2>重置</font></button><br><br></fieldset>";

	var area=document.createElement('div');
	area.innerHTML=str;
	active.appendChild(area);
	
}

function display_integrate_a(id){
                
                    var up = document.getElementById('field_int_up').value;
					var down = document.getElementById('field_int_down').value;
					var a = document.getElementById('field_int_a').value;
					var int_x = document.getElementById('field_int_x').value;
                    str = "int_"+ down+"^"+up+"("+a+")"+"d"+int_x;
					str1=str;
					str2=str;
					document.getElementById('entryBox_out').value=str;
					str="amath`"+str;
					str_to_server="integrate("+a+","+int_x+","+down+","+up+");";
                    document.getElementById('commandContainer_out').innerHTML=str;
                    AMprocessNode(document.getElementById('out'));
                
            }

function amath_integrate_a()//定积分,添加事件:onclick='ACSymbolic(str_to_server)'
{
	var active=document.getElementById('active_area');
	active_cls();
	document.getElementById('commandContainer_out').innerHTML="";
str="<fieldset><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>积分上限 ：</label></font><input id='field_int_up' style=height:27 type=text name=textfield value=b height=20 onkeyup=display_integrate_a(this.id) /> <br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>积分下限 ：</font><input id='field_int_down' style=height:27 type=text name=textfield value=a height=20 onkeyup=display_integrate_a(this.id) /> </label><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>被积函数 ：</font><input id='field_int_a' style=height:27 type=text name=textfield value=f(x) height=20 onkeyup=display_integrate_a(this.id) /> </label><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>指定变量 ：</label></font><input id='field_int_x' style=height:27 type=text name=textfield value=x height=20 onkeyup=display_integrate_a(this.id) /> <br><br><button id='sub_integrate_a' onclick='ACSymbolic(str_to_server)'style=width:80><font size=2>确定</font></button>&nbsp;&nbsp;&nbsp;&nbsp;<button id='reset_integrate_a' onclick=button_reset('field_int_up','field_int_down','field_int_a') style=width:80><font size=2 >重置</font></button><br><br></fieldset>";

	var area=document.createElement('div');
	area.innerHTML=str;
	active.appendChild(area);
	//active.update();
	
}

function display_differential(id){
                
                    var str = document.getElementById('field_diff').value;
					var diff_x = document.getElementById('field_diff_x').value;
					var diff_n = document.getElementById('field_diff_n').value;
					str_to_server="diff("+str+","+diff_x+","+diff_n+");";
                    str ="d^"+diff_n+"("+ str+")/d"+diff_x+"^"+diff_n;
					str1=str;
					str2=str;
					document.getElementById('entryBox_out').value=str;
					
					str="amath`"+str;
					
                    document.getElementById('commandContainer_out').innerHTML=str;
                    AMprocessNode(document.getElementById('out'));
                
            }

function amath_differential()//微分,添加事件:onclick='ACSymbolic(str_to_server)'
{
	var active=document.getElementById('active_area');
	active_cls();
	document.getElementById('commandContainer_out').innerHTML="";
str="<br><fieldset><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>微分函数 ：</font><input id='field_diff' style=height:27 type=text name=textfield value=f(x) height=20 onkeyup=display_differential(this.id) /> </label><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>指定变量 ：</label></font><input id='field_diff_x' style=height:27 type=text name=textfield value=x height=20 onkeyup=display_differential(this.id) /><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>指定阶数 ：</label></font><input id='field_diff_n' style=height:27 type=text name=textfield value=1 height=20 onkeyup=display_differential(this.id) /><br><br><button id='sub_differential' onclick='ACSymbolic(str_to_server)'style=width:80><font size=2>确定</font></button>&nbsp;&nbsp;&nbsp;&nbsp;<button id='reset_differential' style=width:80 onclick=button_reset('field_diff','field_diff','field_diff')><font size=2>重置</font></button><br><br></fieldset>";

	var area=document.createElement('div');
	area.innerHTML=str;
	active.appendChild(area);
	
}

function display_differential_x(id){
                
                    var c = document.getElementById('field_diff_c').value;
					var diff = document.getElementById('field_diff').value;
					var diff_x = document.getElementById('field_diff_xa').value;
					var diff_n = document.getElementById('field_diff_na').value;
					
                    str ="d^"+diff_n+"("+ diff+")/d"+diff_x+"^"+diff_n+"|"+diff_x+"="+c;
					str1=str;
					str2=str;
					document.getElementById('entryBox_out').value=str;
					str="amath`"+str;
					str_to_server="at(diff("+diff+","+diff_x+","+diff_n+"),["+diff_x+"="+c+"]);";
					
                    document.getElementById('commandContainer_out').innerHTML=str;
                    AMprocessNode(document.getElementById('out'));
                
            }

function amath_differential_x()//微分,添加事件:onclick='ACSymbolic(str_to_server)'
{
	var active=document.getElementById('active_area');
	active_cls();
	document.getElementById('commandContainer_out').innerHTML="";
str="<fieldset><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>微分常数 ：</font><input id='field_diff_c' style=height:27 type=text name=textfield value=x0 height=20 onkeyup=display_differential_x(this.id) /> </label><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>微分函数 ：</font><input id='field_diff' style=height:27 type=text name=textfield value=f(x) height=20 onkeyup=display_differential_x(this.id) /> </label><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>指定变量 ：</label></font><input id='field_diff_xa' style=height:27 type=text name=textfield value=x height=20 onkeyup=display_differential_x(this.id) /><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>指定阶数 ：</label></font><input id='field_diff_na' style=height:27 type=text name=textfield value=1 height=20 onkeyup=display_differential_x(this.id) /><br><br><button id='sub_differential_x' onclick='ACSymbolic(str_to_server)'style=width:80><font size=2>确定</font></button>&nbsp;&nbsp;&nbsp;&nbsp;<button id='reset_differential_x' style=width:80 onclick=button_reset('field_diff_c','field_diff','field_diff')><font size=2>重置</font></button><br><br></fieldset>";

	var area=document.createElement('div');
	area.innerHTML=str;
	active.appendChild(area);
	
}

function display_limit(id){
                
                    var c = document.getElementById('field_lim_c').value;
					var lim = document.getElementById('field_lim').value;
					var lim_x = document.getElementById('field_lim_x').value;
					
                    str = 'lim_('+lim_x+'to'+c+')('+lim+')';
					str1=str;
					str2=str;
					document.getElementById('entryBox_out').value=str;
					str="amath`"+str;
					str_to_server="limit("+lim+","+lim_x+","+c+");";
					
                    document.getElementById('commandContainer_out').innerHTML=str;
                    AMprocessNode(document.getElementById('out'));
                
            }

function amath_limit()//求极限,添加事件:onclick='ACSymbolic(str_to_server)'
{
	var active=document.getElementById('active_area');
active_cls();
	document.getElementById('commandContainer_out').innerHTML="";
str="<br><fieldset><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>求极限函数 ：</font><input id='field_lim' style=height:30 type=text name=textfield value=f(x) height=20 onkeyup=display_limit(this.id) /> </label><label style=margin-left:62><font size=2>极限常数 ：</font><input id='field_lim_c' style=height:30 type=text name=textfield value=a height=20 onkeyup=display_limit(this.id) /> </label><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style=margin-left:36><font size=2>指定变量 ：</label></font><input id='field_lim_x' style=height:30 type=text name=textfield value=x height=20 onkeyup=display_limit(this.id) /><br><br><button id='sub_limit' onclick='ACSymbolic(str_to_server)' style=width:80><font size=2>确定</font></button>&nbsp;&nbsp;&nbsp;&nbsp;<button id='reset_limit' style=width:80 onclick=button_reset('field_lim','field_lim_c','field_lim_c')><font size=2>重置</font></button><br><br></fieldset>";

	var area=document.createElement('div');
	area.innerHTML=str;
	active.appendChild(area);
	
}

function display_limit_m(id){
                
                    var c = document.getElementById('field_lim_cm').value;
					var lim = document.getElementById('field_limit_m').value;
					var lim_x = document.getElementById('field_lim_xm').value;
					
                    str = 'lim_('+lim_x+'to'+c+'^-)('+lim+')';
					str1=str;
					str2=str;
					document.getElementById('entryBox_out').value=str;
					str="amath`"+str;
					str_to_server="limit("+lim+","+lim_x+","+c+",minus);";
					
                    document.getElementById('commandContainer_out').innerHTML=str;
                    AMprocessNode(document.getElementById('out'));
                
            }

function amath_limit_m()//求极限,添加事件:onclick='ACSymbolic(str_to_server)'
{
	var active=document.getElementById('active_area');
	active_cls();
	document.getElementById('commandContainer_out').innerHTML="";
str="<br><fieldset><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>求极限函数 ：</font><input id='field_limit_m' style=height:30 type=text name=textfield value=f(x) height=20 onkeyup=display_limit_m(this.id) /> </label><br><label style=margin-left:62><font size=2>极限常数 ：</font><input id='field_lim_cm' style=height:30 type=text name=textfield value=a height=20 onkeyup=display_limit_m(this.id) /> </label><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style=margin-left:36><font size=2>指定变量 ：</label></font><input id='field_lim_xm' style=height:30 type=text name=textfield value=x height=20 onkeyup=display_limit_m(this.id) /><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id='sub_limit_m' onclick='ACSymbolic(str_to_server)' style=width:80><font size=2>确定</font></button>&nbsp;&nbsp;&nbsp;&nbsp;<button id='reset_limit_m' style=width:80 onclick=button_reset('field_limit_m','field_lim_cm','field_lim_xm')><font size=2>重置</font></button><br><br></fieldset>";

	var area=document.createElement('div');
	area.innerHTML=str;
	active.appendChild(area);
	
}
function display_limit_p(id){
                
                    var c = document.getElementById('field_lim_cp').value;
					var lim = document.getElementById('field_limit_p').value;
					var lim_x = document.getElementById('field_lim_xp').value;
					
                    str = 'lim_('+lim_x+'to'+c+'^+)('+lim+')';
					str1=str;
					str2=str;
					document.getElementById('entryBox_out').value=str;
					str="amath`"+str;
					str_to_server="limit("+lim+","+lim_x+","+c+",plus);";
					
                    document.getElementById('commandContainer_out').innerHTML=str;
                    AMprocessNode(document.getElementById('out'));
                
            }

function amath_limit_p()//求极限,添加事件:onclick='ACSymbolic(str_to_server)'
{
	var active=document.getElementById('active_area');
	active_cls();
	document.getElementById('commandContainer_out').innerHTML="";
str="<br><fieldset><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>求极限函数 ：</font><input id='field_limit_p' style=height:30 type=text name=textfield value=f(x) height=20 onkeyup=display_limit_p(this.id) /> </label><br><label style=margin-left:62><font size=2>极限常数 ：</font><input id='field_lim_cp' style=height:30 type=text name=textfield value=a height=20 onkeyup=display_limit_p(this.id) /> </label><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style=margin-left:36><font size=2>指定变量 ：</label></font><input id='field_lim_xp' style=height:30 type=text name=textfield value=x height=20 onkeyup=display_limit_p(this.id) /><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id='sub_limit_p' onclick='ACSymbolic(str_to_server)' style=width:80><font size=2>确定</font></button>&nbsp;&nbsp;&nbsp;&nbsp;<button id='reset_limit_p' style=width:80 onclick=button_reset('field_limit_p','field_lim_cp','field_lim_xp')><font size=2>重置</font></button><br><br></fieldset>";

	var area=document.createElement('div');
	area.innerHTML=str;
	active.appendChild(area);
	
}
function display_solve(id)
{
        var str = document.getElementById('field_solve').value;
		var strx = document.getElementById('field_solve_x').value;
        str_to_server="solve("+str+","+strx+");";
        str = "solve("+str+"=0)";
        str1=str;
					str2=str;
	document.getElementById('entryBox_out').value=str;
	str="amath`"+str;
	document.getElementById('commandContainer_out').innerHTML=str;
        AMprocessNode(document.getElementById('out'));
}
function amath_solve()//解方程,添加事件:onclick='ACSymbolic(str_to_server)'
{

	var active=document.getElementById('active_area');
active_cls();
	document.getElementById('commandContainer_out').innerHTML="";
str="<br><fieldset><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>要求解的式子 ：</font><input id='field_solve' style=height:30 type=text name=textfield value=f(x) height=20 onkeyup=display_solve(this.id) /> </label><br><label style=margin-left:75><font size=2>指定变量 ：</font><input id='field_solve_x' style=height:30 type=text name=textfield value=x height=20 onkeyup=display_solve(this.id) /> </label><br><br><button id='sub_solve' onclick='ACSymbolic(str_to_server)' style=width:80><font size=2>确定</font></button>&nbsp;&nbsp;&nbsp;&nbsp;<button id='reset_solve' style=width:80 onclick=button_reset('field_solve','field_solve','field_solve')><font size=2>重置</font></button><br><br></fieldset>";

	var area=document.createElement('div');
	area.innerHTML=str;
        active.appendChild(area);
	
}

function display_taylor(id)
{
        var str = document.getElementById('field_taylor').value;
		var stx = document.getElementById('field_taylor_x').value;
		var stx0 = document.getElementById('field_taylor_x0').value;
		var stn = document.getElementById('field_taylor_n').value;
        str_to_server="taylor("+str+","+stx+","+stx0+","+stn+");";
        str = "taylor("+str+")";
        str1=str;
					str2=str;
	document.getElementById('entryBox_out').value=str;
	str="amath`"+str;
	document.getElementById('commandContainer_out').innerHTML=str;
        AMprocessNode(document.getElementById('out'));
}
function amath_taylor()//Taylor展开,添加事件:onclick='ACSymbolic(str_to_server)'
{
	var active=document.getElementById('active_area');
active_cls();
	document.getElementById('commandContainer_out').innerHTML="";
str="<fieldset><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>要展开的式子 ：</font><input id='field_taylor' style=height:27 type=text name=textfield value=f(x) height=20 onkeyup=display_taylor(this.id) /> </label><br><label style=margin-left:75><font size=2>指定变量 ：</font><input id='field_taylor_x' style=height:27 type=text name=textfield value=x height=20 onkeyup=display_taylor(this.id) /> </label><br><label style=margin-left:78><font size=2>指定点x0 ：</font><input id='field_taylor_x0' style=height:27 type=text name=textfield value=0 height=20 onkeyup=display_taylor(this.id) /> </label><br><label style=margin-left:75><font size=2>指定阶数 ：</font><input id='field_taylor_n' style=height:27 type=text name=textfield value=0 height=20 onkeyup=display_taylor(this.id) /> </label><br><br><button id='sub_taylor' onclick='ACSymbolic(str_to_server)' style=width:80><font size=2>确定</font></button>&nbsp;&nbsp;&nbsp;&nbsp;<button id='reset_taylor' style=width:80 onclick=button_reset('field_taylor','field_taylor','field_taylor')><font size=2>重置</font></button><br><br></fieldset>";

	var area=document.createElement('div');
	area.innerHTML=str;
        active.appendChild(area);
	
}

function display_laplace(id)
{
        var str = document.getElementById(id).value;
        str_to_server="laplace("+str+",t,s);";//laplace(cos(x),t,s);
        str = "laplace("+str+")";
        str1=str;
					str2=str;
	document.getElementById('entryBox_out').value=str;
	str="amath`"+str;
	document.getElementById('commandContainer_out').innerHTML=str;
        AMprocessNode(document.getElementById('out'));
}
function amath_laplace()//Laplace变换,添加事件:onclick='ACSymbolic(str_to_server)'
{
	var active=document.getElementById('active_area');
	active_cls();
	document.getElementById('commandContainer_out').innerHTML="";
str="<br><fieldset><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>要变换的式子 ：</font><input id='field_laplace' style=height:30 type=text name=textfield value=f(x) height=20 onkeyup=display_laplace(this.id) /> </label><br><br><button id='sub_laplace' onclick='ACSymbolic(str_to_server)' style=width:80><font size=2>确定</font></button>&nbsp;&nbsp;&nbsp;&nbsp;<button id='reset_laplace' style=width:80 onclick=button_reset('field_laplace','field_laplace','field_laplace')><font size=2>重置</font></button><br><br></fieldset>";

	var area=document.createElement('div');
	area.innerHTML=str;
        active.appendChild(area);
	
}

function display_expand(id)
{
        var str = document.getElementById(id).value;
        str_to_server="expand("+str+");";
        str = "expand("+str+")";
        str1=str;
					str2=str;
	document.getElementById('entryBox_out').value=str;
	str="amath`"+str;
	document.getElementById('commandContainer_out').innerHTML=str;
        AMprocessNode(document.getElementById('out'));
}
function amath_expand()//多项式展开,添加事件:onclick='ACSymbolic(str_to_server)'
{
	var active=document.getElementById('active_area');
	active_cls();
	document.getElementById('commandContainer_out').innerHTML="";
str="<br><fieldset><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>要展开的式子 ：</font><input id='field_expand' style=height:30 type=text name=textfield value=f(x) height=20 onkeyup=display_expand(this.id) /> </label><br><br><button id='sub_expand' onclick='ACSymbolic(str_to_server)' style=width:80><font size=2>确定</font></button>&nbsp;&nbsp;&nbsp;&nbsp;<button id='reset_expand' style=width:80 onclick=button_reset('field_expand','field_expand','field_expand')><font size=2>重置</font></button><br><br></fieldset>";

	var area=document.createElement('div');
	area.innerHTML=str;
        active.appendChild(area);
	
}

function display_combine(id)
{
        var str = document.getElementById(id).value;
        str_to_server="combine("+str+");";
        str = "combine("+str+")";
        str1=str;
					str2=str;
	document.getElementById('entryBox_out').value=str;
	str="amath`"+str;
	document.getElementById('commandContainer_out').innerHTML=str;
        AMprocessNode(document.getElementById('out'));
}
function amath_combine()//合并同类项,添加事件:onclick='ACSymbolic(str_to_server)'
{
	var active=document.getElementById('active_area');
	active_cls();
	document.getElementById('commandContainer_out').innerHTML="";
str="<br><fieldset><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>要化简的式子 ：</font><input id='field_combine' style=height:30 type=text name=textfield value=f(x) height=20 onkeyup=display_combine(this.id) /> </label><br><br><button id='sub_combine' onclick='ACSymbolic(str_to_server)' style=width:80><font size=2>确定</font></button>&nbsp;&nbsp;&nbsp;&nbsp;<button id='reset_combine' style=width:80 onclick=button_reset('field_combine','field_combine','field_combine')><font size=2>重置</font></button><br><br></fieldset>";

	var area=document.createElement('div');
	area.innerHTML=str;
        active.appendChild(area);
	
}

function display_factor(id)
{
        var str = document.getElementById(id).value;
        str_to_server="factor("+str+");";
        str = "factor("+str+")";
        str1=str;
					str2=str;
	document.getElementById('entryBox_out').value=str;
	str="amath`"+str;
	document.getElementById('commandContainer_out').innerHTML=str;
        AMprocessNode(document.getElementById('out'));
}
function amath_factor()//因式分解,添加事件:onclick='ACSymbolic(str_to_server)'
{
	var active=document.getElementById('active_area');
	active_cls();
	document.getElementById('commandContainer_out').innerHTML="";
str="<br><fieldset><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>要分解的式子 ：</font><input id='field_factor' style=height:30 type=text name=textfield value=f(x) height=20 onkeyup=display_factor(this.id) /> </label><br><br><button id='sub_factor' onclick='ACSymbolic(str_to_server)' style=width:80><font size=2>确定</font></button>&nbsp;&nbsp;&nbsp;&nbsp;<button id='reset_factor' style=width:80 onclick=button_reset('field_factor','field_factor','field_factor')><font size=2>重置</font></button><br><br></fieldset>";

	var area=document.createElement('div');
	area.innerHTML=str;
        active.appendChild(area);
	
}
function display_factorial(id)
{
        var str = document.getElementById(id).value;
        str_to_server="("+str+")!;";
        str = "("+str+"!)";
        str1=str;
					str2=str;
	document.getElementById('entryBox_out').value=str;
	str="amath`"+str;
	document.getElementById('commandContainer_out').innerHTML=str;
        AMprocessNode(document.getElementById('out'));
        
}
function amath_factorial()//阶乘,添加事件:onclick='ACSymbolic(str_to_server)'
{
	var active=document.getElementById('active_area');
	active_cls();
	document.getElementById('commandContainer_out').innerHTML="";
str="<br><fieldset><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>阶乘式子 ：</font><input id='field_factorial' style=height:30 type=text name=textfield value=f(x) height=20 onkeyup=display_factorial(this.id) /> </label><br><br><button id='sub_factorial' onclick='ACSymbolic(str_to_server)' style=width:80><font size=2>确定</font></button>&nbsp;&nbsp;&nbsp;&nbsp;<button id='reset_factorial' style=width:80 onclick=button_reset('field_factorial','field_factorial','field_factorial')><font size=2>重置</font></button><br><br></fieldset>";

	var area=document.createElement('div');
	area.innerHTML=str;
	active.appendChild(area);
	
}

function display_sum(id){
                
                    var up = document.getElementById('field_sum_up').value;
					var down = document.getElementById('field_sum_down').value;
					var sum= document.getElementById('field_sum').value;
                    str = "sum_(i="+ down+")^"+up+"("+sum+")";
					str1=str;
					str2=str;
					document.getElementById('entryBox_out').value=str;
					str="amath`"+str;
					str_to_server="sum("+sum+",i,"+down+","+up+");";
                    document.getElementById('commandContainer_out').innerHTML=str;
                    AMprocessNode(document.getElementById('out'));
                
            }

function amath_sum()//累加求和,添加事件:onclick='ACSymbolic(str_to_server)'
{
	var active=document.getElementById('active_area');
	active_cls();
	document.getElementById('commandContainer_out').innerHTML="";
str="<br><fieldset><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>求和上限 ：</font><input id='field_sum_up' style=height:30 type=text name=textfield value=b height=20 onkeyup=display_sum(this.id) /> </label><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>求和下限 ：</font><input id='field_sum_down' style=height:30 type=text name=textfield value=a height=20 onkeyup=display_sum(this.id) /> </label><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>求和式子 ：</font><input id='field_sum' style=height:30 type=text name=textfield value=f(i) height=20 onkeyup=display_sum(this.id) /> </label><br><br><button id='sub_sum' onclick='ACSymbolic(str_to_server)' style=width:80><font size=2>确定</font></button>&nbsp;&nbsp;&nbsp;&nbsp;<button id='reset_sum' style=width:80 onclick=button_reset('field_sum_up','field_sum_down','field_sum')><font size=2>重置</font></button><br><br></fieldset>";

	var area=document.createElement('div');
	area.innerHTML=str;
	active.appendChild(area);
	
}

function display_prod(id){
                
                    var up = document.getElementById('field_prod_up').value;
					var down = document.getElementById('field_prod_down').value;
					var prod= document.getElementById('field_prod').value;
                    str = "prod_(i="+ down+")^"+up+"("+prod+")";
					str1=str;
					str2=str;
					document.getElementById('entryBox_out').value=str;
					str="amath`"+str;
					str_to_server="product("+prod+",i,"+down+","+up+");";
                    document.getElementById('commandContainer_out').innerHTML=str;
                    AMprocessNode(document.getElementById('out'));
                
            }

function amath_prod()//累加求积,添加事件:onclick='ACSymbolic(str_to_server)'
{
	var active=document.getElementById('active_area');
	active_cls();
	document.getElementById('commandContainer_out').innerHTML="";
str="<br><fieldset><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>求积上限 ：</font><input id='field_prod_up' style=height:30 type=text name=textfield value=b height=20 onkeyup=display_prod(this.id) /> </label><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>求积下限 ：</font><input id='field_prod_down' style=height:30 type=text name=textfield value=a height=20 onkeyup=display_prod(this.id) /> </label><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:40><font size=2>求积式子 ：</font><input id='field_prod' style=height:30 type=text name=textfield value=f(i) height=20 onkeyup=display_prod(this.id) /> </label><br><br><button id='sub_prod' onclick='ACSymbolic(str_to_server)' style=width:80><font size=2>确定</font></button>&nbsp;&nbsp;&nbsp;&nbsp;<button id='reset_prod' style=width:80 onclick=button_reset('field_prod_up','field_prod_down','field_prod')><font size=2>重置</font></button><br><br></fieldset>";

	var area=document.createElement('div');
	area.innerHTML=str;
	active.appendChild(area);
	
}
function active_cls()
{
	var active=document.getElementById('active_area');
	var n=active.childNodes.length;
	for(var i=0;i<n;i++)
	{
		active.removeChild(active.firstChild);
	}
}

/**********************下面是将str_to_server发向服务器返回result并显示*******************************/

function ACSymbolic(expression)
//功能：计算
//参数：
//      expression：要计算的表达式，即发向服务器的str_to_server
{
	createXmlhttp();
	var url=Service_url+"/ACSymbolic";//服务器地址+方法
	var queryString=createQueryString(expression);
        //queryString=Server.Urlencode(queryString);
	xmlhttp.open("POST",url,true);
	xmlhttp.onreadystatechange=handleStateChange;
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
        //Ext.MessageBox.alert("计算结果","计算结果："+queryString);
	xmlhttp.send(queryString);
}

function handleStateChange()
{

	if(xmlhttp.readyState==4)
	{
		if(xmlhttp.status==200)
		{
			displayResult();
			start_textnode1();
		}
		else
        {
              Ext.MessageBox.alert("<font color=red>警告！！！</font>","<font color=red>远程服务器没响应,请尝试：<p/>1.刷新页面重新登陆!<br/>2.请检查Webservice是否可用! <br/><a href=Service.asmx>http://localhost/Service.asmx</a> </font>"); 
		 }

	}
}


function displayResult()
{
        result=xmlhttp.responseXML.getElementsByTagName("string")[0].firstChild.data;
        //Ext.MessageBox.alert("计算结果","计算结果："+result);
	var command_out=document.getElementById('commandContainer_out');
           var text_out=document.getElementById('entryBox_out');
           var prompt_out=document.getElementById('commandPrompt_out');
		var str_return=calculate('entryBox_out','commandContainer_out');
		clcalute_flag=1;
		 prompt_out.innerHTML+="amath`"+str2+'<br><br>'+'&nbsp;&nbsp;ans=<br><br>';
                 prompt_out.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"amath`"+result+"<br><br>"+'AC:\\\>&nbsp;';
		 command_out.innerHTML='';
		 
		 //代码显示处理
		var gram_now=document.getElementById('grammar_now');
		var gram_last=document.getElementById('grammar_last');
		gram_last.innerHTML+=text_out.value+'<br><br>'+'&nbsp;&nbsp;ans=<br><br>';
		gram_last.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+result+'<br><br>'+'AC:\\\>&nbsp;';
		gram_now.innerHTML="";
		
		 text_out.value="";
		//document.getElementById('entryBox').value="";
	    m=0;
	    n=0;
    	AMprocessNode(document.getElementById('out'));	      
}

/*************************************************************************/
/**********************下面是reset按钮事件处理*******************************/
function button_reset(id1,id2,id3)
{
	document.getElementById(id1).value="a";
	document.getElementById(id2).value="b";
	document.getElementById(id3).value="f(x)";
}