webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/styles.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/styles.css ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n  background-repeat: no-repeat;\\n  padding: 0;\\n  margin: 0;\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n}\\n\\n.example-container {\\n  width: 320px;\\n  padding: 20px;\\n}\\n\\n.refresh {\\n  padding: 10px;\\n  position: absolute;\\n  background: rgba(0, 0, 0, 0.4);\\n  border-radius: 10px;\\n  width: 20px;\\n  height: 20px;\\n  top: 10px;\\n  right: 10px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  cursor: pointer;\\n}\\n\\n.content-placeholder {\\n  padding: 20px;\\n  transform-origin: top center;\\n}\\n\\nheader {\\n  background: #0055ff;\\n  border-radius: 10px;\\n  color: white;\\n  cursor: pointer;\\n  height: 40px;\\n  margin-bottom: 20px;\\n}\\n\\n.word {\\n  height: 18px;\\n  border-radius: 10px;\\n  display: inline-block;\\n  margin-bottom: 8px;\\n  margin-right: 8px;\\n  background: #0055ff;\\n  border-radius: 10px;\\n  display: inline-block;\\n}\\n\\n.paragraph {\\n  margin-bottom: 20px;\\n}\\n\\nsection {\\n  overflow: hidden;\\n}\\n\\n@media (max-width: 600px) {\\n  .content-placeholder {\\n    padding-left: 20px;\\n  }\\n\\n  .header .word {\\n    height: 30px;\\n  }\\n\\n  .word {\\n    height: 14px;\\n    margin-bottom: 5px;\\n    margin-right: 5px;\\n  }\\n\\n  .paragraph {\\n    margin-bottom: 10px;\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/styles.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,4BAA4B;EAC5B,UAAU;EACV,SAAS;EACT,aAAa;EACb,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,SAAS;EACT,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;IACE,mBAAmB;EACrB;AACF\",\"sourcesContent\":[\"body {\\n  background-repeat: no-repeat;\\n  padding: 0;\\n  margin: 0;\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n}\\n\\n.example-container {\\n  width: 320px;\\n  padding: 20px;\\n}\\n\\n.refresh {\\n  padding: 10px;\\n  position: absolute;\\n  background: rgba(0, 0, 0, 0.4);\\n  border-radius: 10px;\\n  width: 20px;\\n  height: 20px;\\n  top: 10px;\\n  right: 10px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  cursor: pointer;\\n}\\n\\n.content-placeholder {\\n  padding: 20px;\\n  transform-origin: top center;\\n}\\n\\nheader {\\n  background: #0055ff;\\n  border-radius: 10px;\\n  color: white;\\n  cursor: pointer;\\n  height: 40px;\\n  margin-bottom: 20px;\\n}\\n\\n.word {\\n  height: 18px;\\n  border-radius: 10px;\\n  display: inline-block;\\n  margin-bottom: 8px;\\n  margin-right: 8px;\\n  background: #0055ff;\\n  border-radius: 10px;\\n  display: inline-block;\\n}\\n\\n.paragraph {\\n  margin-bottom: 20px;\\n}\\n\\nsection {\\n  overflow: hidden;\\n}\\n\\n@media (max-width: 600px) {\\n  .content-placeholder {\\n    padding-left: 20px;\\n  }\\n\\n  .header .word {\\n    height: 30px;\\n  }\\n\\n  .word {\\n    height: 14px;\\n    margin-bottom: 5px;\\n    margin-right: 5px;\\n  }\\n\\n  .paragraph {\\n    margin-bottom: 10px;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlcy5jc3M/ZTY3MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUN6Riw4QkFBOEIsbUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsU0FBUyxpQ0FBaUMsZUFBZSxjQUFjLGtCQUFrQixnQ0FBZ0MsNEJBQTRCLEdBQUcsd0JBQXdCLGlCQUFpQixrQkFBa0IsR0FBRyxjQUFjLGtCQUFrQix1QkFBdUIsbUNBQW1DLHdCQUF3QixnQkFBZ0IsaUJBQWlCLGNBQWMsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixHQUFHLDBCQUEwQixrQkFBa0IsaUNBQWlDLEdBQUcsWUFBWSx3QkFBd0Isd0JBQXdCLGlCQUFpQixvQkFBb0IsaUJBQWlCLHdCQUF3QixHQUFHLFdBQVcsaUJBQWlCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLHNCQUFzQix3QkFBd0Isd0JBQXdCLDBCQUEwQixHQUFHLGdCQUFnQix3QkFBd0IsR0FBRyxhQUFhLHFCQUFxQixHQUFHLCtCQUErQiwwQkFBMEIseUJBQXlCLEtBQUsscUJBQXFCLG1CQUFtQixLQUFLLGFBQWEsbUJBQW1CLHlCQUF5Qix3QkFBd0IsS0FBSyxrQkFBa0IsMEJBQTBCLEtBQUssR0FBRyxTQUFTLGtGQUFrRixZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sK0JBQStCLGlDQUFpQyxlQUFlLGNBQWMsa0JBQWtCLGdDQUFnQyw0QkFBNEIsR0FBRyx3QkFBd0IsaUJBQWlCLGtCQUFrQixHQUFHLGNBQWMsa0JBQWtCLHVCQUF1QixtQ0FBbUMsd0JBQXdCLGdCQUFnQixpQkFBaUIsY0FBYyxnQkFBZ0Isa0JBQWtCLDRCQUE0Qix3QkFBd0Isb0JBQW9CLEdBQUcsMEJBQTBCLGtCQUFrQixpQ0FBaUMsR0FBRyxZQUFZLHdCQUF3Qix3QkFBd0IsaUJBQWlCLG9CQUFvQixpQkFBaUIsd0JBQXdCLEdBQUcsV0FBVyxpQkFBaUIsd0JBQXdCLDBCQUEwQix1QkFBdUIsc0JBQXNCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLEdBQUcsZ0JBQWdCLHdCQUF3QixHQUFHLGFBQWEscUJBQXFCLEdBQUcsK0JBQStCLDBCQUEwQix5QkFBeUIsS0FBSyxxQkFBcUIsbUJBQW1CLEtBQUssYUFBYSxtQkFBbUIseUJBQXlCLHdCQUF3QixLQUFLLGtCQUFrQiwwQkFBMEIsS0FBSyxHQUFHLHFCQUFxQjtBQUNsd0c7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlcy9zdHlsZXMuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmV4YW1wbGUtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5yZWZyZXNoIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250ZW50LXBsYWNlaG9sZGVyIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogIzAwNTVmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ud29yZCB7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBiYWNrZ3JvdW5kOiAjMDA1NWZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnBhcmFncmFwaCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmNvbnRlbnQtcGxhY2Vob2xkZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICB9XFxuXFxuICAuaGVhZGVyIC53b3JkIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcblxcbiAgLndvcmQge1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICB9XFxuXFxuICAucGFyYWdyYXBoIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZXhhbXBsZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDMyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnJlZnJlc2gge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQtcGxhY2Vob2xkZXIge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAjMDA1NWZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi53b3JkIHtcXG4gIGhlaWdodDogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQ6ICMwMDU1ZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4ucGFyYWdyYXBoIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuY29udGVudC1wbGFjZWhvbGRlciB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIH1cXG5cXG4gIC5oZWFkZXIgLndvcmQge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxuXFxuICAud29yZCB7XFxuICAgIGhlaWdodDogMTRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIH1cXG5cXG4gIC5wYXJhZ3JhcGgge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/styles.css\n");

/***/ })

})