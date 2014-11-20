set title "sin(x^2)"
set grid
set samples 100,100
set term jpeg
set out 'D:\Air Calculator Website\users\wyq\image\wyq2.jpeg'
set xrange [-5:5] noreverse nowriteback
plot sin(x**2)
