<#
	Publish debug script
	Usage: powershell -File pubdb.ps1
#>

$libPath = "C:\\Users\\��\\Desktop\\������\\plantprotection\\scripts\\lib"
$srcPath = "C:\\Users\\��\\Desktop\\������\\plantprotection\\scripts\\src"

# Apply CoffeScript compiler
coffee -c -o $libPath $srcPath