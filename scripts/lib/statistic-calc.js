"use strict";(function(){var checkedof,counter,ejoin,element,findMedian,findMode,first,fsum,getFerqsTable,getStatisticParameters,htmlset,last,makeReport,map,reportElement,runApplication,runParser,sub,valueof,indexOf=[].indexOf;runApplication=function runApplication(){var input,isPopulation;input=runParser(valueof("seqInput"));isPopulation=checkedof("checkbox1");return htmlset("reportPlace",makeReport(input,isPopulation))};makeReport=function makeReport(data,isPopulation){var parameters,target;parameters=getStatisticParameters(data,isPopulation);target=isPopulation?"генеральной совокупности":"выборки";return["<ul class='mdc-list mdc-list--two-line'>",reportElement("Размер ".concat(target,":"),parameters.size),reportElement("Сумма ".concat(target,":"),parameters.sum),reportElement("Максимум ".concat(target,":"),parameters.max),reportElement("Минимум ".concat(target,":"),parameters.min),reportElement("Среднее ".concat(target,":"),parameters.mean),reportElement("Медиана ".concat(target,":"),parameters.median),reportElement("Моды ".concat(target,":"),parameters.modes.join(", ")),reportElement("Размах ".concat(target,":"),parameters.range),reportElement("Дисперсия ".concat(target,":"),parameters.variance),reportElement("Стандартное отклонение ".concat(target,":"),parameters.sd),"</ul>",getFerqsTable(parameters.freqs,parameters.size)].join("")};reportElement=function reportElement(title,value){return'<li class="mdc-list-item">\n\t<span class="mdc-list-item__text">\n\t\t<span class="mdc-list-item__primary-text" style="color: #3f51b5; font-size: 12px;">\n\t\t\t'.concat(title,'\n\t\t</span>\n\t\t<span class="mdc-list-item__secondary-text" style="padding-left: 10px;">\n\t\t\t').concat(value,"\n\t\t</span>\n\t</span>\n</li>")};getStatisticParameters=function getStatisticParameters(data,isPopulation){var freqs,max,mean,median,min,modes,orderedData,range,sd,size,sum,variance;size=data.length;sum=data.reduce(fsum);mean=sum/size;orderedData=data.sort(sub);max=last(orderedData);min=first(orderedData);median=findMedian(orderedData);range=max-min;variance=orderedData.map(function(x){return Math.pow(x-mean,2)}).reduce(fsum)/(isPopulation?size:size-1);sd=Math.sqrt(variance);freqs=counter(orderedData);modes=findMode(freqs);return{size:size,sum:sum,mean:mean,median:median,max:max,min:min,range:range,variance:variance,sd:sd,freqs:freqs,modes:modes}};getFerqsTable=function getFerqsTable(freqs,size){var i;return'<div>\n<table class="mdl-data-table mdl-js-data-table">\n\t<tr>\n\t\t<td>x</td>\n\t\t'.concat(ejoin(map.makeKeyCells(freqs)),"\n\t</tr>\n\t<tr>\n\t\t<td>f</td>\n\t\t").concat(ejoin(map.makeValueCells(freqs)),"\n\t</tr>\n\t<tr>\n\t\t<td>ω</td>\n\t\t").concat(ejoin(function(){var results;results=[];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=freqs[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){i=_step.value;results.push("<td>"+new String(i[1]/size).substr(0,5)+"</td>")}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator["return"]!=null){_iterator["return"]()}}finally{if(_didIteratorError){throw _iteratorError}}}return results}()),"\n\t</tr>\n</table>\n</div>")};findMode=function findMode(freqs){var i,maxValue,results;maxValue=map.maxValue(freqs);results=[];var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=freqs[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){i=_step2.value;if(i[1]===maxValue){results.push(i[0])}}}catch(err){_didIteratorError2=true;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&_iterator2["return"]!=null){_iterator2["return"]()}}finally{if(_didIteratorError2){throw _iteratorError2}}}return results};findMedian=function findMedian(data){if(data.length%2===0){return(data[data.length/2]+data[data.length/2+1])/2}return data[Math.floor(data.length/2)]};counter=function counter(values){var i,j,len,map;map=new Map;for(j=0,len=values.length;j<len;j++){i=values[j];map.countIt(map,i)}return map};runParser=function runParser(input){var getCurrent,next,parseNumber,parserState,ref;parserState={result:[],currentPosition:0,input:input};getCurrent=function getCurrent(state){return state.input[state.currentPosition]};next=function next(state){var current;current=getCurrent(state);state.currentPosition++;return current};parseNumber=function parseNumber(state){var buffer,current,ref;buffer=next(state);while(ref=current=next(state),indexOf.call("0123456789.",ref)>=0){buffer+=current}return state.result.push(parseFloat(buffer))};while(parserState.currentPosition<input.length){if(ref=getCurrent(parserState),indexOf.call("0123456789",ref)>=0){parseNumber(parserState)}else{next(parserState)}}return parserState.result};var _document$flexibel=document.flexibel;valueof=_document$flexibel.valueof;checkedof=_document$flexibel.checkedof;htmlset=_document$flexibel.htmlset;first=_document$flexibel.first;last=_document$flexibel.last;fsum=_document$flexibel.fsum;sub=_document$flexibel.sub;map=_document$flexibel.map;ejoin=_document$flexibel.ejoin;element=_document$flexibel.element;element("runButton").addEventListener("click",runApplication)}).call(void 0);