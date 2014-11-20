<?xml version="1.0"?>
<!--
<%Response.ContentType="application/xml"%>
-->
<user username="shared">
  <!--display in tree-->
  <funclibrary dllpath="shared\funclibrary\" sourcepat="shared\source\">
    <toolbox name="matrix" title="矩阵运算">
      <function name="mult" input="inputarguments" output="outputarguments" tip_1="mult([...],[***],[m],[n],[k])" tip_2="[...]中为m*n矩阵，[***]中为n*k矩阵" tip_3="m*k矩阵" tip_4="mult([1,2;3,4],[2,3;4,5],[2],[2],[2])">
			两矩阵相乘	
			</function>
      <function name="det" input="inputarguments" output="outputarguments" tip_1="det([...],[n])" tip_2="[...]中为目标矩阵数据，行元间用逗号或空格隔开，行之间用分号隔开，必须为方阵；[n]表示矩阵大小为n*n" tip_3="矩阵的行列式" tip_4="det([12,13,4;6,7,8;9,3,11],[3])">
			矩阵求行列式	
			</function>
      <function name="rank" input="inputarguments" output="outputarguments" tip_1="rank([...],[m],[n])" tip_2="[...]中为目标矩阵数据，行元素间用逗号或空格隔开，行之间用分号隔开；[m],[n]表示矩阵大小为m*n" tip_3="矩阵的秩" tip_4="rank([12,13,4;6,7,8;9,3,11],[3],[3])">
			矩阵求秩	
			</function>
      <function name="inv" input="inputarguments" output="outputarguments" tip_1="inv([...],[n])" tip_2="[...]中为目标矩阵数据，行元素间用逗号或空格隔开，行之间用分号隔开，必须为方阵；[n]表示矩阵大小为n*n" tip_3="逆矩阵" tip_4="inv([12,13,4;6,7,8;9,3,11],[3])">
			矩阵求逆
			</function>
      <function name="eig" input="inputarguments" output="outputarguments" tip_1="eig([...],[n])" tip_2="[...]中为目标矩阵数据，行元素间用逗号或空格隔开，行之间用分号隔开，必须为方阵；[n]表示矩阵大小为n*n" tip_3="矩阵的特征值" tip_4="eig([12,13,4;6,7,8;9,3,11],[3])">
			矩阵求特征值
			</function>
      <function name="lu" input="inputarguments" output="outputarguments" tip_1="lu([...],[n])" tip_2="[...]中为目标矩阵数据，行元素间用逗号或空格隔开，行之间用分号隔开，必须为方阵；[n]表示矩阵大小为n*n" tip_3="L U" tip_4="lu([12,13,4;6,7,8;9,3,11],[3])">
			矩阵三角分解（LU分解）
			</function>
      <function name="qr" input="inputarguments" output="outputarguments" tip_1="qr([...],[m],[n])" tip_2="[...]中为目标矩阵数据，行元素间用逗号或空格隔开，行之间用分号隔开；[n]表示矩阵大小为n*n" tip_3="q r" tip_4="示例:qr([12,13,4;6,7,8;9,3,11],[3])">
			矩阵QR分解
			</function>
    </toolbox>
    <toolbox name="线性方程组求解" title="线性方程组求解">
      <function name="linsolve" input="inputarguments" output="outputarguments" tip_1="linsolve([...],[***],[n])" tip_2="[...]中为系数矩阵数据，[***]中为常数向量数据；行元素间用逗号或空格隔开，行之间用分号隔开；[n]表示矩阵大小为n*n" tip_3="方程的根" tip_4="linsolve([12,13,4;6,7,8;9,3,11],[1,2,3],[3])">
			线性方程组求解
			</function>
      <function name="sparsesolve" input="inputarguments" output="outputarguments" tip_1="sparsesolve([...],[***],[n])" tip_2="[...]中为系数矩阵数据，[***]中为常数向量数据；行元素间用逗号或空格隔开，行之间用分号隔开；[n]表示矩阵大小为n*n" tip_3="方程的根" tip_4="sparsesolve([A],[b],[n])">
			求解大型稀疏线性方程
			</function>
    </toolbox>
    <toolbox name="插值" title="插值">
      <function name="interp" input="inputarguments" output="outputarguments" tip_1="interp([...],[***],[m],[x0])" tip_2="[...]中为x数据m个，[***]中为x数据m个" tip_3="x0处函数值" tip_4="interp([1 2 3 4 5],[2 4 6 8 10],[5],[2.5])">
			一维插值
			</function>
      <function name="interp2" input="inputarguments" output="outputarguments" tip_1="interp2([...],[***],[----],[m],[n],[x0],[y0])" tip_2="[...]中为x数据m个，[***]中为y数据n个，[---]中为z数据m*n个；(x0,y0)要求值处点" tip_3="(x0,y0)处函数值" tip_4="interp2([1 2 ],[2 4 ],[2 4 4 8],[2],[2],[1],[1.5])">
			二维插值
			</function>
    </toolbox>
    <toolbox name="拟合" title="拟合">
      <function name="polyfit" input="inputarguments" output="outputarguments" tip_1="polyfit([...],[***],[m],[n])" tip_2="[...]中为x数据m个，[***]中为y数据m个；n-1为要拟合的x次数" tip_3="多项式系数" tip_4="polyfit([1 2 3 4 5],[2 4 6 8 10],[5],[2])">
			多项式拟合
			</function>
      <function name="curefit" input="inputarguments" output="outputarguments" tip_1="curefit([...],[***],[----],[m],[n],[p],[q])" tip_2="[...]中为x数据m个，[***]中为y数据n个，[---]中为z数据m*n个；p-1为要拟合的x次数;q-1为要拟合的y次数" tip_3="系数" tip_4="curefit([1 2],[ 3 4],[2 4 6 8 10],[2],[2],[2],[2])">
			曲面拟合
			</function>
    </toolbox>
    <toolbox name="数值微积分" title="数值微积分">
      <function name="数值积分" input="inputarguments" output="outputarguments">
			describtion of the funcname3
			</function>
      <function name="数值微分" input="inputarguments" output="outputarguments">
			describtion of the funcname3
			</function>
      <function name="常微分方程数值解" input="inputarguments" output="outputarguments">
			describtion of the funcname3
			</function>
    </toolbox>
    <toolbox name="数理统计" title="数理统计">
      <function name="regress" input="inputarguments" output="outputarguments" tip_1="regress([x],[y],[n])" tip_2="[...]中为X数据，[***]中为Y数据；行元素间用逗号或空格隔开" tip_3="系数,均差" tip_4="regress([x],[y],[n])">
			一元线性回归分析
			</function>
    </toolbox>
    <toolbox name="特殊函数" title="特殊函数">
      <function name="gama" input="inputarguments" output="outputarguments" tip_1="gama([x])" tip_2="[x]表示自变量的值" tip_3="gama" tip_4="gama([0.5])">
			gama函数的值
			</function>
    </toolbox>
    <toolbox name="sharedtoolbox" title="共享函数工具箱">
      <function input="int a,int b" output="s 1*1" name="add" tip_1="add([a],[b])" tip_2="两整数a、b" tip_3="整数之和" tip_4="add([1],[2])">两整数求和</function>
    </toolbox>
  </funclibrary>
</user>