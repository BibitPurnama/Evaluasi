var n = 9;
for (var i = 0; i<= n; i++) {
	for (var j = 0; j <= n; j++) {
		if (i == j || i + j == n || i == 5 || j == 5 ) {
			document.write('+');
	}else {
		document.write('  -  ');
		}
	}document.write("<br>");
		}
document.write("<br>")