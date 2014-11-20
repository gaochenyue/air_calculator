// JavaScript Document
//按钮上的代码，被字符串变量设置在要显示的位置即可
//mathstyle标签用来控制符号显示
//mathcolor:颜色
//fontsize:大小
//background:背景色
//
//
//普通计算
Ext.namespace('math');
var zero="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>0</m:mn></m:mstyle></m:math>";
var one="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>1</m:mn></m:mstyle></m:math>";
var two="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>2</m:mn></m:mstyle></m:math>";
var three="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>3</m:mn></m:mstyle></m:math>";
var four="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>4</m:mn></m:mstyle></m:math>";
var five="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>5</m:mn></m:mstyle></m:math>";
var six="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>6</m:mn></m:mstyle></m:math>";
var seven="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>7</m:mn></m:mstyle></m:math>";
var eight="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>8</m:mn></m:mstyle></m:math>";
var nine="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>9</m:mn></m:mstyle></m:math>";
var dot="<m:math><m:mstyle mathcolor=blue mathcolor=#0000ff fontfamily=serif displaystyle=true><m:mn>.</m:mn></m:mstyle></m:math>";
var equal="<m:math><m:mstyle mathcolor=blue mathcolor=#0000ff fontfamily=serif displaystyle=true><m:mn>=</m:mn></m:mstyle></m:math>";
var sinx="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>sin</m:mn></m:mstyle></m:math>";
var cosx="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>cos</m:mn></m:mstyle></m:math>";
var tanx="<m:math title=tan(><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true> <m:mrow><m:mo>tan</m:mo><m:mrow><m:mo></m:mo></m:mrow></m:mrow></m:mstyle></m:math>";
var cotx="<m:math title=cot><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:mrow><m:mo>cot</m:mo><m:mo></m:mo></m:mrow></m:mstyle></m:math>";
var sinx1="<m:math title=sin^-1(><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:msup><m:mo>sin</m:mo><m:mrow><m:mo>-</m:mo><m:mn>1</m:mn></m:mrow></m:msup><m:mrow><m:mo></m:mo></m:mrow></m:mstyle></m:math>";
var cosx1="<m:math title=cos^-1(><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:msup><m:mo>cos</m:mo><m:mrow> <m:mo>-</m:mo><m:mn>1</m:mn> </m:mrow></m:msup><m:mrow><m:mo></m:mo></m:mrow></m:mstyle></m:math>";	
var tanx1="<m:math title=tan^-1(><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:msup><m:mo>tan</m:mo><m:mrow><m:mo>-</m:mo><m:mn>1</m:mn></m:mrow></m:msup><m:mrow><m:mo></m:mo></m:mrow></m:mstyle></m:math>";
var cotx1="<m:math title=cot^-1><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:msup><m:mo>cot</m:mo><m:mrow><m:mo>-</m:mo><m:mn>1</m:mn></m:mrow></m:msup></m:mstyle></m:math>";
var logx="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:msub><m:mn>log</m:mn><m:mn>10</m:mn></m:msub></m:mstyle></m:math>";
var lnx="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>ln</m:mn></m:mstyle></m:math>";
var expx="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>e</m:mn></m:mstyle></m:math>";
var plus="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>+</m:mn></m:mstyle></m:math>";
var multiply="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>&times;</m:mn></m:mstyle></m:math>";
var divide="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>&divide;</m:mn></m:mstyle></m:math>";
var minus="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>-</m:mn></m:mstyle></m:math>";
var sqrtx="<m:math><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:msqrt><m:mi>x</m:mi></m:msqrt></m:mstyle></m:math>";
var xy="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:msup><m:mi>x</m:mi><m:mi>y</m:mi></m:msup></m:mstyle></m:math>";
var leftbracket="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>(</m:mn></m:mstyle></m:math>";
var rightbracket="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>)</m:mn></m:mstyle></m:math>";
var pai="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>&pi;</m:mn></m:mstyle></m:math>";
var jiecheng="<m:math title=!><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:mo>!</m:mo></m:mstyle></m:math>";
var absx="<m:math title=abs><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:mi>|</m:mi><m:mi> a </m:mi><m:mi>|</m:mi></m:mstyle></m:math>";
var sinhx="<m:math title=sinh><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:mrow><m:mo>sinh</m:mo><m:mo></m:mo></m:mrow></m:mstyle></m:math>";
var coshx="<m:math title=cosh><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:mrow><m:mo>cosh</m:mo> <m:mo></m:mo></m:mrow></m:mstyle></m:math>";
var tanhx="<m:math title=tanh><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:mrow><m:mo>tanh</m:mo><m:mo></m:mo></m:mrow></m:mstyle></m:math>";
var cothx="<m:math title=coth><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:mrow><m:mo>cot</m:mo><m:mi>h</m:mi></m:mrow></m:mstyle></m:math>";
var sinh1="<m:math title=sinh^-1><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:msup><m:mo>sinh</m:mo><m:mrow><m:mo>-</m:mo><m:mn>1</m:mn></m:mrow></m:msup></m:mstyle></m:math>";
var cosh1="<m:math title=cosh^-1><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:msup><m:mo>cosh</m:mo><m:mrow><m:mo>-</m:mo><m:mn>1</m:mn></m:mrow></m:msup></m:mstyle></m:math>";
var tanh1="<m:math title=tanh^-1><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:msup> <m:mo>tanh</m:mo><m:mrow><m:mo>-</m:mo><m:mn>1</m:mn></m:mrow></m:msup></m:mstyle></m:math>";
var coth1="<m:math title=coth^-1><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:msup><m:mrow><m:mo>cot</m:mo><m:mi>h</m:mi></m:mrow><m:mrow><m:mo>-</m:mo><m:mn>1</m:mn></m:mrow></m:msup></m:mstyle></m:math>";

