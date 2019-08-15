# 86 80 25 77 73 76 100 90 69 93 90 83 70 73 73 70 90 83 71 95 40 58 68 69 100 78 87 97 92 74
runApplication = () ->
	input = runParser valueof "seqInput"
	isPopulation = checkedof "checkbox1"

	htmlset "reportPlace", makeReport(input, isPopulation)

makeReport = (data, isPopulation) ->
	parameters = getStatisticParameters data, isPopulation
	target = if isPopulation then "генеральной совокупности" else "выборки"

	[
		"<ul class='mdc-list mdc-list--two-line'>"
		reportElement "Размер #{target}:", parameters.size
		reportElement "Сумма #{target}:", parameters.sum
		reportElement "Максимум #{target}:", parameters.max
		reportElement "Минимум #{target}:", parameters.min
		reportElement "Среднее #{target}:", parameters.mean
		reportElement "Медиана #{target}:", parameters.median
		reportElement "Моды #{target}:", parameters.modes.join ", "
		reportElement "Размах #{target}:", parameters.range
		reportElement "Дисперсия #{target}:", parameters.variance
		reportElement "Стандартное отклонение #{target}:", parameters.sd
		"</ul>"
		getFerqsTable(parameters.freqs, parameters.size)
	].join ""

reportElement = (title, value) ->
	return """
		<li class="mdc-list-item">
			<span class="mdc-list-item__text">
				<span class="mdc-list-item__primary-text" style="color: #3f51b5; font-size: 12px;">
					#{title}
				</span>
				<span class="mdc-list-item__secondary-text" style="padding-left: 10px;">
					#{value}
				</span>
			</span>
		</li>
	"""

getStatisticParameters = (data, isPopulation) ->
	size = data.length
	sum = data.reduce fsum
	mean = sum / size
	orderedData = data.sort sub
	max = last orderedData
	min = first orderedData
	median = findMedian orderedData
	range = max - min
	variance = orderedData
		.map (x) -> (x - mean) ** 2
		.reduce(fsum) / if isPopulation then size else size - 1
	sd = Math.sqrt(variance)
	freqs = counter(orderedData)
	modes = findMode freqs

	{ size, sum, mean, median, max, min, range, variance, sd, freqs, modes }

getFerqsTable = (freqs, size) ->
	"""
	<div>
	<table class="mdl-data-table mdl-js-data-table">
		<tr>
			<td>x</td>
			#{ejoin map.makeKeyCells freqs}
		</tr>
		<tr>
			<td>f</td>
			#{ejoin map.makeValueCells freqs}
		</tr>
		<tr>
			<td>ω</td>
			#{ejoin(("<td>" + new String(i[1] / size).substr(0, 5) + "</td>") for i from freqs)}
		</tr>
	</table>
</div>
"""

findMode = (freqs) ->
	maxValue = map.maxValue freqs
	for i from freqs when i[1] == maxValue then i[0]

findMedian = (data) ->
	return (data[data.length / 2] + data[data.length / 2 + 1]) / 2 if data.length % 2 is 0
	data[Math.floor(data.length / 2)]

counter = (values) ->
	map = new Map
	map.countIt map, i for i in values
	map

runParser = (input) ->
	parserState = {
		result: []
		currentPosition: 0
		input: input
	}

	getCurrent = (state) ->
		state.input[state.currentPosition]
	
	next = (state) ->
		current = getCurrent state
		state.currentPosition++
		current

	parseNumber = (state) ->
		buffer = next state
		while (current = next state) in "0123456789."
			buffer += current
		state.result.push parseFloat(buffer)

	while parserState.currentPosition < input.length
		if (getCurrent parserState) in "0123456789"
			parseNumber parserState
		else
			next parserState
	
	parserState.result

{
	valueof, checkedof, htmlset,
	first, last, fsum,
	sub, map, ejoin, element
} = document.flexibel

element "runButton"
	.addEventListener("click", runApplication)