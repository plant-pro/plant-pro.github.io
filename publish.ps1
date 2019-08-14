<#
	Publish script
	Usage: powershell -File publish.ps1
#>

$devpath = "C:\\Users\\��\\Desktop\\������\\plantprotection"
$babelpath = "C:\\Users\\��\\AppData\\Roaming\\npm\\node_modules\\@babel"
$scriptspath = "C:\\Users\\��\\Desktop\\������\\plantprotection\scripts"

# Apply CoffeScript compiler
coffee -c -o scripts/ scripts/src

# Apply Babel
set-location $babelpath
babel $scriptspath --out-dir $scriptspath --presets=@babel/env
set-location $devpath

# Apply UglifyJS
foreach ($script in get-childitem $scriptspath -file) {
	uglifyjs $script.fullname -o $script.fullname
}

# Publish at GitHub
git add *
git commit -m automessage
git pull origin master 
git push origin master