//高等数学
var integrate="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mo>&#x222b;</m:mo><m:mrow><m:mi>f</m:mi><m:mrow><m:mo>(</m:mo><m:mi>x</m:mi><m:mo>)</m:mo></m:mrow></m:mrow><m:mrow><m:mi>d</m:mi><m:mi>x</m:mi></m:mrow></m:mstyle></m:math>";
var integrate_a="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mrow><m:msubsup><m:mo>&#x222b;</m:mo><m:mi>a</m:mi><m:mi>b</m:mi></m:msubsup></m:mrow><m:mrow><m:mi>f</m:mi><m:mrow><m:mo>(</m:mo><m:mi>x</m:mi><m:mo>)</m:mo></m:mrow></m:mrow><m:mrow><m:mi>d</m:mi><m:mi>x</m:mi></m:mrow></m:mstyle></m:math>";
var differential="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mfrac><m:mi>d</m:mi><m:mrow><m:mi>d</m:mi><m:mi>x</m:mi></m:mrow></m:mfrac><m:mrow><m:mi>f</m:mi><m:mrow><m:mo>(</m:mo><m:mi>x</m:mi><m:mo>)</m:mo></m:mrow></m:mrow></m:mstyle></m:math>";
var differential_x="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mfrac><m:mi>d</m:mi><m:mrow><m:mi>d</m:mi><m:mi>x</m:mi></m:mrow></m:mfrac><m:mrow><m:mi>f</m:mi><m:mrow><m:mo>(</m:mo><m:mi>x</m:mi><m:mo>)</m:mo></m:mrow></m:mrow><m:mrow><m:mo>|</m:mo></m:mrow><m:mi>x</m:mi><m:mo>=</m:mo><m:msub><m:mi>x</m:mi><m:mn>0</m:mn></m:msub></m:mstyle></m:math>";
var laplace="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mi>L</m:mi><m:mi>a</m:mi><m:mi>p</m:mi><m:mi>l</m:mi><m:mi>a</m:mi><m:mi>s</m:mi><m:mrow><m:mo>[</m:mo><m:mrow><m:mi>f</m:mi><m:mrow><m:mo>(</m:mo><m:mi>x</m:mi><m:mo>)</m:mo></m:mrow></m:mrow><m:mo>]</m:mo></m:mrow></m:mstyle></m:math>";
var taylor="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mi>T</m:mi><m:mi>a</m:mi><m:mi>y</m:mi><m:mi>l</m:mi><m:mi>o</m:mi><m:mi>r</m:mi><m:mrow><m:mo>[</m:mo><m:mrow><m:mi>f</m:mi><m:mrow><m:mo>(</m:mo><m:mi>x</m:mi><m:mo>)</m:mo></m:mrow></m:mrow><m:mo>]</m:mo></m:mrow></m:mstyle></m:math>";
var expand="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mi>E</m:mi><m:mi>x</m:mi><m:mi>p</m:mi><m:mi>a</m:mi><m:mi>n</m:mi><m:mi>d</m:mi><m:mrow><m:mo>[</m:mo><m:mrow><m:mi>f</m:mi><m:mrow><m:mo>(</m:mo><m:mi>x</m:mi><m:mo>)</m:mo></m:mrow></m:mrow><m:mo>]</m:mo></m:mrow></m:mstyle></m:math>";
var combine="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mi>C</m:mi><m:mi>o</m:mi><m:mi>m</m:mi><m:mi>b</m:mi><m:mi>i</m:mi><m:mi>n</m:mi><m:mrow><m:mo>[</m:mo><m:mrow><m:mi>f</m:mi><m:mrow><m:mo>(</m:mo><m:mi>x</m:mi><m:mo>)</m:mo></m:mrow></m:mrow><m:mo>]</m:mo></m:mrow></m:mstyle></m:math>";
var factor="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mi>F</m:mi><m:mi>a</m:mi><m:mi>c</m:mi><m:mi>t</m:mi><m:mi>o</m:mi><m:mi>r</m:mi><m:mrow><m:mo>[</m:mo><m:mrow><m:mi>f</m:mi><m:mrow><m:mo>(</m:mo><m:mi>x</m:mi><m:mo>)</m:mo></m:mrow></m:mrow><m:mo>]</m:mo></m:mrow></m:mstyle></m:math>";
var solve="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mi>S</m:mi><m:mi>o</m:mi><m:mi>l</m:mi><m:mi>v</m:mi><m:mi>e</m:mi><m:mrow><m:mo>[</m:mo><m:mrow><m:mi>f</m:mi><m:mrow><m:mo>(</m:mo><m:mi>x</m:mi><m:mo>)</m:mo><m:mo>=</m:mo><m:mo>0</m:mo></m:mrow></m:mrow><m:mo>]</m:mo></m:mrow></m:mstyle></m:math>";

