"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/user/courses/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/user/courses/page.tsx":
/*!*************************************************!*\
  !*** ./src/app/dashboard/user/courses/page.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CourseDashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_student_course_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/student/course-list */ \"(app-pages-browser)/./src/components/student/course-list.tsx\");\n// \"use client\"\n\n\n// import { fetchAllCourses } from '@/utils/functions/fetchAllCourses';\n// import { useState, useEffect } from 'react';\nasync function CourseDashboard() {\n    // const [courses, setCourses] = useState([])\n    //  useEffect(() => {\n    //      fetchAllCourses().then((courses) => {\n    //          setCourses(courses)\n    //      })\n    //  }, [])\n    const { database } = await cosmosClient.databases.createIfNotExists({\n        id: \"hackpwd_lms\"\n    });\n    const { container } = await database.containers.createIfNotExists({\n        id: \"courses\"\n    });\n    const { resources } = await container.items.query({\n        query: \"SELECT * FROM courses\"\n    }).fetchAll();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"container mx-auto p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold mb-4\",\n                    children: \"Courses\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Christy\\\\projects\\\\studdie\\\\src\\\\app\\\\dashboard\\\\user\\\\courses\\\\page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                courses.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No Courses Found\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Christy\\\\projects\\\\studdie\\\\src\\\\app\\\\dashboard\\\\user\\\\courses\\\\page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 25\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_student_course_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    courses: courses\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Christy\\\\projects\\\\studdie\\\\src\\\\app\\\\dashboard\\\\user\\\\courses\\\\page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 25\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Christy\\\\projects\\\\studdie\\\\src\\\\app\\\\dashboard\\\\user\\\\courses\\\\page.tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Christy\\\\projects\\\\studdie\\\\src\\\\app\\\\dashboard\\\\user\\\\courses\\\\page.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_c = CourseDashboard;\nvar _c;\n$RefreshReg$(_c, \"CourseDashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3VzZXIvY291cnNlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxlQUFlOztBQUUyQztBQUMxRCx1RUFBdUU7QUFDdkUsK0NBQStDO0FBRWhDLGVBQWVDO0lBQzFCLDZDQUE2QztJQUU3QyxxQkFBcUI7SUFDckIsNkNBQTZDO0lBQzdDLCtCQUErQjtJQUMvQixVQUFVO0lBQ1YsVUFBVTtJQUVWLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUcsTUFBTUMsYUFBYUMsU0FBUyxDQUFDQyxpQkFBaUIsQ0FBQztRQUNoRUMsSUFBSTtJQUNSO0lBRUEsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBRyxNQUFNTCxTQUFTTSxVQUFVLENBQUNILGlCQUFpQixDQUFDO1FBQzlEQyxJQUFJO0lBQ1I7SUFFQSxNQUFNLEVBQUVHLFNBQVMsRUFBRSxHQUFHLE1BQU1GLFVBQVVHLEtBQUssQ0FBQ0MsS0FBSyxDQUFDO1FBQzlDQSxPQUFPO0lBQ1gsR0FBR0MsUUFBUTtJQUlYLHFCQUNJLDhEQUFDQztrQkFDRyw0RUFBQ0M7WUFBS0MsV0FBVTs7OEJBQ1osOERBQUNDO29CQUFHRCxXQUFVOzhCQUEwQjs7Ozs7O2dCQUVwQ0UsUUFBUUMsTUFBTSxLQUFLLGtCQUNmLDhEQUFDQzs4QkFBRTs7Ozs7eUNBQ0gsOERBQUNuQix1RUFBVUE7b0JBQUNpQixTQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0M7S0FuQzhCaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvdXNlci9jb3Vyc2VzL3BhZ2UudHN4P2JmY2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBDb3Vyc2VMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9zdHVkZW50L2NvdXJzZS1saXN0JztcclxuLy8gaW1wb3J0IHsgZmV0Y2hBbGxDb3Vyc2VzIH0gZnJvbSAnQC91dGlscy9mdW5jdGlvbnMvZmV0Y2hBbGxDb3Vyc2VzJztcclxuLy8gaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIENvdXJzZURhc2hib2FyZCgpIHtcclxuICAgIC8vIGNvbnN0IFtjb3Vyc2VzLCBzZXRDb3Vyc2VzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgXHJcbiAgICAvLyAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICAgZmV0Y2hBbGxDb3Vyc2VzKCkudGhlbigoY291cnNlcykgPT4ge1xyXG4gICAgLy8gICAgICAgICAgc2V0Q291cnNlcyhjb3Vyc2VzKVxyXG4gICAgLy8gICAgICB9KVxyXG4gICAgLy8gIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YWJhc2UgfSA9IGF3YWl0IGNvc21vc0NsaWVudC5kYXRhYmFzZXMuY3JlYXRlSWZOb3RFeGlzdHMoe1xyXG4gICAgICAgIGlkOiBcImhhY2twd2RfbG1zXCJcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IGF3YWl0IGRhdGFiYXNlLmNvbnRhaW5lcnMuY3JlYXRlSWZOb3RFeGlzdHMoe1xyXG4gICAgICAgIGlkOiBcImNvdXJzZXNcIlxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7IHJlc291cmNlcyB9ID0gYXdhaXQgY29udGFpbmVyLml0ZW1zLnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogXCJTRUxFQ1QgKiBGUk9NIGNvdXJzZXNcIlxyXG4gICAgfSkuZmV0Y2hBbGwoKTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC00XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIj5Db3Vyc2VzPC9oMT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3Vyc2VzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm8gQ291cnNlcyBGb3VuZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApIDogPENvdXJzZUxpc3QgY291cnNlcz17Y291cnNlc30gLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9tYWluPiAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiQ291cnNlTGlzdCIsIkNvdXJzZURhc2hib2FyZCIsImRhdGFiYXNlIiwiY29zbW9zQ2xpZW50IiwiZGF0YWJhc2VzIiwiY3JlYXRlSWZOb3RFeGlzdHMiLCJpZCIsImNvbnRhaW5lciIsImNvbnRhaW5lcnMiLCJyZXNvdXJjZXMiLCJpdGVtcyIsInF1ZXJ5IiwiZmV0Y2hBbGwiLCJkaXYiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJjb3Vyc2VzIiwibGVuZ3RoIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/user/courses/page.tsx\n"));

/***/ })

});