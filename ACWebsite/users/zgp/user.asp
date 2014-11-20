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
  <funclibrary dllpath="users\zgp\library\" sourcepath="users\zgp\source\">
    <toolbox name="privatetoolbox">
    </toolbox>
  </funclibrary>
  <!--display in grid-->
  <imagelibrary ipath="users\zgp\image\">
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
      <type>int</type>
      <value>[1,2,3;4,5,6;7,8,9]</value>
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
      <name>lu([1.35345,2.3453,3;2,3,4;5,6,7],[3])</name>
      <date>2009.2</date>
      <time>22:33</time>
    </operation>
  </history>
</user>