var partialdifferential="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mfrac><m:mrow><m:mo>&#x2202;</m:mo><m:mrow><m:mi>f</m:mi><m:mrow><m:mo>(</m:mo><m:msub><m:mi>x</m:mi><m:mn>0</m:mn></m:msub><m:mo>,</m:mo><m:msub><m:mi>x</m:mi><m:mn>1</m:mn></m:msub><m:mo>,</m:mo><m:msub><m:mi>x</m:mi><m:mn>2</m:mn></m:msub><m:mo>...</m:mo><m:mo>)</m:mo></m:mrow></m:mrow></m:mrow><m:mrow><m:mo>&#x2202;</m:mo><m:msub><m:mi>x</m:mi><m:mi>i</m:mi></m:msub></m:mrow></m:mfrac></m:mstyle></m:math>";
var limit="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:munder><m:mo>lim</m:mo><m:mrow><m:mi>x</m:mi><m:mo>&#x2192;</m:mo><m:mi>a</m:mi></m:mrow></m:munder><m:mrow><m:mi>f</m:mi><m:mrow><m:mo>(</m:mo><m:mi>x</m:mi><m:mo>)</m:mo></m:mrow></m:mrow></m:mstyle></m:math>";
var limit_p="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:munder><m:mo>lim</m:mo><m:mrow><m:mi>x</m:mi><m:mo>&#x2192;</m:mo><m:msup><m:mi>a</m:mi><m:mo>+</m:mo></m:msup></m:mrow></m:munder><m:mrow><m:mi>f</m:mi><m:mrow><m:mo>(</m:mo><m:mi>x</m:mi><m:mo>)</m:mo></m:mrow></m:mrow></m:mstyle></m:math>";
var limit_m="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:munder><m:mo>lim</m:mo><m:mrow><m:mi>x</m:mi><m:mo>&#x2192;</m:mo><m:msup><m:mi>a</m:mi><m:mo>-</m:mo></m:msup></m:mrow></m:munder><m:mrow><m:mi>f</m:mi><m:mrow><m:mo>(</m:mo><m:mi>x</m:mi><m:mo>)</m:mo></m:mrow></m:mrow></m:mstyle></m:math>";
var factorialx="<m:math><m:mstyle displaystyle=true mathcolor=#0000ff fontfamily=serif><m:mn>!</m:mn></m:mstyle></m:math>";
var sum="<m:math title=sum_(i=a)^b(x)><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:mrow><m:munderover><m:mo>&sum;</m:mo><m:mrow><m:mi>i</m:mi>      <m:mo>=</m:mo><m:mi>i</m:mi> </m:mrow><m:mi>i</m:mi></m:munderover></m:mrow><m:mrow><m:mo>(</m:mo> <m:mi>i</m:mi> <m:mo>)</m:mo></m:mrow></m:mstyle></m:math>";
var prod="<m:math title=prod_(i=a)^b(x)><m:mstyle mathcolor=blue fontfamily=serif displaystyle=true><m:mrow><m:munderover><m:mo>&prod;</m:mo><m:mrow><m:mi>i</m:mi><m:mo>=</m:mo><m:mi>i</m:mi></m:mrow><m:mi>i</m:mi></m:munderover></m:mrow><m:mrow><m:mo>(</m:mo><m:mi>i</m:mi><m:mo>)</m:mo></m:mrow></m:mstyle></m:math>";
//线形代数