/**********************************************************
*dll����ͨ����dll�ļ���������dll�ļ�
*dllpath:dll�ļ�·�� funcname:��������,arguments:����
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
//dllpath:dll�ļ�·�� funcname:��������,arguments:����
{
	char  *result;
	proxy _proxy;
	

	HINSTANCE hInstLibrary = LoadLibrary(dllpath);
// std::cout << dllpath<< std::endl;
	if (hInstLibrary == NULL)
	{
		FreeLibrary(hInstLibrary);
		return "error1";
		//û���ҵ�dll�ļ�
	}
   //   std::cout << funcname<< std::endl;
	_proxy = (proxy)GetProcAddress(hInstLibrary, funcname);
	if (_proxy == NULL)
	{
		FreeLibrary(hInstLibrary);
		return "error2";
		//û���ҵ�ָ������
	}

	
//	std::cout << "test!!"<< std::endl;
//std::cout << arguments<< std::endl;
	result=_proxy(arguments);
//	std::cout << "test!!"<< std::endl;
	FreeLibrary(hInstLibrary);
	return result;

	
}
}