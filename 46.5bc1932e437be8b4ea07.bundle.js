(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{2496:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: /Users/erik_ritter/repos/github.com/apache-superset/superset-ui/node_modules/core-js/modules/web.dom-collections.iterator.js\nvar web_dom_collections_iterator = __webpack_require__(27);\n\n// EXTERNAL MODULE: /Users/erik_ritter/repos/github.com/apache-superset/superset-ui/node_modules/prop-types/index.js\nvar prop_types = __webpack_require__(53);\nvar prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);\n\n// EXTERNAL MODULE: /Users/erik_ritter/repos/github.com/apache-superset/superset-ui/node_modules/react/index.js\nvar react = __webpack_require__(0);\nvar react_default = /*#__PURE__*/__webpack_require__.n(react);\n\n// EXTERNAL MODULE: /Users/erik_ritter/repos/github.com/apache-superset/superset-ui/node_modules/@data-ui/histogram/esm/axis/XAxis.js\nvar XAxis = __webpack_require__(2443);\n\n// EXTERNAL MODULE: /Users/erik_ritter/repos/github.com/apache-superset/superset-ui/node_modules/@data-ui/histogram/esm/axis/YAxis.js\nvar YAxis = __webpack_require__(2445);\n\n// EXTERNAL MODULE: /Users/erik_ritter/repos/github.com/apache-superset/superset-ui/node_modules/@data-ui/histogram/esm/chart/Histogram.js + 62 modules\nvar Histogram = __webpack_require__(2464);\n\n// EXTERNAL MODULE: /Users/erik_ritter/repos/github.com/apache-superset/superset-ui/node_modules/@data-ui/histogram/esm/series/BarSeries.js + 18 modules\nvar BarSeries = __webpack_require__(2469);\n\n// EXTERNAL MODULE: /Users/erik_ritter/repos/github.com/apache-superset/superset-ui/node_modules/@data-ui/theme/esm/chartTheme.js + 2 modules\nvar chartTheme = __webpack_require__(2489);\n\n// EXTERNAL MODULE: /Users/erik_ritter/repos/github.com/apache-superset/superset-ui/node_modules/@vx/legend/esm/legends/Ordinal.js + 9 modules\nvar Ordinal = __webpack_require__(2471);\n\n// EXTERNAL MODULE: /Users/erik_ritter/repos/github.com/apache-superset/superset-ui/plugins/legacy-plugin-chart-histogram/node_modules/@vx/scale/esm/scales/ordinal.js + 23 modules\nvar ordinal = __webpack_require__(2468);\n\n// EXTERNAL MODULE: ../superset-ui-core/src/color/index.ts + 3 modules\nvar src_color = __webpack_require__(842);\n\n// EXTERNAL MODULE: ../superset-ui-core/src/translation/TranslatorSingleton.ts + 1 modules\nvar TranslatorSingleton = __webpack_require__(13);\n\n// EXTERNAL MODULE: ../superset-ui-core/src/style/index.ts\nvar src_style = __webpack_require__(442);\n\n// EXTERNAL MODULE: /Users/erik_ritter/repos/github.com/apache-superset/superset-ui/plugins/legacy-plugin-chart-histogram/node_modules/@vx/responsive/esm/components/ParentSize.js\nvar ParentSize = __webpack_require__(2446);\n\n// CONCATENATED MODULE: /Users/erik_ritter/repos/github.com/apache-superset/superset-ui/plugins/legacy-plugin-chart-histogram/src/WithLegend.jsx\nfunction ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */ /* eslint-disable react/sort-prop-types, react/jsx-sort-default-props */const propTypes={className:prop_types_default.a.string,width:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),height:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),renderChart:prop_types_default.a.func.isRequired,renderLegend:prop_types_default.a.func.isRequired,position:prop_types_default.a.oneOf(["top","left","bottom","right"]),legendJustifyContent:prop_types_default.a.oneOf(["center","flex-start","flex-end"])},defaultProps={className:"",width:"auto",height:"auto",position:"top",legendJustifyContent:void 0},LEGEND_STYLE_BASE={display:"flex",flexGrow:0,flexShrink:0,order:-1,paddingTop:"5px",fontSize:"0.9em"},CHART_STYLE_BASE={flexGrow:1,flexShrink:1,flexBasis:"auto",position:"relative"};class WithLegend_WithLegend extends react_default.a.Component{getContainerDirection(){const{position}=this.props;switch(position){case"left":return"row";case"right":return"row-reverse";case"bottom":return"column-reverse";default:case"top":return"column";}}getLegendJustifyContent(){const{legendJustifyContent,position}=this.props;if(legendJustifyContent){return legendJustifyContent}switch(position){case"left":return"flex-start";case"right":return"flex-start";case"bottom":return"flex-end";default:case"top":return"flex-end";}}render(){const{className,width,height,position,renderChart,renderLegend}=this.props,isHorizontal="left"===position||"right"===position,style={display:"flex",flexDirection:this.getContainerDirection()};if(width){style.width=width}if(height){style.height=height}const chartStyle=_objectSpread({},CHART_STYLE_BASE);if(isHorizontal){chartStyle.width=0}else{chartStyle.height=0}const legendDirection=isHorizontal?"column":"row",legendStyle=_objectSpread(_objectSpread({},LEGEND_STYLE_BASE),{},{flexDirection:legendDirection,justifyContent:this.getLegendJustifyContent()});return/*#__PURE__*/react_default.a.createElement("div",{className:`with-legend ${className}`,style:style},/*#__PURE__*/react_default.a.createElement("div",{className:"legend-container",style:legendStyle},renderLegend({// Pass flexDirection for @vx/legend to arrange legend items\ndirection:legendDirection,style:{flexWrap:"wrap",display:"flex",flexDirection:legendDirection}})),/*#__PURE__*/react_default.a.createElement("div",{className:"main-container",style:chartStyle},/*#__PURE__*/react_default.a.createElement(ParentSize["a" /* default */],null,parent=>0<parent.width&&0<parent.height?// Only render when necessary\nrenderChart(parent):null)))}}WithLegend_WithLegend.displayName="WithLegend";WithLegend_WithLegend.propTypes=propTypes;WithLegend_WithLegend.defaultProps=defaultProps;WithLegend_WithLegend.__docgenInfo={description:"",methods:[{name:"getContainerDirection",docblock:null,modifiers:[],params:[],returns:null},{name:"getLegendJustifyContent",docblock:null,modifiers:[],params:[],returns:null}],displayName:"WithLegend",props:{className:{defaultValue:{value:"\'\'",computed:!1},type:{name:"string"},required:!1,description:""},width:{defaultValue:{value:"\'auto\'",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:""},height:{defaultValue:{value:"\'auto\'",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:""},position:{defaultValue:{value:"\'top\'",computed:!1},type:{name:"enum",value:[{value:"\'top\'",computed:!1},{value:"\'left\'",computed:!1},{value:"\'bottom\'",computed:!1},{value:"\'right\'",computed:!1}]},required:!1,description:""},legendJustifyContent:{defaultValue:{value:"undefined",computed:!0},type:{name:"enum",value:[{value:"\'center\'",computed:!1},{value:"\'flex-start\'",computed:!1},{value:"\'flex-end\'",computed:!1}]},required:!1,description:""},renderChart:{type:{name:"func"},required:!0,description:""},renderLegend:{type:{name:"func"},required:!0,description:""}}};/* harmony default export */ var src_WithLegend = (WithLegend_WithLegend);if("undefined"!=typeof STORYBOOK_REACT_CLASSES){STORYBOOK_REACT_CLASSES["../../plugins/legacy-plugin-chart-histogram/src/WithLegend.jsx"]={name:"WithLegend",docgenInfo:WithLegend_WithLegend.__docgenInfo,path:"../../plugins/legacy-plugin-chart-histogram/src/WithLegend.jsx"}}\n// CONCATENATED MODULE: /Users/erik_ritter/repos/github.com/apache-superset/superset-ui/plugins/legacy-plugin-chart-histogram/src/Histogram.jsx\n/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */ /* eslint-disable react/sort-prop-types */const Histogram_propTypes={className:prop_types_default.a.string,data:prop_types_default.a.arrayOf(prop_types_default.a.shape({key:prop_types_default.a.string,values:prop_types_default.a.arrayOf(prop_types_default.a.number)})).isRequired,width:prop_types_default.a.number.isRequired,height:prop_types_default.a.number.isRequired,colorScheme:prop_types_default.a.string,normalized:prop_types_default.a.bool,binCount:prop_types_default.a.number,opacity:prop_types_default.a.number,xAxisLabel:prop_types_default.a.string,yAxisLabel:prop_types_default.a.string,showLegend:prop_types_default.a.bool},Histogram_defaultProps={binCount:15,className:"",colorScheme:"",normalized:!1,opacity:1,xAxisLabel:"",yAxisLabel:""};class Histogram_CustomHistogram extends react_default.a.PureComponent{render(){const{className,data,width,height,binCount,colorScheme,normalized,opacity,xAxisLabel,yAxisLabel,showLegend}=this.props,colorFn=src_color["b" /* CategoricalColorNamespace */].getScale(colorScheme),keys=data.map(d=>d.key),colorScale=Object(ordinal["a" /* default */])({domain:keys,range:keys.map(x=>colorFn(x))});var _ref=/*#__PURE__*/react_default.a.createElement(XAxis["a" /* default */],{label:xAxisLabel}),_ref2=/*#__PURE__*/react_default.a.createElement(YAxis["a" /* default */],{label:yAxisLabel});return/*#__PURE__*/react_default.a.createElement(src_WithLegend,{className:`superset-legacy-chart-histogram ${className}`,width:width,height:height,position:"top",renderLegend:({direction,style})=>showLegend&&/*#__PURE__*/react_default.a.createElement(Ordinal["a" /* default */],{style:style,scale:colorScale,direction:direction,shape:"rect",labelMargin:"0 15px 0 0"}),renderChart:parent=>/*#__PURE__*/react_default.a.createElement(Histogram["a" /* default */],{width:parent.width,height:parent.height,ariaLabel:"Histogram",normalized:normalized,binCount:binCount,binType:"numeric",margin:{top:20,right:20},renderTooltip:({datum,color})=>/*#__PURE__*/react_default.a.createElement("div",null,/*#__PURE__*/react_default.a.createElement("strong",{style:{color}},datum.bin0," to ",datum.bin1),/*#__PURE__*/react_default.a.createElement("div",null,/*#__PURE__*/react_default.a.createElement("strong",null,Object(TranslatorSingleton["e" /* t */])("count")," "),datum.count),/*#__PURE__*/react_default.a.createElement("div",null,/*#__PURE__*/react_default.a.createElement("strong",null,Object(TranslatorSingleton["e" /* t */])("cumulative")," "),datum.cumulative)),valueAccessor:datum=>datum,theme:chartTheme["a" /* default */]},data.map(series=>/*#__PURE__*/react_default.a.createElement(BarSeries["a" /* default */],{key:series.key,animated:!0,rawData:series.values,fill:colorScale(series.key),fillOpacity:opacity})),_ref,_ref2)})}}Histogram_CustomHistogram.displayName="CustomHistogram";Histogram_CustomHistogram.propTypes=Histogram_propTypes;Histogram_CustomHistogram.defaultProps=Histogram_defaultProps;/* harmony default export */ var src_Histogram = __webpack_exports__["default"] = (Object(src_style["d" /* styled */])(Histogram_CustomHistogram)`\n  .superset-legacy-chart-histogram {\n    overflow: hidden;\n  }\n`);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQ5Ni5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8vVXNlcnMvZXJpa19yaXR0ZXIvcmVwb3MvZ2l0aHViLmNvbS9hcGFjaGUtc3VwZXJzZXQvc3VwZXJzZXQtdWkvcGx1Z2lucy9sZWdhY3ktcGx1Z2luLWNoYXJ0LWhpc3RvZ3JhbS9zcmMvV2l0aExlZ2VuZC5qc3g/YWIxZiIsIndlYnBhY2s6Ly8vL1VzZXJzL2VyaWtfcml0dGVyL3JlcG9zL2dpdGh1Yi5jb20vYXBhY2hlLXN1cGVyc2V0L3N1cGVyc2V0LXVpL3BsdWdpbnMvbGVnYWN5LXBsdWdpbi1jaGFydC1oaXN0b2dyYW0vc3JjL0hpc3RvZ3JhbS5qc3g/YWE3NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9zb3J0LXByb3AtdHlwZXMsIHJlYWN0L2pzeC1zb3J0LWRlZmF1bHQtcHJvcHMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUGFyZW50U2l6ZSB9IGZyb20gJ0B2eC9yZXNwb25zaXZlJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICByZW5kZXJDaGFydDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVuZGVyTGVnZW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ2xlZnQnLCAnYm90dG9tJywgJ3JpZ2h0J10pLFxuICBsZWdlbmRKdXN0aWZ5Q29udGVudDogUHJvcFR5cGVzLm9uZU9mKFsnY2VudGVyJywgJ2ZsZXgtc3RhcnQnLCAnZmxleC1lbmQnXSksXG59O1xuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICB3aWR0aDogJ2F1dG8nLFxuICBoZWlnaHQ6ICdhdXRvJyxcbiAgcG9zaXRpb246ICd0b3AnLFxuICBsZWdlbmRKdXN0aWZ5Q29udGVudDogdW5kZWZpbmVkLFxufTtcblxuY29uc3QgTEVHRU5EX1NUWUxFX0JBU0UgPSB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleEdyb3c6IDAsXG4gIGZsZXhTaHJpbms6IDAsXG4gIG9yZGVyOiAtMSxcbiAgcGFkZGluZ1RvcDogJzVweCcsXG4gIGZvbnRTaXplOiAnMC45ZW0nLFxufTtcblxuY29uc3QgQ0hBUlRfU1RZTEVfQkFTRSA9IHtcbiAgZmxleEdyb3c6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhCYXNpczogJ2F1dG8nLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbn07XG5cbmNsYXNzIFdpdGhMZWdlbmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBnZXRDb250YWluZXJEaXJlY3Rpb24oKSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgcmV0dXJuICdyb3cnO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICByZXR1cm4gJ3Jvdy1yZXZlcnNlJztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIHJldHVybiAnY29sdW1uLXJldmVyc2UnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIHJldHVybiAnY29sdW1uJztcbiAgICB9XG4gIH1cblxuICBnZXRMZWdlbmRKdXN0aWZ5Q29udGVudCgpIHtcbiAgICBjb25zdCB7IGxlZ2VuZEp1c3RpZnlDb250ZW50LCBwb3NpdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobGVnZW5kSnVzdGlmeUNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBsZWdlbmRKdXN0aWZ5Q29udGVudDtcbiAgICB9XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHJldHVybiAnZmxleC1zdGFydCc7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHJldHVybiAnZmxleC1zdGFydCc7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICByZXR1cm4gJ2ZsZXgtZW5kJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICByZXR1cm4gJ2ZsZXgtZW5kJztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIHdpZHRoLCBoZWlnaHQsIHBvc2l0aW9uLCByZW5kZXJDaGFydCwgcmVuZGVyTGVnZW5kIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gcG9zaXRpb24gPT09ICdsZWZ0JyB8fCBwb3NpdGlvbiA9PT0gJ3JpZ2h0JztcblxuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogdGhpcy5nZXRDb250YWluZXJEaXJlY3Rpb24oKSxcbiAgICB9O1xuICAgIGlmICh3aWR0aCkge1xuICAgICAgc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICB9XG4gICAgaWYgKGhlaWdodCkge1xuICAgICAgc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbnN0IGNoYXJ0U3R5bGUgPSB7IC4uLkNIQVJUX1NUWUxFX0JBU0UgfTtcbiAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICBjaGFydFN0eWxlLndpZHRoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhcnRTdHlsZS5oZWlnaHQgPSAwO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZ2VuZERpcmVjdGlvbiA9IGlzSG9yaXpvbnRhbCA/ICdjb2x1bW4nIDogJ3Jvdyc7XG4gICAgY29uc3QgbGVnZW5kU3R5bGUgPSB7XG4gICAgICAuLi5MRUdFTkRfU1RZTEVfQkFTRSxcbiAgICAgIGZsZXhEaXJlY3Rpb246IGxlZ2VuZERpcmVjdGlvbixcbiAgICAgIGp1c3RpZnlDb250ZW50OiB0aGlzLmdldExlZ2VuZEp1c3RpZnlDb250ZW50KCksXG4gICAgfTtcbiAgICBjb25zdCBsZWdlbmRDb250YWluZXJTdHlsZSA9IHtcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBsZWdlbmREaXJlY3Rpb24sXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B3aXRoLWxlZ2VuZCAke2NsYXNzTmFtZX1gfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZ2VuZC1jb250YWluZXJcIiBzdHlsZT17bGVnZW5kU3R5bGV9PlxuICAgICAgICAgIHtyZW5kZXJMZWdlbmQoe1xuICAgICAgICAgICAgLy8gUGFzcyBmbGV4RGlyZWN0aW9uIGZvciBAdngvbGVnZW5kIHRvIGFycmFuZ2UgbGVnZW5kIGl0ZW1zXG4gICAgICAgICAgICBkaXJlY3Rpb246IGxlZ2VuZERpcmVjdGlvbixcbiAgICAgICAgICAgIHN0eWxlOiBsZWdlbmRDb250YWluZXJTdHlsZSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXJcIiBzdHlsZT17Y2hhcnRTdHlsZX0+XG4gICAgICAgICAgPFBhcmVudFNpemU+XG4gICAgICAgICAgICB7cGFyZW50ID0+XG4gICAgICAgICAgICAgIHBhcmVudC53aWR0aCA+IDAgJiYgcGFyZW50LmhlaWdodCA+IDBcbiAgICAgICAgICAgICAgICA/IC8vIE9ubHkgcmVuZGVyIHdoZW4gbmVjZXNzYXJ5XG4gICAgICAgICAgICAgICAgICByZW5kZXJDaGFydChwYXJlbnQpXG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9QYXJlbnRTaXplPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuV2l0aExlZ2VuZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5XaXRoTGVnZW5kLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgV2l0aExlZ2VuZDtcbiIsIi8qKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3NvcnQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIaXN0b2dyYW0sIEJhclNlcmllcywgWEF4aXMsIFlBeGlzIH0gZnJvbSAnQGRhdGEtdWkvaGlzdG9ncmFtJztcbmltcG9ydCB7IGNoYXJ0VGhlbWUgfSBmcm9tICdAZGF0YS11aS90aGVtZSc7XG5pbXBvcnQgeyBMZWdlbmRPcmRpbmFsIH0gZnJvbSAnQHZ4L2xlZ2VuZCc7XG5pbXBvcnQgeyBzY2FsZU9yZGluYWwgfSBmcm9tICdAdngvc2NhbGUnO1xuaW1wb3J0IHsgQ2F0ZWdvcmljYWxDb2xvck5hbWVzcGFjZSwgc3R5bGVkLCB0IH0gZnJvbSAnQHN1cGVyc2V0LXVpL2NvcmUnO1xuaW1wb3J0IFdpdGhMZWdlbmQgZnJvbSAnLi9XaXRoTGVnZW5kJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBrZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2YWx1ZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxuICAgIH0pLFxuICApLmlzUmVxdWlyZWQsXG4gIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjb2xvclNjaGVtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbm9ybWFsaXplZDogUHJvcFR5cGVzLmJvb2wsXG4gIGJpbkNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBvcGFjaXR5OiBQcm9wVHlwZXMubnVtYmVyLFxuICB4QXhpc0xhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB5QXhpc0xhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaG93TGVnZW5kOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIGJpbkNvdW50OiAxNSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgY29sb3JTY2hlbWU6ICcnLFxuICBub3JtYWxpemVkOiBmYWxzZSxcbiAgb3BhY2l0eTogMSxcbiAgeEF4aXNMYWJlbDogJycsXG4gIHlBeGlzTGFiZWw6ICcnLFxufTtcblxuY2xhc3MgQ3VzdG9tSGlzdG9ncmFtIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkYXRhLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBiaW5Db3VudCxcbiAgICAgIGNvbG9yU2NoZW1lLFxuICAgICAgbm9ybWFsaXplZCxcbiAgICAgIG9wYWNpdHksXG4gICAgICB4QXhpc0xhYmVsLFxuICAgICAgeUF4aXNMYWJlbCxcbiAgICAgIHNob3dMZWdlbmQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjb2xvckZuID0gQ2F0ZWdvcmljYWxDb2xvck5hbWVzcGFjZS5nZXRTY2FsZShjb2xvclNjaGVtZSk7XG4gICAgY29uc3Qga2V5cyA9IGRhdGEubWFwKGQgPT4gZC5rZXkpO1xuICAgIGNvbnN0IGNvbG9yU2NhbGUgPSBzY2FsZU9yZGluYWwoe1xuICAgICAgZG9tYWluOiBrZXlzLFxuICAgICAgcmFuZ2U6IGtleXMubWFwKHggPT4gY29sb3JGbih4KSksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFdpdGhMZWdlbmRcbiAgICAgICAgY2xhc3NOYW1lPXtgc3VwZXJzZXQtbGVnYWN5LWNoYXJ0LWhpc3RvZ3JhbSAke2NsYXNzTmFtZX1gfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICBwb3NpdGlvbj1cInRvcFwiXG4gICAgICAgIHJlbmRlckxlZ2VuZD17KHsgZGlyZWN0aW9uLCBzdHlsZSB9KSA9PlxuICAgICAgICAgIHNob3dMZWdlbmQgJiYgKFxuICAgICAgICAgICAgPExlZ2VuZE9yZGluYWxcbiAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICBzY2FsZT17Y29sb3JTY2FsZX1cbiAgICAgICAgICAgICAgZGlyZWN0aW9uPXtkaXJlY3Rpb259XG4gICAgICAgICAgICAgIHNoYXBlPVwicmVjdFwiXG4gICAgICAgICAgICAgIGxhYmVsTWFyZ2luPVwiMCAxNXB4IDAgMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJDaGFydD17cGFyZW50ID0+IChcbiAgICAgICAgICA8SGlzdG9ncmFtXG4gICAgICAgICAgICB3aWR0aD17cGFyZW50LndpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtwYXJlbnQuaGVpZ2h0fVxuICAgICAgICAgICAgYXJpYUxhYmVsPVwiSGlzdG9ncmFtXCJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWQ9e25vcm1hbGl6ZWR9XG4gICAgICAgICAgICBiaW5Db3VudD17YmluQ291bnR9XG4gICAgICAgICAgICBiaW5UeXBlPVwibnVtZXJpY1wiXG4gICAgICAgICAgICBtYXJnaW49e3sgdG9wOiAyMCwgcmlnaHQ6IDIwIH19XG4gICAgICAgICAgICByZW5kZXJUb29sdGlwPXsoeyBkYXR1bSwgY29sb3IgfSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgY29sb3IgfX0+XG4gICAgICAgICAgICAgICAgICB7ZGF0dW0uYmluMH0gdG8ge2RhdHVtLmJpbjF9XG4gICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3QoJ2NvdW50Jyl9IDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAge2RhdHVtLmNvdW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPnt0KCdjdW11bGF0aXZlJyl9IDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAge2RhdHVtLmN1bXVsYXRpdmV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHZhbHVlQWNjZXNzb3I9e2RhdHVtID0+IGRhdHVtfVxuICAgICAgICAgICAgdGhlbWU9e2NoYXJ0VGhlbWV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2RhdGEubWFwKHNlcmllcyA9PiAoXG4gICAgICAgICAgICAgIDxCYXJTZXJpZXNcbiAgICAgICAgICAgICAgICBrZXk9e3Nlcmllcy5rZXl9XG4gICAgICAgICAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgICAgICAgICByYXdEYXRhPXtzZXJpZXMudmFsdWVzfVxuICAgICAgICAgICAgICAgIGZpbGw9e2NvbG9yU2NhbGUoc2VyaWVzLmtleSl9XG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk9e29wYWNpdHl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxYQXhpcyBsYWJlbD17eEF4aXNMYWJlbH0gLz5cbiAgICAgICAgICAgIDxZQXhpcyBsYWJlbD17eUF4aXNMYWJlbH0gLz5cbiAgICAgICAgICA8L0hpc3RvZ3JhbT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5DdXN0b21IaXN0b2dyYW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuQ3VzdG9tSGlzdG9ncmFtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKEN1c3RvbUhpc3RvZ3JhbSlgXG4gIC5zdXBlcnNldC1sZWdhY3ktY2hhcnQtaGlzdG9ncmFtIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5gO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFnSEE7QUFTQTs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0lBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2496\n')}}]);