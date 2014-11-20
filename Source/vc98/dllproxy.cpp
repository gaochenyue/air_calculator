/**********************************************************
*dll代理，通过该dll文件访问其他dll文件
*dllpath:dll文件路径 funcname:函数名称,arguments:参数
*
*
*
**********************************************************/
#include <iostream>
#include <windows.h>

typedef char*(*proxy)(char * str);

extern "C"
{
__declspec(dllexport) char * dllProxy(char * dllpath,char *funcname,char  * arguments)
//dllpath:dll文件路径 funcname:函数名称,arguments:参数
{
	char  *result;
	proxy _proxy;
	

	HINSTANCE hInstLibrary = LoadLibrary(dllpath);
// std::cout << dllpath<< std::endl;
	if (hInstLibrary == NULL)
	{
		FreeLibrary(hInstLibrary);
		return "error1";
		//没有找到dll文件
	}
   //   std::cout << funcname<< std::endl;
	_proxy = (proxy)GetProcAddress(hInstLibrary, funcname);
	if (_proxy == NULL)
	{
		FreeLibrary(hInstLibrary);
		return "error2";
		//没有找到指定函数
	}

	
//	std::cout << "test!!"<< std::endl;
//std::cout << arguments<< std::endl;
	result=_proxy(arguments);
//	std::cout << "test!!"<< std::endl;
	FreeLibrary(hInstLibrary);
	return result;

	
}
}