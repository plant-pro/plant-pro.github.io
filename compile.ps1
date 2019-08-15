<#
	CoffeeScript compilation file
	Usage: powershell -File compile.ps1

	Warning: with cyrillic symbols use in Windows 1251 encoding
	Autor: Tsvikevich Denis-2019
#>

# Output path
$libPath = "C:\\Users\\��\\Desktop\\������\\plantprotection\\scripts\\lib"
# Input path
$srcPath = "C:\\Users\\��\\Desktop\\������\\plantprotection\\scripts\\src"

# Apply CoffeScript compiler
coffee -c -o $libPath $srcPath