  #include "stdlib.h" 
  #include "math.h" 
 #include "string.h" 
void  max(int x,int y,int * z)
{ 
 int i; 
 if(x>=y)
 *z=x;
 else 
*z=y;
 
}
 extern "C" {
  __declspec(dllexport) char* _max(char *input)
{
int x;
int y;
int z[1000];
int i,j,k;
 char temp_str[100],re_list[1000];
 j=0;re_list[0]='\0';
	for(k=0;input[j]!=')'&&input[j]!=']';j++)
	{
		if(input[j]=='-'||(input[j]>=48&&input[j]<=57)||input[j]=='.')
		{
			temp_str[k]=input[j];
			k++;
		}
	}
	temp_str[k]='\0';
	 x=atoi(temp_str);
	j++;
	for(k=0;input[j]!=')'&&input[j]!=']';j++)
	{
		if(input[j]=='-'||(input[j]>=48&&input[j]<=57)||input[j]=='.')
		{
			temp_str[k]=input[j];
			k++;
		}
	}
	temp_str[k]='\0';
	 y=atoi(temp_str);
	j++;


max( x, y,  z);
	for(i=0;i<1;i++)
	{
		for(k=0;k<1;k++)
		{
			gcvt(z[k+i*1],10,temp_str);
			strcat(temp_str,",");
			strcat(re_list,temp_str);
		}

		strcat(re_list,"]");
	}
        strcat(re_list,"&");
return re_list;
}
}
'\0';
	j++;
    
        //**
        token = strtok( temp_str, seps );
		i=0;
        while( token != NULL )              //**
        {
            temp_da[i]=atoi(token);
			
            //**
            token = strtok( NULL, seps ); 
			i++;
        }

max( x, y,  z);
	for(i=0;i<1;i++)
	{
		for(k=0;k<1;k++)
		{
			gcvt(z[k+i*1],10,temp_str);
			strcat(temp_str,",");
			strcat(re_list,temp_str);
		}

		strcat(re_list,"]");
	}
        strcat(re_list,"&");
return re_list;
}
}
}