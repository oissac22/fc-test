"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/HeadHTML.tsx":
/*!*************************************!*\
  !*** ./src/components/HeadHTML.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeadHTML: function() { return /* binding */ HeadHTML; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction HeadHTML(param) {\n    let { title } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: [\n                    \"Usu\\xe1rios\",\n                    title ? \" - \".concat(title) : \"\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\components\\\\HeadHTML.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"description\",\n                content: \"Administrador de usu\\xe1rios\"\n            }, void 0, false, {\n                fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\components\\\\HeadHTML.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"viewport\",\n                content: \"width=device-width, initial-scale=1\"\n            }, void 0, false, {\n                fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\components\\\\HeadHTML.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"icon\",\n                href: \"/favicon.ico\"\n            }, void 0, false, {\n                fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\components\\\\HeadHTML.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\components\\\\HeadHTML.tsx\",\n        lineNumber: 9,\n        columnNumber: 12\n    }, this);\n}\n_c = HeadHTML;\nvar _c;\n$RefreshReg$(_c, \"HeadHTML\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkSFRNTC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRCO0FBTXJCLFNBQVNDLFNBQVMsS0FBd0I7UUFBeEIsRUFBRUMsS0FBSyxFQUFpQixHQUF4QjtJQUVyQixxQkFBTyw4REFBQ0Ysa0RBQUlBOzswQkFDUiw4REFBQ0U7O29CQUFNO29CQUNPQSxRQUFRLE1BQVksT0FBTkEsU0FBVTs7Ozs7OzswQkFFdEMsOERBQUNDO2dCQUFLQyxNQUFLO2dCQUFjQyxTQUFROzs7Ozs7MEJBQ2pDLDhEQUFDRjtnQkFBS0MsTUFBSztnQkFBV0MsU0FBUTs7Ozs7OzBCQUM5Qiw4REFBQ0M7Z0JBQUtDLEtBQUk7Z0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OztBQUU5QjtLQVZnQlAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZEhUTUwudHN4Pzc5YmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcblxyXG5pbnRlcmZhY2UgSUhlYWRIVE1MUHJvcHMge1xyXG4gICAgdGl0bGU/OnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGVhZEhUTUwoeyB0aXRsZSB9OklIZWFkSFRNTFByb3BzKVxyXG57XHJcbiAgICByZXR1cm4gPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICBVc3XDoXJpb3N7IHRpdGxlID8gYCAtICR7dGl0bGV9YCA6ICcnIH1cclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBZG1pbmlzdHJhZG9yIGRlIHVzdcOhcmlvc1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICA8L0hlYWQ+XHJcbn0iXSwibmFtZXMiOlsiSGVhZCIsIkhlYWRIVE1MIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/HeadHTML.tsx\n"));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\pages\\\\index.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\pages\\\\\\\\index.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_HeadHTML__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/HeadHTML */ \"./src/components/HeadHTML.tsx\");\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeadHTML__WEBPACK_IMPORTED_MODULE_2__.HeadHTML, {\n                title: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"\".concat(styles.main, \" \").concat((next_font_google_target_css_path_src_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.description,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Get started by editing\\xa0\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                        className: styles.code,\n                                        children: \"src/pages/index.tsx\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 16,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: [\n                                        \"By\",\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: \"/vercel.svg\",\n                                            alt: \"Vercel Logo\",\n                                            className: styles.vercelLogo,\n                                            width: 100,\n                                            height: 24,\n                                            priority: true\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 25,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.center,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            className: styles.logo,\n                            src: \"/next.svg\",\n                            alt: \"Next.js Logo\",\n                            width: 180,\n                            height: 37,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.grid,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: styles.card,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: [\n                                            \"Docs \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"->\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 20\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Find in-depth information about Next.js features and\\xa0API.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: styles.card,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: [\n                                            \"Learn \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"->\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Learn about Next.js in an interactive course with\\xa0quizzes!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: styles.card,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: [\n                                            \"Templates \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"->\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 25\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Discover and deploy boilerplate example Next.js\\xa0projects.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: styles.card,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: [\n                                            \"Deploy \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"->\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 22\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Instantly deploy your Next.js site to a shareable URL with\\xa0Vercel.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\jobs\\\\ferreira-costa-test\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUtNQTtBQUp3QjtBQUVrQjtBQUlqQyxTQUFTRztJQUN0QixxQkFDRTs7MEJBQ0UsOERBQUNELDBEQUFRQTtnQkFBQ0UsT0FBTTs7Ozs7OzBCQUNoQiw4REFBQ0M7Z0JBQUtDLFdBQVcsR0FBa0JOLE9BQWZPLE9BQU9GLElBQUksRUFBQyxLQUFtQixPQUFoQkwsZ0tBQWU7O2tDQUNoRCw4REFBQ1E7d0JBQUlGLFdBQVdDLE9BQU9FLFdBQVc7OzBDQUNoQyw4REFBQ0M7O29DQUFFO2tEQUVELDhEQUFDQzt3Q0FBS0wsV0FBV0MsT0FBT0ksSUFBSTtrREFBRTs7Ozs7Ozs7Ozs7OzBDQUVoQyw4REFBQ0g7MENBQ0MsNEVBQUNJO29DQUNDQyxNQUFLO29DQUNMQyxRQUFPO29DQUNQQyxLQUFJOzt3Q0FDTDt3Q0FDSTtzREFDSCw4REFBQ2QsbURBQUtBOzRDQUNKZSxLQUFJOzRDQUNKQyxLQUFJOzRDQUNKWCxXQUFXQyxPQUFPVyxVQUFVOzRDQUM1QkMsT0FBTzs0Q0FDUEMsUUFBUTs0Q0FDUkMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTWhCLDhEQUFDYjt3QkFBSUYsV0FBV0MsT0FBT2UsTUFBTTtrQ0FDM0IsNEVBQUNyQixtREFBS0E7NEJBQ0pLLFdBQVdDLE9BQU9nQixJQUFJOzRCQUN0QlAsS0FBSTs0QkFDSkMsS0FBSTs0QkFDSkUsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsUUFBUTs7Ozs7Ozs7Ozs7a0NBSVosOERBQUNiO3dCQUFJRixXQUFXQyxPQUFPaUIsSUFBSTs7MENBQ3pCLDhEQUFDWjtnQ0FDQ0MsTUFBSztnQ0FDTFAsV0FBV0MsT0FBT2tCLElBQUk7Z0NBQ3RCWCxRQUFPO2dDQUNQQyxLQUFJOztrREFFSiw4REFBQ1c7OzRDQUFHOzBEQUNHLDhEQUFDQzswREFBSzs7Ozs7Ozs7Ozs7O2tEQUViLDhEQUFDakI7a0RBQUU7Ozs7Ozs7Ozs7OzswQ0FLTCw4REFBQ0U7Z0NBQ0NDLE1BQUs7Z0NBQ0xQLFdBQVdDLE9BQU9rQixJQUFJO2dDQUN0QlgsUUFBTztnQ0FDUEMsS0FBSTs7a0RBRUosOERBQUNXOzs0Q0FBRzswREFDSSw4REFBQ0M7MERBQUs7Ozs7Ozs7Ozs7OztrREFFZCw4REFBQ2pCO2tEQUFFOzs7Ozs7Ozs7Ozs7MENBS0wsOERBQUNFO2dDQUNDQyxNQUFLO2dDQUNMUCxXQUFXQyxPQUFPa0IsSUFBSTtnQ0FDdEJYLFFBQU87Z0NBQ1BDLEtBQUk7O2tEQUVKLDhEQUFDVzs7NENBQUc7MERBQ1EsOERBQUNDOzBEQUFLOzs7Ozs7Ozs7Ozs7a0RBRWxCLDhEQUFDakI7a0RBQUU7Ozs7Ozs7Ozs7OzswQ0FLTCw4REFBQ0U7Z0NBQ0NDLE1BQUs7Z0NBQ0xQLFdBQVdDLE9BQU9rQixJQUFJO2dDQUN0QlgsUUFBTztnQ0FDUEMsS0FBSTs7a0RBRUosOERBQUNXOzs0Q0FBRzswREFDSyw4REFBQ0M7MERBQUs7Ozs7Ozs7Ozs7OztrREFFZiw4REFBQ2pCO2tEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0tBckd3QlAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHsgSGVhZEhUTUwgfSBmcm9tICdAL2NvbXBvbmVudHMvSGVhZEhUTUwnXG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRIVE1MIHRpdGxlPScnIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tYWlufSAke2ludGVyLmNsYXNzTmFtZX1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBHZXQgc3RhcnRlZCBieSBlZGl0aW5nJm5ic3A7XG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfT5zcmMvcGFnZXMvaW5kZXgudHN4PC9jb2RlPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBCeXsnICd9XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cIi92ZXJjZWwuc3ZnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJWZXJjZWwgTG9nb1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudmVyY2VsTG9nb31cbiAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9nb31cbiAgICAgICAgICAgIHNyYz1cIi9uZXh0LnN2Z1wiXG4gICAgICAgICAgICBhbHQ9XCJOZXh0LmpzIExvZ29cIlxuICAgICAgICAgICAgd2lkdGg9ezE4MH1cbiAgICAgICAgICAgIGhlaWdodD17Mzd9XG4gICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvZG9jcz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgRG9jcyA8c3Bhbj4tJmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgRmluZCBpbi1kZXB0aCBpbmZvcm1hdGlvbiBhYm91dCBOZXh0LmpzIGZlYXR1cmVzIGFuZCZuYnNwO0FQSS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9sZWFybj91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgTGVhcm4gPHNwYW4+LSZndDs8L3NwYW4+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIExlYXJuIGFib3V0IE5leHQuanMgaW4gYW4gaW50ZXJhY3RpdmUgY291cnNlIHdpdGgmbmJzcDtxdWl6emVzIVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL3RlbXBsYXRlcz9mcmFtZXdvcms9bmV4dC5qcyZ1dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgVGVtcGxhdGVzIDxzcGFuPi0mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBEaXNjb3ZlciBhbmQgZGVwbG95IGJvaWxlcnBsYXRlIGV4YW1wbGUgTmV4dC5qcyZuYnNwO3Byb2plY3RzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL25ldz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgRGVwbG95IDxzcGFuPi0mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgc2hhcmVhYmxlIFVSTFxuICAgICAgICAgICAgICB3aXRoJm5ic3A7VmVyY2VsLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkltYWdlIiwiSGVhZEhUTUwiLCJIb21lIiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwiZGl2IiwiZGVzY3JpcHRpb24iLCJwIiwiY29kZSIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwic3JjIiwiYWx0IiwidmVyY2VsTG9nbyIsIndpZHRoIiwiaGVpZ2h0IiwicHJpb3JpdHkiLCJjZW50ZXIiLCJsb2dvIiwiZ3JpZCIsImNhcmQiLCJoMiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});