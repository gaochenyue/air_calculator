set pm3d
set samples 50,50
set term jpeg
set out 'D:\Air Calculator Website\users\anonymous\image\test13.jpeg'
set isosamples 50,50
set xrange [-10:10] noreverse nowriteback
set yrange [-10:10] noreverse nowriteback
splot log(x**2+y**2)
