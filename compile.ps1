<#
	CoffeeScript compilation file
	Usage: powershell -File compile.ps1

	Warning: with cyrillic symbols use in Windows 1251 encoding
	Autor: Tsvikevich Denis-2019
#>

# Path to project
$projectPath = "C:\\Users\\��\\Desktop\\������\\plantprotection"
# Path to Babel (installed globally)
$babelPath = "C:\\Users\\��\\AppData\\Roaming\\npm\\node_modules\\@babel"

# Output path
$libPath = "C:\\Users\\��\\Desktop\\������\\plantprotection\\scripts\\lib"
# Input path
$srcPath = "C:\\Users\\��\\Desktop\\������\\plantprotection\\scripts\\src"
# Temporary directory with concatenated files
$srcctPath = "C:\\Users\\��\\Desktop\\������\\plantprotection\\scripts\\src\srcct"

py concater.py $srcPath $srcctPath
# Apply CoffeScript compiler
coffee -c -o $libPath $srcctPath
