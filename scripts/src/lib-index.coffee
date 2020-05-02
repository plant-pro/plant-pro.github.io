#: import flexibel.coffee

makeChip = (text) -> "
		<span class='mdl-chip mdl-chip--deletable'>
			<span class='mdl-chip__text'>#{text}</span>
			<button type='button' class='mdl-chip__action' onclick='document.clearFilter()'>
				<svg style='width:18px;height:18px' viewBox='0 0 24 24'>
					<path fill='#ffffff' d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' />
				</svg>
			</button>
		</span>
	"

updateFilter = (text) ->
	htmlset "filter", makeChip text

clearFilter = () ->
	htmlset "filter", ""

	searchBox = element "search-box"

	for i in searchBox.children
		i.style.display = "block" if i.className == "plpro-lib-record"

searchAutor = (text) ->
	searchBox = element "search-box"
	for i in searchBox.children
		if i.className == "plpro-lib-record"
			i.style.display = "none"
			for j in i.children
				if j.className == "plpro-lib-record-autor" and j.innerText == text
					i.style.display = "block"

document.stateChanged = (self) ->
	if self.checked
		for i in searchBox.children
			if i.className == "plpro-lib-record"
				span = i.getElementsByClassName "plpro-lib-record-article"
				if span.length == 0
					i.style.display = "none"
	else
		for i in searchBox.children
			if i.className == "plpro-lib-record"
				i.style.display = "block"

document.autorOnClick = (self) ->
	searchAutor self.innerText
	updateFilter "Автор: #{self.innerText}"

document.clearFilter = clearFilter