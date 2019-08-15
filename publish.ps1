<#
	Publish script
	Usage: powershell -File publish.ps1
#>

$projectPath = "C:\\Users\\��\\Desktop\\������\\plantprotection"
$babelPath = "C:\\Users\\��\\AppData\\Roaming\\npm\\node_modules\\@babel"

$libPath = "C:\\Users\\��\\Desktop\\������\\plantprotection\\scripts\\lib"
$srcPath = "C:\\Users\\��\\Desktop\\������\\plantprotection\\scripts\\src"

# Apply CoffeScript compiler
coffee -c -o $libPath $srcPath

# Apply Babel
set-location $babelPath
babel $libPath --out-dir $libPath --presets=@babel/env
set-location $projectPath

# Apply UglifyJS
foreach ($script in get-childitem $libPath -file) {
	uglifyjs $script.fullname -o $script.fullname
}

# Publish at GitHub
git add *
git commit -m automessage
git pull origin master 
git push origin master
