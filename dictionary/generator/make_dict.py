import sys

TEMPLATE_PART_ONE = """
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>Словарь агронома</title>

	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet" href="../../stylesheets/material.min.css">
	<script src="../../scripts/material.min.js"></script>
</head>

<body>
	<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		<header class="mdl-layout__header">
			<div class="mdl-layout__header-row">
				<span class="mdl-layout-title">PLANT PROTECTION</span>
				<div class="mdl-layout-spacer"></div>
				<nav class="mdl-navigation mdl-layout--large-screen-only">
					<a class="mdl-navigation__link" href="about.html">О сайте</a>
				</nav>
			</div>
		</header>

		<div class="mdl-layout__drawer">
			<span class="mdl-layout-title">Разделы</span>
			<nav class="mdl-navigation">
				<a class="mdl-navigation__link" href="index.html"><i class="material-icons">subject</i>Статьи</a>
				<a class="mdl-navigation__link" href="library/index.html"><i class="material-icons">book</i>Библиотека</a>
				<a class="mdl-navigation__link" href="applications/index.html"><i
						class="material-icons">translate</i>Приложения</a>
						<a class="mdl-navigation__link" href="dictionary/index.html"><i
							class="material-icons">widgets</i>Словарь</a>
				<a class="mdl-navigation__link" href="genetic-tasks/index.html"><i class="material-icons">list_alt</i>Сборник
					задач по генетике</a>
				<a class="mdl-navigation__link" href="about.html"><i class="material-icons"
						style="font-size: 24px">live_help</i> О сайте</a>
			</nav>
		</div>

		<main class="mdl-layout__content">
			<div class="page-content">
				<div class="mdl-grid">
					<div class="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
"""
TEMPLATE_PART_TWO = """
					</div>
				</div>
			</div>
		</main>
	</div>
</body>
</html>
"""

def normalizePair(pair):
	return (pair[0][0].upper() + pair[0][1:], pair[1][0].upper() + pair[1][1:])

def generateTable(pairs):
	result = """
	<table class="mdl-data-table">
	<thead>
		<tr>
			<td class="mdl-data-table__cell--non-numeric">Слово</td>
			<td class="mdl-data-table__cell--non-numeric">Перевод</td>
		</tr>
	</thead>
	"""
	for word, translated_word in pairs:
		result += "<tr><td class='mdl-data-table__cell--non-numeric'>" + word + "</td><td class='mdl-data-table__cell--non-numeric'>" + translated_word + "</td></tr>"
	
	result += "</table>"

	return result

def buildPage(pairs):
	generated_title = "<h3>" + pairs[0][0][0] + "</h3>"
	generated_table = generateTable(pairs)
	return TEMPLATE_PART_ONE + generated_title + generated_table + TEMPLATE_PART_TWO

input_directory = sys.argv[1]
output_directory = sys.argv[2]

words_count = 0
groupped = dict()
with open(input_directory, "r", encoding="utf-8") as file:
	line = file.readline()
	while line:
		words_count += 1
		pair = normalizePair(line.split("|"))
		first_letter = pair[0][0]
		if first_letter in groupped:
			groupped[first_letter].append(pair)
		else:
			groupped[first_letter] = [pair]
		line = file.readline()

#print(groupped)
for name in groupped:
	with open(output_directory + "\\" + name + "_words.html", "w+", encoding="utf-8") as file:
		file.write(buildPage(groupped[name]))

with open(output_directory + "\\index.html", "w+", encoding="utf-8") as file:
	file.write(f"""
	<!doctype html>
<html lang="ru">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Словарь агронома Agro dictionary">
	<title>Словарь агронома</title>

	<link rel="stylesheet" href="../stylesheets/material.min.css">
	<script src="../scripts/material.min.js"></script>
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css">
	<link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

	<link rel="stylesheet" href="../stylesheets/editable.css">

	<style>
		.padded {{
			margin-bottom: 10px;
		}}
	</style>
</head>

<body>
	<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		<header class="mdl-layout__header">
			<div class="mdl-layout__header-row">
				<span class="mdl-layout-title">PLANT PROTECTION</span>
				<!-- Add spacer, to align navigation to the right -->
				<div class="mdl-layout-spacer"></div>
				<!-- Navigation. We hide it in small screens. -->
				<nav class="mdl-navigation mdl-layout--large-screen-only">
					<a class="mdl-navigation__link" href="../about.html">О сайте</a>
				</nav>
			</div>
		</header>

		<div class="mdl-layout__drawer">
			<span class="mdl-layout-title">Разделы</span>
			<nav class="mdl-navigation">
				<a class="mdl-navigation__link" href="../index.html"><i class="material-icons">subject</i>Статьи</a>
				<a class="mdl-navigation__link" href="../library/index.html"><i class="material-icons">book</i>Библиотека</a>
				<a class="mdl-navigation__link" href="index.html"><i class="material-icons">widgets</i>Приложения</a>
				<a class="mdl-navigation__link" href="../genetic-tasks/index.html"><i class="material-icons">list_alt</i>Сборник
					задач по генетике</a>
				<a class="mdl-navigation__link" href="../about.html"><i class="material-icons"
						style="font-size: 24px">live_help</i> О сайте</a>
			</nav>
		</div>

		<main class="mdl-layout__content">
			<div class="page-content">
				<div class="mdl-grid">
					<div class="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
						<h3>Англо-русский словарь агронома</h3>

						<h6>Количество слов в базе данных: {str(words_count)}</h6>

						<a href="en-ru/A_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">A</a>
						<a href="en-ru/B_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">B</a>
						<a href="en-ru/C_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">C</a>
						<a href="en-ru/D_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">D</a>
						<a href="en-ru/E_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">E</a>
						<a href="en-ru/F_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">F</a>
						<a href="en-ru/G_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">G</a>
						<a href="en-ru/H_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">H</a>
						<a href="en-ru/I_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">I</a>
						<a href="en-ru/K_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">K</a>
						<a href="en-ru/L_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">L</a>
						<a href="en-ru/M_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">M</a>
						<a href="en-ru/N_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">N</a>
						<a href="en-ru/O_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">O</a>
						<a href="en-ru/P_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">P</a>
						<a href="en-ru/R_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">R</a>
						<a href="en-ru/S_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">S</a>
						<a href="en-ru/T_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">T</a>
						<a href="en-ru/U_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">U</a>
						<a href="en-ru/Q_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Q</a>
						<a href="en-ru/V_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">V</a>
						<a href="en-ru/W_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">W</a>
						<a href="en-ru/X_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">X</a>
						<a href="en-ru/Y_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Y</a>
						<a href="en-ru/Z_words.html" class="padded mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Z</a>
					</div>
				</div>
			</div>
		</main>
	</div>
</body>
</html>""")
