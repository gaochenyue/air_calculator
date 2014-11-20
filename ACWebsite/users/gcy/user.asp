<?xml version="1.0"?>
<!--
<%Response.ContentType="application/xml"%>
-->
<user username="username">
  <userinformation>
    <totalfunc>
    </totalfunc>
    <totalimage>
    </totalimage>
    <totalvariable>
    </totalvariable>
    <totaloperation>
    </totaloperation>
  </userinformation>
  <!--display in tree-->
  <funclibrary dllpath="users\gcy\library\" sourcepath="users\gcy\source\">
    <toolbox name="privatetoolbox" title="私有函数工具箱">
      <function input="int a" output="z 1*1" name="jiecheng" tip_1="jiecheng([a])" tip_2="整数a" tip_3="a!" tip_4="jiecheng([5])">阶乘运算</function>
    </toolbox>
  </funclibrary>
  <!--display in grid-->
  <imagelibrary ipath="users\gcy\image\">
    <image name="test">
      <name>test</name>
      <expression>cos(x^2+y^2)</expression>
      <type>users/gcy/image/test.jpeg</type>
    </image>
    <image name="test2">
      <name>test2</name>
      <expression>(x^2)/4-(y^2)/9</expression>
      <type>users/gcy/image/test2.jpeg</type>
    </image>
    <image name="test3">
      <name>test3</name>
      <expression>sin(x^2+y^2)</expression>
      <type>users/gcy/image/test3.jpeg</type>
    </image>
    <image name="test4">
      <name>test4</name>
      <expression>x^2+y^2</expression>
      <type>users/gcy/image/test4.jpeg</type>
    </image>
    <image name="test5">
      <name>test5</name>
      <expression>x^3+y^3</expression>
      <type>users/gcy/image/test5.jpeg</type>
    </image>
    <image name="test6">
      <name>test6</name>
      <expression>sin(x+y)</expression>
      <type>users/gcy/image/test6.jpeg</type>
    </image>
    <image name="test7">
      <name>test7</name>
      <expression>sin(x)</expression>
      <type>users/gcy/image/test7.jpeg</type>
    </image>
    <image name="test8">
      <name>test8</name>
      <expression>cos(x)</expression>
      <type>users/gcy/image/test8.jpeg</type>
    </image>
    <image name="test9">
      <name>test9</name>
      <expression>x^3+x^2+x+1</expression>
      <type>users/gcy/image/test9.jpeg</type>
    </image>
    <image name="test10">
      <name>test10</name>
      <expression>1/x</expression>
      <type>users/gcy/image/test10.jpeg</type>
    </image>
    <image name="test11">
      <name>test11</name>
      <expression>sin(sqrt(x)+sqrt(y))</expression>
      <type>users/gcy/image/test11.jpeg</type>
    </image>
  </imagelibrary>
  <!--display in grid-->
  <variable>
    <var>
      <name>C</name>
      <type>int</type>
      <value>[3,5,2;7,4,9]</value>
    </var>
    <var>
      <name>B</name>
      <type>int</type>
      <value>[3]</value>
    </var>
    <var>
      <name>A</name>
      <type>double</type>
      <value>[1.1,2.2,3.3;4.4,5.5,6.6;7.7,8.8,9.9]</value>
    </var>
  </variable>
  <!--display in grid-->
  <history>
    <operation>
      <name>lu([1,2,3;2,3,4;5,6,7],[3])</name>
      <date>2009.2</date>
      <time>22:33</time>
    </operation>
    <operation>
      <name>mult([1.2;3.4],[2,3;4,5],[2],[2],[2])</name>
      <date>2009.0</date>
      <time>19:25</time>
    </operation>
    <operation>
      <name>lu([1.35345,2.3453,3;2,3,4;5,6,7],[3])</name>
      <date>2009.2</date>
      <time>22:33</time>
    </operation>
  </history>
</user>