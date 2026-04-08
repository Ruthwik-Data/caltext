(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/components/faq.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Faq",
    ()=>Faq
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.5.14/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.5.14/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next-intl@4.9.0/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const FAQ_KEYS = [
    "1",
    "2",
    "3",
    "4",
    "5"
];
function FaqItem(param) {
    let { q, a } = param;
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(!open),
                className: "flex w-full items-center justify-between py-5 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pr-4 text-[15px] font-medium text-primary",
                        children: q
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/faq.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "shrink-0 text-muted transition-transform duration-200 ".concat(open ? "rotate-45" : ""),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "12",
                                y1: "5",
                                x2: "12",
                                y2: "19"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/faq.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "5",
                                y1: "12",
                                x2: "19",
                                y2: "12"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/faq.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/faq.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/faq.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid transition-[grid-template-rows] duration-200 ".concat(open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pb-5 text-sm leading-relaxed text-secondary",
                        children: a
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/faq.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/faq.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/faq.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/faq.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(FaqItem, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = FaqItem;
function Faq() {
    _s1();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("Faq");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faqs",
        className: "border-t border-border py-20 sm:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-2xl px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-center font-heading text-3xl font-bold text-primary sm:text-4xl",
                    children: t("heading")
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/faq.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12",
                    children: FAQ_KEYS.map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqItem, {
                            q: t("q".concat(key)),
                            a: t("a".concat(key))
                        }, key, false, {
                            fileName: "[project]/apps/web/components/faq.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/faq.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/faq.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/faq.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s1(Faq, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c1 = Faq;
var _c, _c1;
__turbopack_context__.k.register(_c, "FaqItem");
__turbopack_context__.k.register(_c1, "Faq");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/imessage-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IMessageButton",
    ()=>IMessageButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@15.5.14/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.5.14/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next-intl@4.9.0/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
var _process_env_NEXT_PUBLIC_PHONE_NUMBER;
const PHONE_NUMBER = (_process_env_NEXT_PUBLIC_PHONE_NUMBER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PHONE_NUMBER) !== null && _process_env_NEXT_PUBLIC_PHONE_NUMBER !== void 0 ? _process_env_NEXT_PUBLIC_PHONE_NUMBER : "+1XXXXXXXXXX";
function IMessageButton(param) {
    let { className = "", short = false, compact = false, showIcon = true, edgeIcon = false } = param;
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("IMessageButton");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "sms:".concat(PHONE_NUMBER),
        className: "relative inline-flex items-center gap-3 border border-black/70 bg-[linear-gradient(180deg,#2c2c30_0%,#18181b_100%)] text-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-10px_24px_rgba(255,255,255,0.04),0_6px_16px_rgba(0,0,0,0.22)] transition-transform duration-150 hover:scale-[1.01] hover:bg-[linear-gradient(180deg,#303035_0%,#1c1c20_100%)] ".concat(compact ? "min-h-10 rounded-[14px] px-3.5 py-1.5" : "min-h-14 rounded-[18px] px-4.5 py-2", " ").concat(className),
        children: [
            showIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex shrink-0 items-center justify-center bg-[linear-gradient(180deg,#44e35e_0%,#27c93f_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_18px_rgba(52,199,89,0.35)] ".concat(compact ? "h-7.5 w-7.5 rounded-[9px]" : "h-8 w-8 rounded-[10px]", " ").concat(edgeIcon ? "absolute left-3 top-1/2 -translate-y-1/2" : ""),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: compact ? "16" : "17",
                    height: compact ? "16" : "17",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2C6.477 2 2 5.813 2 10.5c0 2.65 1.42 5.015 3.636 6.593-.19 1.14-.694 2.691-1.636 3.907 2.104-.174 3.856-1.024 4.964-1.794.97.19 1.986.294 3.036.294C17.523 19.5 22 15.687 22 10.5S17.523 2 12 2z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/imessage-button.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/imessage-button.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/imessage-button.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex min-w-0 items-center justify-center font-body font-semibold tracking-[-0.02em] text-white ".concat(showIcon ? compact ? "pr-0.5 text-[0.84rem]" : "pr-0.5 text-[0.94rem]" : compact ? "px-2.5 text-[0.84rem]" : "px-4 text-[0.94rem]", " ").concat(edgeIcon ? "w-full px-10" : ""),
                children: short ? t("shortLabel") : t("label")
            }, void 0, false, {
                fileName: "[project]/apps/web/components/imessage-button.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/imessage-button.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(IMessageButton, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = IMessageButton;
var _c;
__turbopack_context__.k.register(_c, "IMessageButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/bottom-cta.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomCta",
    ()=>BottomCta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.bun/next@15.5.14/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.5.14/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$qrcode$2e$react$40$4$2e$2$2e$0$2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/qrcode.react@4.2.0/node_modules/qrcode.react/lib/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next-intl@4.9.0/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$imessage$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/imessage-button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
var _process_env_NEXT_PUBLIC_PHONE_NUMBER;
const PHONE_NUMBER = (_process_env_NEXT_PUBLIC_PHONE_NUMBER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PHONE_NUMBER) !== null && _process_env_NEXT_PUBLIC_PHONE_NUMBER !== void 0 ? _process_env_NEXT_PUBLIC_PHONE_NUMBER : "+1XXXXXXXXXX";
function BottomCta() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("BottomCta");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "get-started",
        className: "py-20 sm:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-3xl px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-3xl border border-border bg-card px-8 py-14 text-center sm:px-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-heading text-3xl font-bold text-primary sm:text-4xl",
                        children: t("heading")
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/bottom-cta.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto mt-4 max-w-md text-secondary",
                        children: t("subtitle")
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/bottom-cta.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 flex flex-col items-center gap-10 sm:flex-row sm:justify-center sm:gap-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$imessage$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMessageButton"], {
                                        short: true
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/bottom-cta.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[12px] text-muted",
                                        children: t("buttonHint")
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/bottom-cta.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/bottom-cta.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden h-24 w-px bg-border sm:block"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/bottom-cta.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "block h-px w-24 bg-border sm:hidden"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/bottom-cta.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-border p-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$qrcode$2e$react$40$4$2e$2$2e$0$2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QRCodeSVG"], {
                                            value: "sms:".concat(PHONE_NUMBER),
                                            size: 120,
                                            level: "M",
                                            bgColor: "#ffffff",
                                            fgColor: "#111827"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/bottom-cta.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/bottom-cta.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[12px] text-muted",
                                        children: t("qrLabel")
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/bottom-cta.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/bottom-cta.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/bottom-cta.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/bottom-cta.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/components/bottom-cta.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/bottom-cta.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(BottomCta, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = BottomCta;
var _c;
__turbopack_context__.k.register(_c, "BottomCta");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/chat-demo-rail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatDemoRail",
    ()=>ChatDemoRail,
    "DEMO_STORIES",
    ()=>DEMO_STORIES
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.5.14/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.38.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next-intl@4.9.0/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CameraIcon(param) {
    let { className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 4l1.2 2H15a3 3 0 013 3v7a3 3 0 01-3 3H7a3 3 0 01-3-3V9a3 3 0 013-3h2z",
                stroke: "currentColor",
                strokeWidth: "1.8"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/chat-demo-rail.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "13",
                r: "3.2",
                stroke: "currentColor",
                strokeWidth: "1.8"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/chat-demo-rail.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/chat-demo-rail.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = CameraIcon;
function ChartIcon(param) {
    let { className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 19V10M12 19V5M19 19v-7",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/components/chat-demo-rail.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/chat-demo-rail.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c1 = ChartIcon;
function BellIcon(param) {
    let { className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 3a4 4 0 00-4 4v2.3c0 .8-.24 1.59-.7 2.24L6 13.5V15h12v-1.5l-1.3-1.96A4 4 0 0116 9.3V7a4 4 0 00-4-4zm-2 15a2 2 0 104 0h-4z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/apps/web/components/chat-demo-rail.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/chat-demo-rail.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c2 = BellIcon;
const DEMO_STORIES = [
    {
        id: "snapOrText",
        labelKey: "snapOrText.title",
        Icon: CameraIcon
    },
    {
        id: "smartReminders",
        labelKey: "smartReminders.title",
        Icon: BellIcon
    },
    {
        id: "dailySummaries",
        labelKey: "dailySummaries.title",
        Icon: ChartIcon
    }
];
function ChatDemoRail(param) {
    let { activeScenario, onSelect, className, size = "default" } = param;
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("Features");
    const isSmall = size === "sm";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: className,
        initial: {
            y: 18,
            opacity: 0,
            scale: 0.96,
            filter: "blur(10px)"
        },
        animate: {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
        },
        transition: {
            type: "spring",
            stiffness: 220,
            damping: 24,
            mass: 0.95
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-auto flex max-w-[calc(100vw-1.5rem)] items-center overflow-x-auto rounded-[22px] border border-black/5 bg-[rgba(247,247,247,0.98)] shadow-[0_10px_30px_rgba(17,24,39,0.08)] backdrop-blur-[18px] ".concat(isSmall ? "gap-0 p-0.5" : "gap-1 p-1 sm:gap-1 sm:p-1.5"),
            children: DEMO_STORIES.map((story)=>{
                const Icon = story.Icon;
                const isActive = activeScenario === story.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onSelect(story.id),
                    className: "flex shrink-0 items-center rounded-[18px] transition-colors ".concat(isSmall ? "gap-1.5 px-2 py-1 font-sans text-xs" : "gap-2 px-2.5 py-1.5 font-sans text-sm sm:px-3 sm:py-1.5", " ").concat(isActive ? "bg-black/4 text-primary" : "text-secondary hover:text-primary"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: isSmall ? "size-3" : "size-4"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/chat-demo-rail.tsx",
                            lineNumber: 142,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "whitespace-nowrap font-medium",
                            children: t(story.labelKey)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/chat-demo-rail.tsx",
                            lineNumber: 143,
                            columnNumber: 15
                        }, this)
                    ]
                }, story.id, true, {
                    fileName: "[project]/apps/web/components/chat-demo-rail.tsx",
                    lineNumber: 128,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/apps/web/components/chat-demo-rail.tsx",
            lineNumber: 118,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/chat-demo-rail.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(ChatDemoRail, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c3 = ChatDemoRail;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CameraIcon");
__turbopack_context__.k.register(_c1, "ChartIcon");
__turbopack_context__.k.register(_c2, "BellIcon");
__turbopack_context__.k.register(_c3, "ChatDemoRail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/animations/chat-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatIMessageAnimation",
    ()=>ChatIMessageAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.5.14/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.38.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.38.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$use$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/use-intl@4.9.0/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next-intl@4.9.0/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.5.14/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
const SF_FONT = "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif";
const SF_DISPLAY = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif";
const BRAND_SERIF_FONT = "var(--font-lora), Georgia, serif";
const LOCK_SCREEN_WALLPAPERS = [
    "https://cdn.caltext.ai/web/screensaver/1.jpg"
];
let cachedLockScreenWallpaper = null;
const HIDE_SCROLLBAR_CSS = '\n  [data-chat-scroll="true"]::-webkit-scrollbar {\n    display: none;\n  }\n\n  @keyframes cursorBlink {\n    0%, 100% { opacity: 1; }\n    50% { opacity: 0; }\n  }\n';
const DEMO_DATE = new Date("2026-04-08T09:41:00");
const NOTIFICATION_APPEAR_MS = 100;
const LOCK_SCREEN_MS = 1900;
const NOTIFICATION_TAP_MS = 260;
const END_HOLD_MS = 1800;
const CHAR_TYPE_MS = 35;
const KEYBOARD_HEIGHT = 342;
const KEYBOARD_HIDDEN_OFFSET = 4;
const COMPOSER_INSET = 114;
const CAMERA_PREVIEW_MS = 1800;
const CAMERA_FLASH_MS = 350;
const CAMERA_IMAGE_SRC = "https://cdn.caltext.ai/web/content/food-2.jpg";
const CAMERA_DRIFT_CSS = "\n@keyframes cameraDriftX {\n  0%   { transform: translateX(0px); }\n  13%  { transform: translateX(-1.8px); }\n  27%  { transform: translateX(0.6px); }\n  45%  { transform: translateX(-0.9px); }\n  62%  { transform: translateX(1.4px); }\n  78%  { transform: translateX(-0.4px); }\n  100% { transform: translateX(0px); }\n}\n@keyframes cameraDriftY {\n  0%   { transform: translateY(0px); }\n  17%  { transform: translateY(1.2px); }\n  35%  { transform: translateY(-0.7px); }\n  52%  { transform: translateY(1.6px); }\n  70%  { transform: translateY(-1.1px); }\n  85%  { transform: translateY(0.5px); }\n  100% { transform: translateY(0px); }\n}\n@keyframes cameraDriftRotate {\n  0%   { transform: rotate(0deg); }\n  25%  { transform: rotate(-0.3deg); }\n  50%  { transform: rotate(0.2deg); }\n  75%  { transform: rotate(-0.15deg); }\n  100% { transform: rotate(0deg); }\n}\n";
function formatShortTime(date) {
    return date.toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "2-digit"
    });
}
function formatDemoClock(locale, date) {
    return new Intl.DateTimeFormat(locale, {
        hour: "numeric",
        minute: "2-digit"
    }).format(date).replace(/\s?[APap][Mm]/, "");
}
function formatDemoDate(locale, date) {
    return new Intl.DateTimeFormat(locale, {
        weekday: "long",
        month: "long",
        day: "numeric"
    }).format(date);
}
function useClientNow() {
    _s();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useClientNow.useEffect": ()=>{
            const sync = {
                "useClientNow.useEffect.sync": ()=>{
                    setNow(new Date());
                }
            }["useClientNow.useEffect.sync"];
            sync();
            const intervalId = setInterval(sync, 60_000);
            return ({
                "useClientNow.useEffect": ()=>{
                    clearInterval(intervalId);
                }
            })["useClientNow.useEffect"];
        }
    }["useClientNow.useEffect"], []);
    return now;
}
_s(useClientNow, "z7BF03mi9TSA+mHelO7IwQHRwX4=");
function getRandomLockScreenWallpaper() {
    const index = Math.floor(Math.random() * LOCK_SCREEN_WALLPAPERS.length);
    var _LOCK_SCREEN_WALLPAPERS_index;
    return (_LOCK_SCREEN_WALLPAPERS_index = LOCK_SCREEN_WALLPAPERS[index]) !== null && _LOCK_SCREEN_WALLPAPERS_index !== void 0 ? _LOCK_SCREEN_WALLPAPERS_index : LOCK_SCREEN_WALLPAPERS[0];
}
function getStableLockScreenWallpaper() {
    if (cachedLockScreenWallpaper === null) {
        cachedLockScreenWallpaper = getRandomLockScreenWallpaper();
    }
    return cachedLockScreenWallpaper;
}
function getMealMoment(date) {
    const hour = date.getHours();
    if (hour < 11) {
        return "breakfast";
    }
    if (hour < 16) {
        return "lunch";
    }
    return "dinner";
}
function getReminderNotificationText(mealMoment, phoneT) {
    switch(mealMoment){
        case "breakfast":
            return phoneT("lockBodyReminder.breakfast");
        case "lunch":
            return phoneT("lockBodyReminder.lunch");
        case "dinner":
            return phoneT("lockBodyReminder.dinner");
    }
}
function getSnapIntroText(mealMoment, featuresT) {
    switch(mealMoment){
        case "breakfast":
            return featuresT("chat.snapOrText.bot0.breakfast");
        case "lunch":
            return featuresT("chat.snapOrText.bot0.lunch");
        case "dinner":
            return featuresT("chat.snapOrText.bot0.dinner");
    }
}
function getReminderPromptText(mealMoment, featuresT) {
    switch(mealMoment){
        case "breakfast":
            return featuresT("chat.smartReminders.bot1.breakfast");
        case "lunch":
            return featuresT("chat.smartReminders.bot1.lunch");
        case "dinner":
            return featuresT("chat.smartReminders.bot1.dinner");
    }
}
function AppIconSquare(param) {
    let { size = 38, borderRadius = 9 } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: size,
            height: size,
            borderRadius,
            background: "#000000",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 10px 22px rgba(0,0,0,0.24)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                color: "#FFFFFF",
                fontSize: Math.round(size * 0.4),
                fontWeight: 700,
                fontFamily: BRAND_SERIF_FONT,
                letterSpacing: -0.3
            },
            children: "C"
        }, void 0, false, {
            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
            lineNumber: 224,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c = AppIconSquare;
function ContactAvatar(param) {
    let { size = 56 } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center",
        style: {
            width: size,
            height: size,
            borderRadius: "50%",
            background: "radial-gradient(circle at 50% 24%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 28%, rgba(0,0,0,0) 52%), #000",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.14), 0 10px 24px rgba(0,0,0,0.28)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                color: "#FFFFFF",
                fontSize: Math.round(size * 0.34),
                fontWeight: 700,
                fontFamily: SF_FONT,
                letterSpacing: -0.4
            },
            children: "C"
        }, void 0, false, {
            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
            lineNumber: 253,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, this);
}
_c1 = ContactAvatar;
function HeaderBackIcon(param) {
    let { color } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "10",
        height: "17",
        viewBox: "0 0 10 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7.95 1.8L1.95 8.5L7.95 15.2",
            stroke: color,
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
            lineNumber: 278,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, this);
}
_c2 = HeaderBackIcon;
function HeaderVideoIcon(param) {
    let { color } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "19",
        height: "15",
        viewBox: "0 0 19 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.55 1.85H3.95C2.51 1.85 1.35 3.01 1.35 4.45V10.55C1.35 11.99 2.51 13.15 3.95 13.15H11.55C12.99 13.15 14.15 11.99 14.15 10.55V4.45C14.15 3.01 12.99 1.85 11.55 1.85Z",
                stroke: color,
                strokeWidth: "1.9",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.15 5.6L17.45 3.9V11.1L14.15 9.4V5.6Z",
                stroke: color,
                strokeWidth: "1.9",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 291,
        columnNumber: 5
    }, this);
}
_c3 = HeaderVideoIcon;
function HeaderDisclosureIcon(param) {
    let { color } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "8",
        height: "13",
        viewBox: "0 0 8 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M2 1.5L6 6.5L2 11.5",
            stroke: color,
            strokeWidth: "1.7",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
            lineNumber: 327,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 319,
        columnNumber: 5
    }, this);
}
_c4 = HeaderDisclosureIcon;
function ComposerPlusIcon(param) {
    let { color } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7.5 3.2V11.8M3.2 7.5H11.8",
            stroke: color,
            strokeWidth: "1.8",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
            lineNumber: 348,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 340,
        columnNumber: 5
    }, this);
}
_c5 = ComposerPlusIcon;
function ComposerMicIcon(param) {
    let { color } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "12",
        height: "16",
        viewBox: "0 0 12 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 10.2C7.546 10.2 8.8 8.946 8.8 7.4V4.2C8.8 2.654 7.546 1.4 6 1.4C4.454 1.4 3.2 2.654 3.2 4.2V7.4C3.2 8.946 4.454 10.2 6 10.2Z",
                stroke: color,
                strokeWidth: "1.45"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.4 7.2V7.45C10.4 9.88 8.43 11.85 6 11.85C3.57 11.85 1.6 9.88 1.6 7.45V7.2",
                stroke: color,
                strokeWidth: "1.45",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 11.85V15M3.6 15H8.4",
                stroke: color,
                strokeWidth: "1.45",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 379,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 360,
        columnNumber: 5
    }, this);
}
_c6 = ComposerMicIcon;
function ComposerSendIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "26",
        height: "26",
        viewBox: "0 0 26 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "13",
                cy: "13",
                r: "13",
                fill: "#007AFF"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 399,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13 18.5V8.5M13 8.5L8.5 12.5M13 8.5L17.5 12.5",
                stroke: "#FFFFFF",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 391,
        columnNumber: 5
    }, this);
}
_c7 = ComposerSendIcon;
function LockFlashlightIcon(param) {
    let { color } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "32",
        viewBox: "0 0 14 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            opacity: "0.9",
            d: "M0 3.17871V2.79932C0 0.933105 0.912598 0 2.73779 0H10.6333C12.4585 0 13.3711 0.933105 13.3711 2.79932V3.17871H0ZM5.44482 31.6846C4.54932 31.6846 3.86914 31.4453 3.4043 30.9668C2.93945 30.4883 2.70703 29.791 2.70703 28.875V13.5044C2.70703 12.7866 2.63184 12.1782 2.48145 11.6792C2.33105 11.1733 2.12939 10.7222 1.87646 10.3257L1.10742 9.14648C0.786133 8.63379 0.519531 8.13135 0.307617 7.63916C0.102539 7.14014 0 6.58643 0 5.97803V4.92188H13.3711V5.97803C13.3711 6.58643 13.2651 7.14014 13.0532 7.63916C12.8481 8.13135 12.5815 8.63379 12.2534 9.14648L11.4946 10.3257C11.2417 10.7222 11.04 11.1733 10.8896 11.6792C10.7393 12.1782 10.6641 12.7866 10.6641 13.5044V28.875C10.6641 29.791 10.4282 30.4883 9.95654 30.9668C9.4917 31.4453 8.81494 31.6846 7.92627 31.6846H5.44482ZM4.25537 14.6733V18.8877C4.25537 19.5713 4.48779 20.1455 4.95264 20.6104C5.42432 21.0752 6.00537 21.3076 6.6958 21.3076C7.14697 21.3076 7.55371 21.2017 7.91602 20.9897C8.28516 20.7778 8.57568 20.4907 8.7876 20.1284C9.00635 19.7593 9.11572 19.3457 9.11572 18.8877V14.6733C9.11572 14.2222 9.00635 13.8154 8.7876 13.4531C8.57568 13.084 8.28516 12.7935 7.91602 12.5815C7.55371 12.3628 7.14697 12.2534 6.6958 12.2534C6.00537 12.2534 5.42432 12.4893 4.95264 12.9609C4.48779 13.4258 4.25537 13.9966 4.25537 14.6733ZM6.6958 20.4565C6.24463 20.4565 5.86865 20.3096 5.56787 20.0156C5.26709 19.7148 5.1167 19.3389 5.1167 18.8877C5.1167 18.457 5.26709 18.0913 5.56787 17.7905C5.87549 17.4829 6.25146 17.3291 6.6958 17.3291C7.12646 17.3291 7.49561 17.4829 7.80322 17.7905C8.11084 18.0913 8.26465 18.457 8.26465 18.8877C8.26465 19.3389 8.11426 19.7148 7.81348 20.0156C7.5127 20.3096 7.14014 20.4565 6.6958 20.4565Z",
            fill: color,
            style: {
                mixBlendMode: "plus-lighter"
            }
        }, void 0, false, {
            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
            lineNumber: 421,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 413,
        columnNumber: 5
    }, this);
}
_c8 = LockFlashlightIcon;
function LockCameraIcon(param) {
    let { color } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "33",
        height: "26",
        viewBox: "0 0 33 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            opacity: "0.9",
            d: "M27.3984 10.582C27.8906 10.582 28.3076 10.4111 28.6494 10.0693C28.998 9.7207 29.1724 9.30029 29.1724 8.80811C29.1724 8.32959 28.998 7.91602 28.6494 7.56738C28.3008 7.21875 27.8838 7.04443 27.3984 7.04443C26.9131 7.04443 26.4961 7.21875 26.1475 7.56738C25.7988 7.91602 25.6245 8.32959 25.6245 8.80811C25.6245 9.30029 25.7988 9.7207 26.1475 10.0693C26.4961 10.4111 26.9131 10.582 27.3984 10.582ZM4.51172 25.8296C3.04883 25.8296 1.93115 25.4468 1.15869 24.6812C0.38623 23.9155 0 22.8047 0 21.3486V7.42383C0 5.97461 0.38623 4.86719 1.15869 4.10156C1.93115 3.33594 3.04883 2.95312 4.51172 2.95312H7.71094C8.05273 2.95312 8.33301 2.93262 8.55176 2.8916C8.77734 2.84375 8.98242 2.76172 9.16699 2.64551C9.35156 2.52246 9.55664 2.34473 9.78223 2.1123L10.8281 1.0459C11.0742 0.799805 11.3237 0.601562 11.5767 0.451172C11.8364 0.300781 12.1235 0.187988 12.438 0.112793C12.7593 0.0375977 13.1387 0 13.5762 0H19.1748C19.6123 0 19.9917 0.0375977 20.313 0.112793C20.6343 0.187988 20.9214 0.300781 21.1743 0.451172C21.4272 0.601562 21.6733 0.799805 21.9126 1.0459L22.9585 2.1123C23.1909 2.34473 23.3994 2.52246 23.584 2.64551C23.7686 2.76172 23.9702 2.84375 24.189 2.8916C24.4146 2.93262 24.6982 2.95312 25.04 2.95312H28.3213C29.7773 2.95312 30.8916 3.33594 31.6641 4.10156C32.4365 4.86719 32.8228 5.97461 32.8228 7.42383V21.3486C32.8228 22.8047 32.4365 23.9155 31.6641 24.6812C30.8916 25.4468 29.7773 25.8296 28.3213 25.8296H4.51172ZM16.4165 21.4819C17.394 21.4819 18.3101 21.2974 19.1646 20.9282C20.019 20.5659 20.7676 20.0635 21.4102 19.4209C22.0596 18.7715 22.5654 18.0195 22.9277 17.165C23.2969 16.3037 23.4814 15.3809 23.4814 14.3965C23.4814 13.4121 23.3003 12.4927 22.938 11.6382C22.5757 10.7837 22.0698 10.0317 21.4204 9.38232C20.7778 8.73291 20.0259 8.22705 19.1646 7.86475C18.3101 7.49561 17.394 7.31104 16.4165 7.31104C15.439 7.31104 14.5195 7.49561 13.6582 7.86475C12.8037 8.22705 12.0518 8.73291 11.4023 9.38232C10.7598 10.0317 10.2573 10.7837 9.89502 11.6382C9.53271 12.4927 9.35156 13.4121 9.35156 14.3965C9.35156 15.3809 9.53271 16.3037 9.89502 17.165C10.2573 18.0195 10.7598 18.7715 11.4023 19.4209C12.0518 20.0635 12.8037 20.5659 13.6582 20.9282C14.5195 21.2974 15.439 21.4819 16.4165 21.4819ZM16.4165 18.7954C15.8081 18.7954 15.2373 18.6826 14.7041 18.457C14.1777 18.2246 13.7129 17.9102 13.3096 17.5137C12.9131 17.1104 12.5986 16.6421 12.3662 16.1089C12.1406 15.5757 12.0278 15.0049 12.0278 14.3965C12.0278 13.7881 12.1406 13.2173 12.3662 12.6841C12.5986 12.1509 12.9131 11.6826 13.3096 11.2793C13.7129 10.876 14.1777 10.5615 14.7041 10.3359C15.2373 10.1104 15.8081 9.99756 16.4165 9.99756C17.0249 9.99756 17.5923 10.1104 18.1187 10.3359C18.6519 10.5615 19.1167 10.876 19.5132 11.2793C19.9165 11.6826 20.231 12.1509 20.4565 12.6841C20.6821 13.2173 20.7949 13.7881 20.7949 14.3965C20.7949 15.0049 20.6821 15.5757 20.4565 16.1089C20.231 16.6421 19.9165 17.1104 19.5132 17.5137C19.1167 17.9102 18.6519 18.2246 18.1187 18.457C17.5923 18.6826 17.0249 18.7954 16.4165 18.7954Z",
            fill: color,
            style: {
                mixBlendMode: "plus-lighter"
            }
        }, void 0, false, {
            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
            lineNumber: 441,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 433,
        columnNumber: 5
    }, this);
}
_c9 = LockCameraIcon;
function LiquidGlass(param) {
    let { children, borderRadius, padding, className, style } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            position: "relative",
            overflow: "hidden",
            borderRadius,
            padding,
            background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.025))",
            backdropFilter: "blur(14px) saturate(126%)",
            WebkitBackdropFilter: "blur(14px) saturate(126%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(255,255,255,0.015), 0 6px 16px rgba(0,0,0,0.08)",
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(115deg, transparent 12%, rgba(255,255,255,0.12) 28%, rgba(255,255,255,0.04) 40%, transparent 58%)",
                    mixBlendMode: "screen",
                    opacity: 0.34,
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 481,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                style: {
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle at 20% 0%, rgba(255,255,255,0.1), transparent 34%), radial-gradient(circle at 80% 100%, rgba(255,255,255,0.035), transparent 28%)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 493,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                style: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit",
                    padding: "0.5px",
                    background: "linear-gradient(180deg, rgba(255,255,255,0.32), rgba(255,255,255,0.08))",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    pointerEvents: "none",
                    opacity: 0.9
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 503,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "contents"
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 520,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 465,
        columnNumber: 5
    }, this);
}
_c10 = LiquidGlass;
function StatusBar(param) {
    let { dark } = param;
    _s1();
    const now = useClientNow();
    const color = dark ? "#000" : "#fff";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-0 left-0 right-0 flex items-center justify-between",
        style: {
            height: 54,
            padding: "14px 28px 0",
            zIndex: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color,
                    fontSize: 17,
                    fontWeight: 600,
                    fontFamily: SF_FONT,
                    letterSpacing: 0.2
                },
                children: now ? formatShortTime(now) : "9:41"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 534,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "78",
                height: "14",
                viewBox: "0 0 78 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "0",
                        y: "9",
                        width: "3.2",
                        height: "4.5",
                        rx: "0.8",
                        fill: color
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 553,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "4.6",
                        y: "6.5",
                        width: "3.2",
                        height: "7",
                        rx: "0.8",
                        fill: color
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 554,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "9.2",
                        y: "4",
                        width: "3.2",
                        height: "9.5",
                        rx: "0.8",
                        fill: color
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 555,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "13.8",
                        y: "0.5",
                        width: "3.2",
                        height: "13",
                        rx: "0.8",
                        fill: color
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 556,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: "translate(22, 0)",
                        fill: color,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7.5 2.3C9.7 2.3 11.8 3.1 13.4 4.6L14.4 3.5C12.5 1.7 10 0.7 7.5 0.7C5 0.7 2.5 1.7 0.6 3.5L1.6 4.6C3.2 3.1 5.3 2.3 7.5 2.3ZM7.5 6.5C8.7 6.5 9.8 7 10.7 7.8L11.7 6.6C10.5 5.5 9 4.9 7.5 4.9C6 4.9 4.5 5.5 3.3 6.6L4.3 7.8C5.2 7 6.3 6.5 7.5 6.5ZM9.3 10.2L7.5 12.3L5.7 10.2C6.2 9.7 6.8 9.3 7.5 9.3C8.2 9.3 8.8 9.7 9.3 10.2Z"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                            lineNumber: 558,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 557,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: "translate(50, 1)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "0",
                                y: "0",
                                width: "24",
                                height: "12",
                                rx: "3.8",
                                stroke: color,
                                strokeOpacity: "0.35",
                                fill: "none"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 565,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M25.5 4.3V8.4C26.2 8.1 26.6 7.4 26.6 6.4C26.6 5.4 26.2 4.6 25.5 4.3Z",
                                fill: color,
                                opacity: "0.4"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 575,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "1.5",
                                y: "1.5",
                                width: "21",
                                height: "9",
                                rx: "2.5",
                                fill: color
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 580,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 564,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 546,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 530,
        columnNumber: 5
    }, this);
}
_s1(StatusBar, "d73ZrzIvtV2QMdc8P+wFxqs6Jec=", false, function() {
    return [
        useClientNow
    ];
});
_c11 = StatusBar;
function HomeIndicator(param) {
    let { dark } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-0 left-0 right-0 flex justify-center",
        style: {
            paddingBottom: 8,
            zIndex: 20
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: 134,
                height: 5,
                borderRadius: 2.5,
                backgroundColor: dark ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.5)"
            }
        }, void 0, false, {
            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
            lineNumber: 593,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 589,
        columnNumber: 5
    }, this);
}
_c12 = HomeIndicator;
function IOSCameraView(param) {
    let { flash } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            inset: 0,
            backgroundColor: "#000",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: CAMERA_DRIFT_CSS
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: -10,
                    animation: "cameraDriftX 2.8s ease-in-out infinite"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "100%",
                        height: "100%",
                        animation: "cameraDriftY 3.3s ease-in-out infinite"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "100%",
                            height: "100%",
                            backgroundImage: "url(".concat(CAMERA_IMAGE_SRC, ")"),
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "brightness(0.9)",
                            transform: "scale(1.05)",
                            animation: "cameraDriftRotate 4s ease-in-out infinite"
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 631,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                    lineNumber: 624,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 617,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBar, {
                dark: false
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 646,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 54,
                    left: 0,
                    right: 0,
                    height: 44,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 20px",
                    zIndex: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M13 3L10.72 5.28C10.38 5.62 10.54 6.18 11.01 6.3L11.53 6.44C8.98 7.18 7 9.42 7 12.16V13H9V12.16C9 10.08 10.68 8.18 13 7.84V9.5C13 9.89 13.47 10.08 13.74 9.81L17.15 6.39C17.34 6.21 17.34 5.9 17.15 5.72L13.74 2.3C13.47 2.03 13 2.22 13 2.61V3Z",
                                fill: "rgba(255,255,255,0.85)"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 669,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M17 12V12.84C17 14.92 15.32 16.82 13 17.16V15.5C13 15.11 12.53 14.92 12.26 15.19L8.85 18.61C8.66 18.79 8.66 19.1 8.85 19.28L12.26 22.7C12.53 22.97 13 22.78 13 22.39V21C15.02 20.72 16.62 19.53 17.28 17.72L17.47 17.56C17.53 17.5 18 17.18 18 16.84V12H17Z",
                                fill: "rgba(255,255,255,0.85)"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 673,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 662,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M7 2V13H10V16H13V13H21L17 8L21 3H13V2H7ZM9 4H11V5H17.5L15 8L17.5 11H11V10H9V4Z",
                            fill: "rgba(255,255,255,0.85)"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                            lineNumber: 685,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 678,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 648,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 140,
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 60%, transparent)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingTop: 12,
                    zIndex: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            marginBottom: 16,
                            fontFamily: SF_FONT,
                            fontSize: 13,
                            fontWeight: 500
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "rgba(255,255,255,0.5)"
                                },
                                children: "Video"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 719,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#FFD60A",
                                    fontWeight: 600
                                },
                                children: "Photo"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 720,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "rgba(255,255,255,0.5)"
                                },
                                children: "Portrait"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 721,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 709,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            paddingLeft: 40,
                            paddingRight: 40
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 38,
                                    height: 38,
                                    borderRadius: 8,
                                    border: "2px solid rgba(255,255,255,0.4)",
                                    overflow: "hidden",
                                    flexShrink: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "100%",
                                        height: "100%",
                                        backgroundImage: "url(".concat(CAMERA_IMAGE_SRC, ")"),
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                    lineNumber: 744,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 734,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    display: "flex",
                                    justifyContent: "center"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 68,
                                        height: 68,
                                        borderRadius: "50%",
                                        border: "4px solid rgba(255,255,255,0.9)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 58,
                                            height: 58,
                                            borderRadius: "50%",
                                            backgroundColor: "rgba(255,255,255,0.95)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                        lineNumber: 773,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                    lineNumber: 762,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 755,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 38,
                                    height: 38,
                                    flexShrink: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "32",
                                    height: "32",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    style: {
                                        margin: "3px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M20 5H16.83L15 3H9L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM12 18C9.24 18 7 15.76 7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 15.76 14.76 18 12 18Z",
                                        fill: "rgba(255,255,255,0.85)"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                        lineNumber: 793,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                    lineNumber: 785,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 784,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 724,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 692,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: flash ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 1
                    },
                    animate: {
                        opacity: 0
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3,
                        ease: "easeOut"
                    },
                    style: {
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "#fff",
                        zIndex: 50,
                        pointerEvents: "none"
                    }
                }, "camera-flash", false, {
                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                    lineNumber: 804,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 802,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeIndicator, {}, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 821,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 607,
        columnNumber: 5
    }, this);
}
_c13 = IOSCameraView;
function NotificationBanner(param) {
    let { title, body, locale, tapped } = param;
    const nowLabel = locale === "sv" ? "nu" : "now";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            y: 300,
            opacity: 0,
            scale: 0.94,
            filter: "blur(10px)"
        },
        animate: tapped ? {
            y: -96,
            opacity: 0,
            scale: 0.96,
            filter: "blur(6px)"
        } : {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
        },
        transition: tapped ? {
            duration: 0.25,
            ease: "easeIn"
        } : {
            type: "spring",
            damping: 26,
            stiffness: 220,
            mass: 1.05
        },
        className: "absolute",
        style: {
            bottom: 96,
            left: 16,
            right: 16,
            zIndex: 30
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": "true",
                initial: {
                    opacity: 0,
                    y: 110,
                    scale: 0.98
                },
                animate: tapped ? {
                    opacity: 0,
                    y: 44,
                    scale: 0.98
                } : {
                    opacity: 0.22,
                    y: 340,
                    scale: 1
                },
                transition: {
                    type: "spring",
                    damping: 28,
                    stiffness: 210
                },
                className: "absolute left-0 right-0",
                style: {
                    height: 64,
                    borderRadius: 24,
                    background: "linear-gradient(180deg, rgba(255,255,255,0.11), rgba(255,255,255,0.06))",
                    backdropFilter: "blur(28px)",
                    WebkitBackdropFilter: "blur(28px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), 0 20px 40px rgba(0,0,0,0.12)"
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 860,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": "true",
                initial: {
                    opacity: 0,
                    y: 165,
                    scale: 0.96
                },
                animate: tapped ? {
                    opacity: 0,
                    y: 72,
                    scale: 0.96
                } : {
                    opacity: 0.14,
                    y: 256,
                    scale: 1
                },
                transition: {
                    type: "spring",
                    damping: 28,
                    stiffness: 210
                },
                className: "absolute left-5 right-5",
                style: {
                    height: 64,
                    borderRadius: 24,
                    background: "linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                    backdropFilter: "blur(28px)",
                    WebkitBackdropFilter: "blur(28px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.14), 0 18px 34px rgba(0,0,0,0.1)"
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 882,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-start gap-3",
                style: {
                    background: "linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.1))",
                    backdropFilter: "blur(40px)",
                    WebkitBackdropFilter: "blur(40px)",
                    borderRadius: 24,
                    padding: "12px 14px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), 0 8px 32px rgba(0,0,0,0.15)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppIconSquare, {}, void 0, false, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 919,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 13.5,
                                            fontWeight: 600,
                                            color: "rgba(255,255,255,0.9)",
                                            fontFamily: SF_FONT
                                        },
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                        lineNumber: 923,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 12,
                                            color: "rgba(255,255,255,0.45)",
                                            fontFamily: SF_FONT
                                        },
                                        children: nowLabel
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                        lineNumber: 933,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 922,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5",
                                style: {
                                    fontSize: 13.5,
                                    lineHeight: 1.35,
                                    color: "rgba(255,255,255,0.75)",
                                    fontFamily: SF_FONT,
                                    display: "-webkit-box",
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden"
                                },
                                children: body
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 943,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 921,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 905,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 840,
        columnNumber: 5
    }, this);
}
_c14 = NotificationBanner;
function LockScreen(param) {
    let { locale, currentDate } = param;
    _s2();
    const dateStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LockScreen.useMemo[dateStr]": ()=>formatDemoDate(locale, currentDate)
    }["LockScreen.useMemo[dateStr]"], [
        currentDate,
        locale
    ]);
    const timeStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LockScreen.useMemo[timeStr]": ()=>formatDemoClock(locale, currentDate)
    }["LockScreen.useMemo[timeStr]"], [
        currentDate,
        locale
    ]);
    const [wallpaper] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getStableLockScreenWallpaper);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute inset-0 flex flex-col items-center",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.5,
            ease: "easeOut"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    backgroundImage: "url(".concat(wallpaper, ")"),
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 982,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: "rgba(255,255,255,0.02)",
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 991,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBar, {}, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 996,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeIndicator, {}, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 997,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 72,
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 21,
                            fontWeight: 600,
                            color: "rgba(255,255,255,0.94)",
                            fontFamily: SF_FONT,
                            letterSpacing: -0.35,
                            marginBottom: 10,
                            textShadow: "0 1px 10px rgba(255,255,255,0.08)"
                        },
                        children: dateStr
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 1008,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 148,
                            fontWeight: 560,
                            fontFamily: SF_DISPLAY,
                            lineHeight: 0.88,
                            letterSpacing: -6,
                            color: "rgba(255,255,255,0.96)",
                            textShadow: "0 1px 20px rgba(255,255,255,0.08)"
                        },
                        children: timeStr
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 1022,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 999,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute flex items-center justify-between",
                style: {
                    bottom: 24,
                    left: 48,
                    right: 48,
                    zIndex: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiquidGlass, {
                        borderRadius: "50%",
                        className: "flex items-center justify-center",
                        style: {
                            width: 48,
                            height: 48
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            style: {
                                transform: "scale(0.64)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LockFlashlightIcon, {
                                color: "rgba(255,255,255,0.94)"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 1056,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                            lineNumber: 1052,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 1047,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiquidGlass, {
                        borderRadius: "50%",
                        className: "flex items-center justify-center",
                        style: {
                            width: 48,
                            height: 48
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            style: {
                                transform: "scale(0.48)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LockCameraIcon, {
                                color: "rgba(255,255,255,0.94)"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 1069,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                            lineNumber: 1065,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 1060,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 1038,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 976,
        columnNumber: 5
    }, this);
}
_s2(LockScreen, "+On9Fumcx/zkGq7bGho7hCJ5n0M=");
_c15 = LockScreen;
function MessageBubble(param) {
    let { message } = param;
    const isUser = message.sender === "user";
    const isImageOnly = Boolean(message.imageSrc) && !message.text;
    const bubbleBackground = isUser ? "#007AFF" : "#2C2C2E";
    const bubbleTextColor = "#FFFFFF";
    var _message_imageAlt;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex ".concat(isUser ? "justify-end" : "justify-start"),
        style: {
            padding: "2px 8px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: isImageOnly ? "80%" : "84%"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "relative",
                        overflow: "visible",
                        padding: isImageOnly ? 0 : "10px 15px",
                        fontSize: 17,
                        lineHeight: 1.22,
                        color: bubbleTextColor,
                        backgroundColor: isImageOnly ? "transparent" : bubbleBackground,
                        borderRadius: isImageOnly ? 0 : isUser ? "20px 20px 6px 20px" : "20px 20px 20px 6px",
                        fontFamily: SF_FONT,
                        whiteSpace: "pre-line"
                    },
                    children: [
                        message.imageSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                borderRadius: 18,
                                overflow: "hidden",
                                background: "#0E0E10",
                                boxShadow: "0 10px 24px rgba(0,0,0,0.22)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: message.imageSrc,
                                alt: (_message_imageAlt = message.imageAlt) !== null && _message_imageAlt !== void 0 ? _message_imageAlt : "",
                                style: {
                                    display: "block",
                                    width: "100%",
                                    height: 260,
                                    objectFit: "cover",
                                    objectPosition: "center"
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 1116,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                            lineNumber: 1108,
                            columnNumber: 13
                        }, this) : null,
                        message.text ? message.text : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                    lineNumber: 1089,
                    columnNumber: 9
                }, this),
                isUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: 16,
                        marginTop: 5,
                        paddingRight: 2,
                        position: "relative",
                        overflow: "hidden"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        initial: false,
                        children: message.statusLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: -3,
                                filter: "blur(4px)"
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)"
                            },
                            exit: {
                                opacity: 0,
                                y: -2,
                                filter: "blur(3px)"
                            },
                            transition: {
                                duration: 0.22,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            style: {
                                position: "absolute",
                                top: 0,
                                right: 4,
                                textAlign: "right",
                                fontSize: 12,
                                lineHeight: 1,
                                fontWeight: 500,
                                color: "rgba(255,255,255,0.38)",
                                fontFamily: SF_FONT,
                                letterSpacing: -0.1,
                                willChange: "transform, opacity, filter"
                            },
                            children: message.statusLabel
                        }, "receipt-".concat(message.id), false, {
                            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                            lineNumber: 1143,
                            columnNumber: 17
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 1141,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                    lineNumber: 1132,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
            lineNumber: 1088,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 1084,
        columnNumber: 5
    }, this);
}
_c16 = MessageBubble;
function TypingIndicator() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start",
        style: {
            padding: "4px 16px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            style: {
                background: "#2C2C2E",
                borderRadius: "18px 18px 18px 4px",
                padding: "10px 14px",
                height: 36
            },
            children: [
                0,
                1,
                2
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        backgroundColor: "#A1A1AA"
                    },
                    animate: {
                        y: [
                            0,
                            -4,
                            0
                        ]
                    },
                    transition: {
                        duration: 0.6,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.15,
                        ease: "easeInOut"
                    }
                }, i, false, {
                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                    lineNumber: 1190,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
            lineNumber: 1180,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 1179,
        columnNumber: 5
    }, this);
}
_c17 = TypingIndicator;
function IOSKeyboard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://cdn.midday.ai/ios-keyboard-dark-v1.svg",
        alt: "",
        draggable: false,
        style: {
            width: "100%",
            display: "block"
        }
    }, void 0, false, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 1214,
        columnNumber: 5
    }, this);
}
_c18 = IOSKeyboard;
function ChatView(param) {
    let { locale, title, messages, composerText, isTyping, showKeyboard } = param;
    _s3();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [typedLength, setTypedLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const composerTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(composerText);
    const visibleBottomInset = showKeyboard ? KEYBOARD_HEIGHT + 52 : COMPOSER_INSET;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatView.useEffect": ()=>{
            if (composerText !== composerTextRef.current) {
                composerTextRef.current = composerText;
                setTypedLength(0);
            }
            if (!composerText) {
                return;
            }
            if (typedLength >= composerText.length) {
                return;
            }
            const timer = setTimeout({
                "ChatView.useEffect.timer": ()=>{
                    setTypedLength({
                        "ChatView.useEffect.timer": (prev)=>prev + 1
                    }["ChatView.useEffect.timer"]);
                }
            }["ChatView.useEffect.timer"], CHAR_TYPE_MS);
            return ({
                "ChatView.useEffect": ()=>clearTimeout(timer)
            })["ChatView.useEffect"];
        }
    }["ChatView.useEffect"], [
        composerText,
        typedLength
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatView.useEffect": ()=>{
            const el = scrollRef.current;
            if (!el) return;
            el.scrollTop = el.scrollHeight;
        }
    }["ChatView.useEffect"], [
        messages.length,
        isTyping
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatView.useEffect": ()=>{
            const el = scrollRef.current;
            if (!el) return;
            let raf;
            let count = 0;
            const scroll = {
                "ChatView.useEffect.scroll": ()=>{
                    el.scrollTop = el.scrollHeight;
                    count++;
                    if (count < 20) raf = requestAnimationFrame(scroll);
                }
            }["ChatView.useEffect.scroll"];
            raf = requestAnimationFrame(scroll);
            return ({
                "ChatView.useEffect": ()=>cancelAnimationFrame(raf)
            })["ChatView.useEffect"];
        }
    }["ChatView.useEffect"], [
        showKeyboard
    ]);
    const visibleComposerText = composerText ? composerText.slice(0, typedLength) : "";
    const showSendButton = composerText.length > 0 && typedLength > 0;
    const encryptedLabel = locale === "sv" ? "Krypterad" : "Encrypted";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex flex-col",
        style: {
            background: "#000000",
            color: "#FFFFFF",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBar, {
                dark: false
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 1299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                style: {
                    marginTop: 52,
                    padding: "6px 14px 12px",
                    background: "#000000"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "flex items-center justify-center",
                                style: {
                                    width: 36,
                                    height: 36,
                                    background: "transparent",
                                    border: "none",
                                    padding: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiquidGlass, {
                                    borderRadius: "50%",
                                    className: "flex items-center justify-center",
                                    style: {
                                        width: 36,
                                        height: 36
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderBackIcon, {
                                        color: "#FFFFFF"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                        lineNumber: 1326,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                    lineNumber: 1321,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 1310,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center",
                                style: {
                                    width: 36,
                                    minWidth: 36
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiquidGlass, {
                                    borderRadius: "50%",
                                    className: "flex items-center justify-center",
                                    style: {
                                        width: 36,
                                        height: 36
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderVideoIcon, {
                                        color: "#FFFFFF"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                        lineNumber: 1339,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                    lineNumber: 1334,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 1330,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 1309,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        style: {
                            marginTop: -30
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "inline-flex"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactAvatar, {
                                    size: 56
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                    lineNumber: 1346,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 1345,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiquidGlass, {
                                borderRadius: 16,
                                style: {
                                    marginTop: -4,
                                    minHeight: 30,
                                    padding: "0 12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 15,
                                            fontWeight: 700,
                                            color: "#FFFFFF",
                                            fontFamily: SF_FONT,
                                            letterSpacing: -0.2
                                        },
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                        lineNumber: 1361,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderDisclosureIcon, {
                                        color: "rgba(255,255,255,0.4)"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                        lineNumber: 1372,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 1349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 10,
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: "rgba(255,255,255,0.62)",
                                    fontFamily: SF_FONT,
                                    lineHeight: 1.2
                                },
                                children: "iMessage"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 1375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                style: {
                                    marginTop: 2,
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: "rgba(255,255,255,0.4)",
                                    fontFamily: SF_FONT,
                                    lineHeight: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "8",
                                        height: "10",
                                        viewBox: "0 0 8 10",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "1.4",
                                                y: "4.3",
                                                width: "5.2",
                                                height: "4.3",
                                                rx: "1.1",
                                                fill: "rgba(255,255,255,0.4)"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                                lineNumber: 1405,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2.4 4.3V3.3C2.4 2.24 3.11 1.4 4 1.4C4.89 1.4 5.6 2.24 5.6 3.3V4.3",
                                                stroke: "rgba(255,255,255,0.4)",
                                                strokeWidth: "1",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                                lineNumber: 1413,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                        lineNumber: 1398,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: encryptedLabel
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                        lineNumber: 1420,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 1387,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 1344,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 1301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layout: true,
                ref: scrollRef,
                className: "flex-1 overflow-y-auto",
                "data-chat-scroll": "true",
                animate: {
                    paddingTop: 6,
                    paddingBottom: visibleBottomInset
                },
                transition: {
                    type: "spring",
                    stiffness: 380,
                    damping: 34,
                    mass: 0.92
                },
                style: {
                    background: "#000000",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                    overscrollBehaviorY: "contain",
                    touchAction: "pan-y"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "popLayout",
                            children: messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10,
                                        filter: "blur(6px)"
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)"
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.22,
                                        ease: "easeOut"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageBubble, {
                                        message: msg
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                        lineNumber: 1459,
                                        columnNumber: 17
                                    }, this)
                                }, msg.id, false, {
                                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                    lineNumber: 1452,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                            lineNumber: 1450,
                            columnNumber: 11
                        }, this),
                        isTyping ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TypingIndicator, {}, void 0, false, {
                            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                            lineNumber: 1463,
                            columnNumber: 23
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                    lineNumber: 1449,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 1425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute left-0 right-0 bottom-0",
                initial: {
                    y: KEYBOARD_HEIGHT + KEYBOARD_HIDDEN_OFFSET
                },
                animate: {
                    y: showKeyboard ? 0 : KEYBOARD_HEIGHT + KEYBOARD_HIDDEN_OFFSET
                },
                transition: showKeyboard ? {
                    type: "spring",
                    stiffness: 390,
                    damping: 34,
                    mass: 0.92
                } : {
                    duration: 0
                },
                style: {
                    zIndex: 20,
                    willChange: "transform"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-[8px]",
                        style: {
                            width: "calc(100% - 20px)",
                            margin: "0 auto",
                            padding: "12px 16px 22px",
                            background: "transparent"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiquidGlass, {
                                borderRadius: "50%",
                                className: "flex items-center justify-center",
                                style: {
                                    width: 36,
                                    height: 36
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ComposerPlusIcon, {
                                    color: "#FFFFFF"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                    lineNumber: 1500,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 1492,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                style: {
                                    minWidth: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiquidGlass, {
                                    borderRadius: 18,
                                    className: "flex-1",
                                    style: {
                                        width: "100%",
                                        height: 36,
                                        background: "linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.008))",
                                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(255,255,255,0.008), 0 2px 6px rgba(0,0,0,0.03)",
                                        backdropFilter: "blur(5px) saturate(106%)",
                                        WebkitBackdropFilter: "blur(5px) saturate(106%)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        paddingLeft: 15,
                                        paddingRight: 10,
                                        minWidth: 0
                                    },
                                    children: [
                                        visibleComposerText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                flex: 1,
                                                minWidth: 0,
                                                display: "block",
                                                fontSize: 16,
                                                color: "#FFFFFF",
                                                fontFamily: SF_FONT,
                                                letterSpacing: -0.2,
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                direction: "rtl",
                                                textAlign: "left"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    display: "inline-flex",
                                                    alignItems: "flex-end",
                                                    whiteSpace: "nowrap",
                                                    flexShrink: 0,
                                                    direction: "ltr"
                                                },
                                                children: [
                                                    visibleComposerText,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            display: "inline-block",
                                                            width: 2,
                                                            height: 18,
                                                            marginLeft: 1,
                                                            background: "#007AFF",
                                                            verticalAlign: "text-bottom",
                                                            animation: "cursorBlink 1s step-end infinite",
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                                        lineNumber: 1550,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                                lineNumber: 1540,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                            lineNumber: 1525,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                flex: 1,
                                                minWidth: 0,
                                                fontSize: 16,
                                                color: "#8E8E93",
                                                fontFamily: SF_FONT,
                                                letterSpacing: -0.2,
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap"
                                            },
                                            children: "iMessage"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                            lineNumber: 1565,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center",
                                            style: {
                                                width: showSendButton ? 26 : 17,
                                                height: showSendButton ? 26 : 17,
                                                transition: "all 0.15s ease",
                                                flexShrink: 0
                                            },
                                            children: showSendButton ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ComposerSendIcon, {}, void 0, false, {
                                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                                lineNumber: 1591,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ComposerMicIcon, {
                                                color: "rgba(255,255,255,0.58)"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                                lineNumber: 1593,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                            lineNumber: 1581,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                    lineNumber: 1504,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                                lineNumber: 1503,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 1483,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IOSKeyboard, {}, void 0, false, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 1600,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 1467,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 1291,
        columnNumber: 5
    }, this);
}
_s3(ChatView, "rB6cfRMCNxGTpQvCZ1n7S5NW2Pc=");
_c19 = ChatView;
function buildScenarioData(scenario, locale, featuresT, phoneT, currentDate) {
    const readLabel = locale === "sv" ? "Läst 9:41" : "Read 9:41";
    const mealMoment = getMealMoment(currentDate);
    switch(scenario){
        case "snapOrText":
            return {
                label: featuresT("snapOrText.title"),
                notificationText: getReminderNotificationText(mealMoment, phoneT),
                messages: [
                    {
                        id: 1,
                        sender: "assistant",
                        text: getSnapIntroText(mealMoment, featuresT)
                    },
                    {
                        id: 2,
                        sender: "user",
                        text: "",
                        imageSrc: CAMERA_IMAGE_SRC,
                        imageAlt: locale === "sv" ? "Foto av en medelhavsskål med kikärtor, pitabröd och grönsaker" : "Photo of a Mediterranean bowl with chickpeas, pita, and vegetables",
                        statusLabel: readLabel
                    },
                    {
                        id: 3,
                        sender: "assistant",
                        text: featuresT("chat.snapOrText.bot1")
                    },
                    {
                        id: 4,
                        sender: "user",
                        text: featuresT("chat.snapOrText.user1"),
                        statusLabel: readLabel
                    },
                    {
                        id: 5,
                        sender: "assistant",
                        text: featuresT("chat.snapOrText.bot2")
                    },
                    {
                        id: 6,
                        sender: "assistant",
                        text: featuresT("chat.snapOrText.bot3")
                    }
                ]
            };
        case "dailySummaries":
            return {
                label: featuresT("dailySummaries.title"),
                notificationText: phoneT("lockBodySummary"),
                messages: [
                    {
                        id: 1,
                        sender: "assistant",
                        text: featuresT("chat.dailySummaries.bot1")
                    }
                ]
            };
        case "smartReminders":
            return {
                label: featuresT("smartReminders.title"),
                notificationText: getReminderNotificationText(mealMoment, phoneT),
                messages: [
                    {
                        id: 1,
                        sender: "assistant",
                        text: getReminderPromptText(mealMoment, featuresT)
                    },
                    {
                        id: 2,
                        sender: "user",
                        text: featuresT("chat.smartReminders.user1"),
                        statusLabel: readLabel
                    },
                    {
                        id: 3,
                        sender: "assistant",
                        text: featuresT("chat.smartReminders.bot2")
                    }
                ]
            };
    }
    return {
        label: featuresT("smartReminders.title"),
        notificationText: getReminderNotificationText(mealMoment, phoneT),
        messages: []
    };
}
function ChatIMessageAnimation(param) {
    let { scenario, playing, startAtEnd = false, onComplete } = param;
    _s4();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$use$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const featuresT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("Features");
    const phoneT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("PhoneMockup");
    const clientNow = useClientNow();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("lock");
    const [visibleMessages, setVisibleMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [notificationVisible, setNotificationVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notificationTapped, setNotificationTapped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cameraFlash, setCameraFlash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [composerDraft, setComposerDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showKeyboard, setShowKeyboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [referenceDate, setReferenceDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const doneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatIMessageAnimation.useEffect": ()=>{
            if (clientNow !== null && referenceDate === null) {
                setReferenceDate(clientNow);
            }
        }
    }["ChatIMessageAnimation.useEffect"], [
        clientNow,
        referenceDate
    ]);
    const activeDate = referenceDate !== null && referenceDate !== void 0 ? referenceDate : DEMO_DATE;
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatIMessageAnimation.useMemo[data]": ()=>buildScenarioData(scenario, locale, featuresT, phoneT, activeDate)
    }["ChatIMessageAnimation.useMemo[data]"], [
        activeDate,
        scenario,
        locale,
        featuresT,
        phoneT
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatIMessageAnimation.useEffect": ()=>{
            doneRef.current = false;
            if (!playing) {
                setPhase("lock");
                setVisibleMessages(0);
                setNotificationVisible(false);
                setNotificationTapped(false);
                setCameraFlash(false);
                setComposerDraft("");
                setIsTyping(false);
                setShowKeyboard(false);
                return;
            }
            const timers = [];
            const t = {
                "ChatIMessageAnimation.useEffect.t": (ms, fn)=>{
                    timers.push(setTimeout(fn, ms));
                }
            }["ChatIMessageAnimation.useEffect.t"];
            if (startAtEnd) {
                setPhase("chat");
                setVisibleMessages(data.messages.length);
                setNotificationVisible(false);
                setNotificationTapped(true);
                setCameraFlash(false);
                setComposerDraft("");
                setIsTyping(false);
                setShowKeyboard(false);
                return ({
                    "ChatIMessageAnimation.useEffect": ()=>{
                        timers.forEach(clearTimeout);
                    }
                })["ChatIMessageAnimation.useEffect"];
            }
            setPhase("lock");
            setVisibleMessages(0);
            setNotificationVisible(false);
            setNotificationTapped(false);
            setCameraFlash(false);
            setComposerDraft("");
            setIsTyping(false);
            setShowKeyboard(false);
            const chatStart = LOCK_SCREEN_MS + NOTIFICATION_TAP_MS;
            let completionDelay;
            t(NOTIFICATION_APPEAR_MS, {
                "ChatIMessageAnimation.useEffect": ()=>setNotificationVisible(true)
            }["ChatIMessageAnimation.useEffect"]);
            t(LOCK_SCREEN_MS, {
                "ChatIMessageAnimation.useEffect": ()=>setNotificationTapped(true)
            }["ChatIMessageAnimation.useEffect"]);
            if (scenario === "snapOrText") {
                var _data_messages_;
                var _data_messages__text;
                const userMessage = (_data_messages__text = (_data_messages_ = data.messages[3]) === null || _data_messages_ === void 0 ? void 0 : _data_messages_.text) !== null && _data_messages__text !== void 0 ? _data_messages__text : "";
                const introShow = chatStart + 200;
                const cameraOpen = introShow + 1400;
                const cameraFlashAt = cameraOpen + CAMERA_PREVIEW_MS;
                const backToChat = cameraFlashAt + CAMERA_FLASH_MS;
                const imageShow = backToChat + 300;
                const typingStart1 = imageShow + 1500;
                const estimateShow = typingStart1 + 2600;
                const kbUp = estimateShow + 1800;
                const typeStart = kbUp + 400;
                const userSend = typeStart + userMessage.length * CHAR_TYPE_MS + 400;
                const typingStart2 = userSend + 900;
                const replyShow = typingStart2 + 1400;
                const breakdownShow = replyShow + 1200;
                completionDelay = breakdownShow + END_HOLD_MS;
                t(chatStart, {
                    "ChatIMessageAnimation.useEffect": ()=>setPhase("chat")
                }["ChatIMessageAnimation.useEffect"]);
                t(introShow, {
                    "ChatIMessageAnimation.useEffect": ()=>setVisibleMessages(1)
                }["ChatIMessageAnimation.useEffect"]);
                t(cameraOpen, {
                    "ChatIMessageAnimation.useEffect": ()=>setPhase("camera")
                }["ChatIMessageAnimation.useEffect"]);
                t(cameraFlashAt, {
                    "ChatIMessageAnimation.useEffect": ()=>setCameraFlash(true)
                }["ChatIMessageAnimation.useEffect"]);
                t(backToChat, {
                    "ChatIMessageAnimation.useEffect": ()=>{
                        setPhase("chat");
                        setCameraFlash(false);
                    }
                }["ChatIMessageAnimation.useEffect"]);
                t(imageShow, {
                    "ChatIMessageAnimation.useEffect": ()=>setVisibleMessages(2)
                }["ChatIMessageAnimation.useEffect"]);
                t(typingStart1, {
                    "ChatIMessageAnimation.useEffect": ()=>setIsTyping(true)
                }["ChatIMessageAnimation.useEffect"]);
                t(estimateShow, {
                    "ChatIMessageAnimation.useEffect": ()=>{
                        setIsTyping(false);
                        setVisibleMessages(3);
                    }
                }["ChatIMessageAnimation.useEffect"]);
                t(kbUp, {
                    "ChatIMessageAnimation.useEffect": ()=>setShowKeyboard(true)
                }["ChatIMessageAnimation.useEffect"]);
                t(typeStart, {
                    "ChatIMessageAnimation.useEffect": ()=>setComposerDraft(userMessage)
                }["ChatIMessageAnimation.useEffect"]);
                t(userSend, {
                    "ChatIMessageAnimation.useEffect": ()=>{
                        setComposerDraft("");
                        setShowKeyboard(false);
                        setVisibleMessages(4);
                    }
                }["ChatIMessageAnimation.useEffect"]);
                t(typingStart2, {
                    "ChatIMessageAnimation.useEffect": ()=>setIsTyping(true)
                }["ChatIMessageAnimation.useEffect"]);
                t(replyShow, {
                    "ChatIMessageAnimation.useEffect": ()=>{
                        setIsTyping(false);
                        setVisibleMessages(5);
                    }
                }["ChatIMessageAnimation.useEffect"]);
                t(breakdownShow, {
                    "ChatIMessageAnimation.useEffect": ()=>setVisibleMessages(6)
                }["ChatIMessageAnimation.useEffect"]);
            } else if (scenario === "dailySummaries") {
                const typingStart = chatStart + 700;
                const messageShow = typingStart + 2200;
                completionDelay = messageShow + END_HOLD_MS;
                t(chatStart, {
                    "ChatIMessageAnimation.useEffect": ()=>setPhase("chat")
                }["ChatIMessageAnimation.useEffect"]);
                t(typingStart, {
                    "ChatIMessageAnimation.useEffect": ()=>setIsTyping(true)
                }["ChatIMessageAnimation.useEffect"]);
                t(messageShow, {
                    "ChatIMessageAnimation.useEffect": ()=>{
                        setIsTyping(false);
                        setVisibleMessages(1);
                    }
                }["ChatIMessageAnimation.useEffect"]);
            } else {
                var _data_messages_1;
                var _data_messages__text1;
                const userMessage = (_data_messages__text1 = (_data_messages_1 = data.messages[1]) === null || _data_messages_1 === void 0 ? void 0 : _data_messages_1.text) !== null && _data_messages__text1 !== void 0 ? _data_messages__text1 : "";
                const botShow = chatStart + 300;
                const kbUp = botShow + 1400;
                const typeStart = kbUp + 400;
                const userSend = typeStart + userMessage.length * CHAR_TYPE_MS + 400;
                const typingStart = userSend + 1000;
                const botReply = typingStart + 2200;
                completionDelay = botReply + END_HOLD_MS;
                t(chatStart, {
                    "ChatIMessageAnimation.useEffect": ()=>setPhase("chat")
                }["ChatIMessageAnimation.useEffect"]);
                t(botShow, {
                    "ChatIMessageAnimation.useEffect": ()=>setVisibleMessages(1)
                }["ChatIMessageAnimation.useEffect"]);
                t(kbUp, {
                    "ChatIMessageAnimation.useEffect": ()=>setShowKeyboard(true)
                }["ChatIMessageAnimation.useEffect"]);
                t(typeStart, {
                    "ChatIMessageAnimation.useEffect": ()=>setComposerDraft(userMessage)
                }["ChatIMessageAnimation.useEffect"]);
                t(userSend, {
                    "ChatIMessageAnimation.useEffect": ()=>{
                        setComposerDraft("");
                        setShowKeyboard(false);
                        setVisibleMessages(2);
                    }
                }["ChatIMessageAnimation.useEffect"]);
                t(typingStart, {
                    "ChatIMessageAnimation.useEffect": ()=>setIsTyping(true)
                }["ChatIMessageAnimation.useEffect"]);
                t(botReply, {
                    "ChatIMessageAnimation.useEffect": ()=>{
                        setIsTyping(false);
                        setVisibleMessages(3);
                    }
                }["ChatIMessageAnimation.useEffect"]);
            }
            t(completionDelay, {
                "ChatIMessageAnimation.useEffect": ()=>{
                    if (!doneRef.current) {
                        doneRef.current = true;
                        onComplete === null || onComplete === void 0 ? void 0 : onComplete();
                    }
                }
            }["ChatIMessageAnimation.useEffect"]);
            return ({
                "ChatIMessageAnimation.useEffect": ()=>{
                    timers.forEach(clearTimeout);
                }
            })["ChatIMessageAnimation.useEffect"];
        }
    }["ChatIMessageAnimation.useEffect"], [
        data.messages,
        onComplete,
        playing,
        scenario,
        startAtEnd
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full w-full overflow-hidden bg-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: HIDE_SCROLLBAR_CSS
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 1898,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: phase === "lock" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 1.015,
                        filter: "blur(8px)"
                    },
                    transition: {
                        duration: 0.35,
                        ease: "easeOut"
                    },
                    className: "absolute inset-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LockScreen, {
                            locale: locale,
                            currentDate: activeDate
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                            lineNumber: 1910,
                            columnNumber: 13
                        }, this),
                        notificationVisible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationBanner, {
                            title: phoneT("lockTitle"),
                            body: data.notificationText,
                            locale: locale,
                            tapped: notificationTapped
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                            lineNumber: 1915,
                            columnNumber: 15
                        }, this) : null
                    ]
                }, "".concat(scenario, "-lock"), true, {
                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                    lineNumber: 1902,
                    columnNumber: 11
                }, this) : phase === "camera" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 1.015
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 1.01
                    },
                    transition: {
                        duration: 0.3,
                        ease: "easeOut"
                    },
                    className: "absolute inset-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IOSCameraView, {
                        flash: cameraFlash
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 1932,
                        columnNumber: 13
                    }, this)
                }, "".concat(scenario, "-camera"), false, {
                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                    lineNumber: 1924,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 8
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3,
                        ease: "easeOut"
                    },
                    className: "absolute inset-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatView, {
                        locale: locale,
                        title: phoneT("header"),
                        messages: data.messages.slice(0, visibleMessages),
                        composerText: composerDraft,
                        isTyping: isTyping,
                        showKeyboard: showKeyboard
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                        lineNumber: 1943,
                        columnNumber: 13
                    }, this)
                }, "".concat(scenario, "-chat"), false, {
                    fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                    lineNumber: 1935,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
                lineNumber: 1900,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/animations/chat-demo.tsx",
        lineNumber: 1897,
        columnNumber: 5
    }, this);
}
_s4(ChatIMessageAnimation, "CyhUue1YGTXa85hFaKeV6goyrGM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$use$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$intl$40$4$2e$9$2e$0$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        useClientNow
    ];
});
_c20 = ChatIMessageAnimation;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20;
__turbopack_context__.k.register(_c, "AppIconSquare");
__turbopack_context__.k.register(_c1, "ContactAvatar");
__turbopack_context__.k.register(_c2, "HeaderBackIcon");
__turbopack_context__.k.register(_c3, "HeaderVideoIcon");
__turbopack_context__.k.register(_c4, "HeaderDisclosureIcon");
__turbopack_context__.k.register(_c5, "ComposerPlusIcon");
__turbopack_context__.k.register(_c6, "ComposerMicIcon");
__turbopack_context__.k.register(_c7, "ComposerSendIcon");
__turbopack_context__.k.register(_c8, "LockFlashlightIcon");
__turbopack_context__.k.register(_c9, "LockCameraIcon");
__turbopack_context__.k.register(_c10, "LiquidGlass");
__turbopack_context__.k.register(_c11, "StatusBar");
__turbopack_context__.k.register(_c12, "HomeIndicator");
__turbopack_context__.k.register(_c13, "IOSCameraView");
__turbopack_context__.k.register(_c14, "NotificationBanner");
__turbopack_context__.k.register(_c15, "LockScreen");
__turbopack_context__.k.register(_c16, "MessageBubble");
__turbopack_context__.k.register(_c17, "TypingIndicator");
__turbopack_context__.k.register(_c18, "IOSKeyboard");
__turbopack_context__.k.register(_c19, "ChatView");
__turbopack_context__.k.register(_c20, "ChatIMessageAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/animations/chat-demo-animation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDemoMuted",
    ()=>isDemoMuted,
    "onDemoMuteChange",
    ()=>onDemoMuteChange,
    "toggleDemoMute",
    ()=>toggleDemoMute
]);
"use client";
let muted = true;
const listeners = new Set();
function isDemoMuted() {
    return muted;
}
function toggleDemoMute() {
    muted = !muted;
    listeners.forEach((listener)=>listener(muted));
    return muted;
}
function onDemoMuteChange(listener) {
    listeners.add(listener);
    return ()=>{
        listeners.delete(listener);
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/iphone-mock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IPhoneMock",
    ()=>IPhoneMock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.5.14/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.38.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/framer-motion@12.38.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.5.14/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$animations$2f$chat$2d$demo$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/animations/chat-demo-animation.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const SCREEN_PATH = "M113.81 20.4039C80.2907 20.4039 63.5312 20.4036 50.7286 27.0752C39.467 32.9438 30.3109 42.3083 24.5729 53.8261C18.0497 66.92 18.05 84.0608 18.05 118.3428V771.6572C18.05 805.9407 18.0497 823.08 24.5729 836.1725C30.3109 847.691 39.467 857.0574 50.7286 862.9259C63.5312 869.5961 80.2907 869.5961 113.81 869.5961H304.19C337.7093 869.5961 354.4688 869.5961 367.2714 862.9259C378.5332 857.0574 387.6893 847.691 393.4273 836.1725C399.9505 823.08 399.95 805.9407 399.95 771.6572V118.3428C399.95 84.0608 399.9505 66.92 393.4273 53.8261C387.6893 42.3083 378.5332 32.9438 367.2714 27.0752C354.4688 20.4036 337.7093 20.4039 304.19 20.4039H113.81Z";
const CONTENT_WIDTH = 418;
const CONTENT_HEIGHT = 890;
const SCREEN_LEFT = 18.05;
const SCREEN_TOP = 20.4;
const SCREEN_WIDTH = 381.9;
const SCREEN_HEIGHT = 849.2;
const SCREEN_SCALE_X = SCREEN_WIDTH / CONTENT_WIDTH;
const SCREEN_SCALE_Y = SCREEN_HEIGHT / CONTENT_HEIGHT;
const SILENT_BANNER_HOLD_MS = 1600;
const DI_TOP = 24;
const DI_WIDTH = 118;
const DI_HEIGHT = 35;
const DI_EXPANDED_WIDTH = 220;
const DI_EXPANDED_HEIGHT = 54;
function SilentBellIcon(param) {
    let { muted } = param;
    const color = muted ? "#FF3B30" : "#fff";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2C10.9 2 10 2.9 10 4V4.29C7.12 5.14 5 7.82 5 11V17L3 19V20H21V19L19 17V11C19 7.82 16.88 5.14 14 4.29V4C14 2.9 13.1 2 12 2ZM10 21C10 22.1 10.9 23 12 23C13.1 23 14 22.1 14 21H10Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/apps/web/components/iphone-mock.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            muted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                y1: "2",
                x2: "21",
                y2: "22",
                stroke: color,
                strokeWidth: "2.2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/iphone-mock.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/iphone-mock.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = SilentBellIcon;
function SilentBanner() {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [muted, setMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SilentBanner.useEffect": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$animations$2f$chat$2d$demo$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onDemoMuteChange"])({
                "SilentBanner.useEffect": (next)=>{
                    setMuted(next);
                    if (timerRef.current) clearTimeout(timerRef.current);
                    setVisible(true);
                    timerRef.current = setTimeout({
                        "SilentBanner.useEffect": ()=>{
                            setVisible(false);
                            timerRef.current = null;
                        }
                    }["SilentBanner.useEffect"], SILENT_BANNER_HOLD_MS);
                }
            }["SilentBanner.useEffect"]);
        }
    }["SilentBanner.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SilentBanner.useEffect": ()=>{
            return ({
                "SilentBanner.useEffect": ()=>{
                    if (timerRef.current) clearTimeout(timerRef.current);
                }
            })["SilentBanner.useEffect"];
        }
    }["SilentBanner.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: visible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                width: DI_WIDTH,
                height: DI_HEIGHT,
                borderRadius: DI_HEIGHT / 2,
                opacity: 0.6
            },
            animate: {
                width: DI_EXPANDED_WIDTH,
                height: DI_EXPANDED_HEIGHT,
                borderRadius: DI_EXPANDED_HEIGHT / 2,
                opacity: 1
            },
            exit: {
                width: DI_WIDTH,
                height: DI_HEIGHT,
                borderRadius: DI_HEIGHT / 2,
                opacity: 0
            },
            transition: {
                type: "spring",
                stiffness: 380,
                damping: 28,
                mass: 0.7
            },
            style: {
                position: "absolute",
                top: DI_TOP,
                left: "50%",
                x: "-50%",
                backgroundColor: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 18px",
                zIndex: 60,
                overflow: "hidden",
                pointerEvents: "none"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        delay: 0.08,
                        duration: 0.12
                    },
                    style: {
                        display: "flex",
                        alignItems: "center"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SilentBellIcon, {
                        muted: muted
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/iphone-mock.tsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/iphone-mock.tsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$framer$2d$motion$40$12$2e$38$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        delay: 0.1,
                        duration: 0.15
                    },
                    style: {
                        color: muted ? "#FF3B30" : "#fff",
                        fontSize: 15,
                        fontWeight: 600,
                        fontFamily: '-apple-system, "SF Pro Text", "SF Pro Display", system-ui, sans-serif',
                        letterSpacing: -0.2
                    },
                    children: muted ? "Silent" : "Ring"
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/iphone-mock.tsx",
                    lineNumber: 137,
                    columnNumber: 11
                }, this)
            ]
        }, "silent-banner", true, {
            fileName: "[project]/apps/web/components/iphone-mock.tsx",
            lineNumber: 87,
            columnNumber: 9
        }, this) : null
    }, void 0, false, {
        fileName: "[project]/apps/web/components/iphone-mock.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(SilentBanner, "LWllHUIGXWSY6JZlbEmlKl1a1ho=");
_c1 = SilentBanner;
function MuteSwitch() {
    _s1();
    const [muted, setMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$animations$2f$chat$2d$demo$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDemoMuted"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MuteSwitch.useEffect": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$animations$2f$chat$2d$demo$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onDemoMuteChange"])(setMuted)
    }["MuteSwitch.useEffect"], []);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MuteSwitch.useCallback[toggle]": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$animations$2f$chat$2d$demo$2d$animation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleDemoMute"])();
        }
    }["MuteSwitch.useCallback[toggle]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-label": muted ? "Unmute sounds" : "Mute sounds",
        onClick: toggle,
        style: {
            position: "absolute",
            left: -4,
            top: 186,
            width: 20,
            height: 41,
            zIndex: 40,
            cursor: "pointer",
            background: "transparent",
            border: "none",
            padding: 0
        }
    }, void 0, false, {
        fileName: "[project]/apps/web/components/iphone-mock.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s1(MuteSwitch, "VNWgZusL3NhUzspY6sC7XygBqjc=");
_c2 = MuteSwitch;
function IPhoneMock(param) {
    let { children, className, isDark = true, style: styleProp } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            width: 418,
            height: 890,
            position: "relative",
            filter: "none",
            ...styleProp
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                style: {
                    clipPath: "path('".concat(SCREEN_PATH, "')")
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        left: SCREEN_LEFT,
                        top: SCREEN_TOP,
                        width: CONTENT_WIDTH,
                        height: CONTENT_HEIGHT,
                        transform: "scale(".concat(SCREEN_SCALE_X, ", ").concat(SCREEN_SCALE_Y, ")"),
                        transformOrigin: "top left"
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/iphone-mock.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/iphone-mock.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "https://cdn.midday.ai/iphone-17-pro-silver.svg",
                alt: "",
                "aria-hidden": "true",
                className: "pointer-events-none absolute inset-0 h-full w-full select-none",
                draggable: false
            }, void 0, false, {
                fileName: "[project]/apps/web/components/iphone-mock.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SilentBanner, {}, void 0, false, {
                fileName: "[project]/apps/web/components/iphone-mock.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MuteSwitch, {}, void 0, false, {
                fileName: "[project]/apps/web/components/iphone-mock.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/iphone-mock.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
_c3 = IPhoneMock;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "SilentBellIcon");
__turbopack_context__.k.register(_c1, "SilentBanner");
__turbopack_context__.k.register(_c2, "MuteSwitch");
__turbopack_context__.k.register(_c3, "IPhoneMock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/chat-showcase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatShowcase",
    ()=>ChatShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.5.14/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.5.14/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$chat$2d$demo$2d$rail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/chat-demo-rail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$animations$2f$chat$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/animations/chat-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$iphone$2d$mock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/iphone-mock.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const PHONE_W = 418;
const PHONE_H = 890;
const MOBILE_SCALE = 0.64;
const DESKTOP_SCALE = 0.82;
const MOBILE_FRAME_GUTTER = 8;
const DESKTOP_FRAME_GUTTER = 26;
const MOBILE_PHONE_MIN_SCALE = 0.44;
const MOBILE_PHONE_SAFE_X = 24;
const MOBILE_PHONE_SAFE_Y = 120;
const DESKTOP_PHONE_H = Math.round(PHONE_H * DESKTOP_SCALE) + DESKTOP_FRAME_GUTTER;
function ChatShowcase() {
    var _DEMO_STORIES_mobileScenarioIndex;
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileViewport, setIsMobileViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileScale, setMobileScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MOBILE_SCALE);
    const [mobileScenarioIndex, setMobileScenarioIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mobilePlaying, setMobilePlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [mobileStartAtEnd, setMobileStartAtEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeScenario, setActiveScenario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("snapOrText");
    const [demoActive, setDemoActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasExitedDemo, setHasExitedDemo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stickyTop, setStickyTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(12);
    const mobilePauseTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const demoSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatShowcase.useEffect": ()=>{
            setMounted(true);
        }
    }["ChatShowcase.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatShowcase.useEffect": ()=>{
            var _window_visualViewport, _window_visualViewport1;
            const updateMobileScale = {
                "ChatShowcase.useEffect.updateMobileScale": ()=>{
                    var _window_visualViewport, _window_visualViewport1;
                    setIsMobileViewport(window.innerWidth < 1024);
                    var _window_visualViewport_width;
                    const viewportWidth = (_window_visualViewport_width = (_window_visualViewport = window.visualViewport) === null || _window_visualViewport === void 0 ? void 0 : _window_visualViewport.width) !== null && _window_visualViewport_width !== void 0 ? _window_visualViewport_width : window.innerWidth;
                    var _window_visualViewport_height;
                    const viewportHeight = (_window_visualViewport_height = (_window_visualViewport1 = window.visualViewport) === null || _window_visualViewport1 === void 0 ? void 0 : _window_visualViewport1.height) !== null && _window_visualViewport_height !== void 0 ? _window_visualViewport_height : window.innerHeight;
                    setStickyTop(Math.max(12, Math.round((viewportHeight - DESKTOP_PHONE_H) / 2)));
                    const availableWidth = viewportWidth - MOBILE_PHONE_SAFE_X - MOBILE_FRAME_GUTTER * 2;
                    const availableHeight = viewportHeight - MOBILE_PHONE_SAFE_Y - MOBILE_FRAME_GUTTER;
                    const widthScale = availableWidth / PHONE_W;
                    const heightScale = availableHeight / PHONE_H;
                    setMobileScale(Math.max(MOBILE_PHONE_MIN_SCALE, Math.min(MOBILE_SCALE, widthScale, heightScale)));
                }
            }["ChatShowcase.useEffect.updateMobileScale"];
            updateMobileScale();
            window.addEventListener("resize", updateMobileScale);
            (_window_visualViewport = window.visualViewport) === null || _window_visualViewport === void 0 ? void 0 : _window_visualViewport.addEventListener("resize", updateMobileScale);
            (_window_visualViewport1 = window.visualViewport) === null || _window_visualViewport1 === void 0 ? void 0 : _window_visualViewport1.addEventListener("scroll", updateMobileScale);
            return ({
                "ChatShowcase.useEffect": ()=>{
                    var _window_visualViewport, _window_visualViewport1;
                    window.removeEventListener("resize", updateMobileScale);
                    (_window_visualViewport = window.visualViewport) === null || _window_visualViewport === void 0 ? void 0 : _window_visualViewport.removeEventListener("resize", updateMobileScale);
                    (_window_visualViewport1 = window.visualViewport) === null || _window_visualViewport1 === void 0 ? void 0 : _window_visualViewport1.removeEventListener("scroll", updateMobileScale);
                }
            })["ChatShowcase.useEffect"];
        }
    }["ChatShowcase.useEffect"], []);
    const handleMobileComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatShowcase.useCallback[handleMobileComplete]": ()=>{
            setMobilePlaying(false);
            setMobileStartAtEnd(false);
            mobilePauseTimerRef.current = setTimeout({
                "ChatShowcase.useCallback[handleMobileComplete]": ()=>{
                    setMobileScenarioIndex({
                        "ChatShowcase.useCallback[handleMobileComplete]": (prev)=>(prev + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$chat$2d$demo$2d$rail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEMO_STORIES"].length
                    }["ChatShowcase.useCallback[handleMobileComplete]"]);
                    setMobilePlaying(true);
                    mobilePauseTimerRef.current = null;
                }
            }["ChatShowcase.useCallback[handleMobileComplete]"], 1500);
        }
    }["ChatShowcase.useCallback[handleMobileComplete]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatShowcase.useEffect": ()=>{
            return ({
                "ChatShowcase.useEffect": ()=>{
                    if (mobilePauseTimerRef.current !== null) {
                        clearTimeout(mobilePauseTimerRef.current);
                    }
                }
            })["ChatShowcase.useEffect"];
        }
    }["ChatShowcase.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatShowcase.useEffect": ()=>{
            if (isMobileViewport) {
                setDemoActive(false);
                setHasExitedDemo(false);
                return;
            }
            const handleScroll = {
                "ChatShowcase.useEffect.handleScroll": ()=>{
                    var _DEMO_STORIES_;
                    const section = demoSectionRef.current;
                    if (!section) {
                        return;
                    }
                    const rect = section.getBoundingClientRect();
                    const isPhoneSticky = rect.top <= stickyTop && rect.bottom >= window.innerHeight * 0.25;
                    setDemoActive(isPhoneSticky);
                    setHasExitedDemo(rect.bottom <= window.innerHeight + 16);
                    const viewportAnchor = window.innerHeight * 0.5;
                    var _DEMO_STORIES__id;
                    let closestScenario = (_DEMO_STORIES__id = (_DEMO_STORIES_ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$chat$2d$demo$2d$rail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEMO_STORIES"][0]) === null || _DEMO_STORIES_ === void 0 ? void 0 : _DEMO_STORIES_.id) !== null && _DEMO_STORIES__id !== void 0 ? _DEMO_STORIES__id : "snapOrText";
                    let closestDistance = Number.POSITIVE_INFINITY;
                    for (const story of __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$chat$2d$demo$2d$rail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEMO_STORIES"]){
                        const node = sectionRefs.current[story.id];
                        if (!node) {
                            continue;
                        }
                        const storyRect = node.getBoundingClientRect();
                        const distance = viewportAnchor < storyRect.top ? storyRect.top - viewportAnchor : viewportAnchor > storyRect.bottom ? viewportAnchor - storyRect.bottom : 0;
                        if (distance < closestDistance) {
                            closestDistance = distance;
                            closestScenario = story.id;
                        }
                    }
                    setActiveScenario(closestScenario);
                }
            }["ChatShowcase.useEffect.handleScroll"];
            handleScroll();
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            window.addEventListener("resize", handleScroll);
            return ({
                "ChatShowcase.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    window.removeEventListener("resize", handleScroll);
                }
            })["ChatShowcase.useEffect"];
        }
    }["ChatShowcase.useEffect"], [
        isMobileViewport,
        stickyTop
    ]);
    var _DEMO_STORIES_mobileScenarioIndex_id;
    const mobileScenario = (_DEMO_STORIES_mobileScenarioIndex_id = (_DEMO_STORIES_mobileScenarioIndex = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$chat$2d$demo$2d$rail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEMO_STORIES"][mobileScenarioIndex]) === null || _DEMO_STORIES_mobileScenarioIndex === void 0 ? void 0 : _DEMO_STORIES_mobileScenarioIndex.id) !== null && _DEMO_STORIES_mobileScenarioIndex_id !== void 0 ? _DEMO_STORIES_mobileScenarioIndex_id : "snapOrText";
    const selectMobileScenario = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatShowcase.useCallback[selectMobileScenario]": (scenario)=>{
            if (mobilePauseTimerRef.current !== null) {
                clearTimeout(mobilePauseTimerRef.current);
                mobilePauseTimerRef.current = null;
            }
            const nextIndex = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$chat$2d$demo$2d$rail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEMO_STORIES"].findIndex({
                "ChatShowcase.useCallback[selectMobileScenario].nextIndex": (story)=>story.id === scenario
            }["ChatShowcase.useCallback[selectMobileScenario].nextIndex"]);
            if (nextIndex >= 0) {
                setMobileStartAtEnd(false);
                setMobileScenarioIndex(nextIndex);
                setMobilePlaying(true);
            }
        }
    }["ChatShowcase.useCallback[selectMobileScenario]"], []);
    const scrollToScenario = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatShowcase.useCallback[scrollToScenario]": (scenario)=>{
            var _sectionRefs_current_scenario;
            (_sectionRefs_current_scenario = sectionRefs.current[scenario]) === null || _sectionRefs_current_scenario === void 0 ? void 0 : _sectionRefs_current_scenario.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }["ChatShowcase.useCallback[scrollToScenario]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "features",
        className: "-mt-4 pb-16 sm:-mt-6 sm:pb-20",
        children: [
            mounted && isMobileViewport ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative pb-6 pt-0 lg:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-5xl flex-col items-center gap-5 px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex w-full justify-center",
                            style: {
                                height: Math.round(PHONE_H * mobileScale) + MOBILE_FRAME_GUTTER
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                style: {
                                    width: Math.round(PHONE_W * mobileScale) + MOBILE_FRAME_GUTTER * 2,
                                    height: Math.round(PHONE_H * mobileScale) + MOBILE_FRAME_GUTTER
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 origin-top-left",
                                    style: {
                                        left: MOBILE_FRAME_GUTTER,
                                        transform: "scale(".concat(mobileScale, ")")
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$iphone$2d$mock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IPhoneMock"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$animations$2f$chat$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatIMessageAnimation"], {
                                            scenario: mobileScenario,
                                            playing: mobilePlaying,
                                            startAtEnd: mobileStartAtEnd,
                                            onComplete: handleMobileComplete
                                        }, mobileScenario, false, {
                                            fileName: "[project]/apps/web/components/chat-showcase.tsx",
                                            lineNumber: 211,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/chat-showcase.tsx",
                                        lineNumber: 210,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/chat-showcase.tsx",
                                    lineNumber: 203,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/chat-showcase.tsx",
                                lineNumber: 194,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/chat-showcase.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$chat$2d$demo$2d$rail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatDemoRail"], {
                            activeScenario: mobileScenario,
                            onSelect: selectMobileScenario,
                            size: "sm"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/chat-showcase.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/chat-showcase.tsx",
                    lineNumber: 187,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/chat-showcase.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this) : null,
            mounted && !isMobileViewport ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: demoSectionRef,
                className: "relative hidden pt-0 lg:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky z-10 flex flex-col items-center gap-5",
                                style: {
                                    top: stickyTop
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        style: {
                                            width: Math.round(PHONE_W * DESKTOP_SCALE) + DESKTOP_FRAME_GUTTER * 2,
                                            height: Math.round(PHONE_H * DESKTOP_SCALE) + DESKTOP_FRAME_GUTTER
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 origin-top-left",
                                            style: {
                                                left: DESKTOP_FRAME_GUTTER,
                                                transform: "scale(".concat(DESKTOP_SCALE, ")")
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$iphone$2d$mock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IPhoneMock"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$animations$2f$chat$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatIMessageAnimation"], {
                                                    scenario: activeScenario,
                                                    playing: demoActive
                                                }, activeScenario, false, {
                                                    fileName: "[project]/apps/web/components/chat-showcase.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/components/chat-showcase.tsx",
                                                lineNumber: 256,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/chat-showcase.tsx",
                                            lineNumber: 249,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/chat-showcase.tsx",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this),
                                    hasExitedDemo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$chat$2d$demo$2d$rail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatDemoRail"], {
                                        activeScenario: activeScenario,
                                        onSelect: scrollToScenario,
                                        className: "flex justify-center px-3 sm:px-4 lg:px-6"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/chat-showcase.tsx",
                                        lineNumber: 267,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/chat-showcase.tsx",
                                lineNumber: 237,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none relative -mt-[62vh] pb-18 pt-[55vh]",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$chat$2d$demo$2d$rail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEMO_STORIES"].map((story)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        ref: (node)=>{
                                            sectionRefs.current[story.id] = node;
                                        },
                                        className: "min-h-[95vh]",
                                        style: {
                                            scrollMarginTop: 120
                                        },
                                        "aria-hidden": "true"
                                    }, story.id, false, {
                                        fileName: "[project]/apps/web/components/chat-showcase.tsx",
                                        lineNumber: 278,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/chat-showcase.tsx",
                                lineNumber: 276,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/chat-showcase.tsx",
                        lineNumber: 236,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/chat-showcase.tsx",
                    lineNumber: 235,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/chat-showcase.tsx",
                lineNumber: 234,
                columnNumber: 9
            }, this) : null,
            mounted && !isMobileViewport && !hasExitedDemo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$14$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$chat$2d$demo$2d$rail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatDemoRail"], {
                activeScenario: activeScenario,
                onSelect: scrollToScenario,
                className: "hidden lg:flex fixed inset-x-0 bottom-4 z-50 justify-center px-3 sm:px-4 lg:px-6"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/chat-showcase.tsx",
                lineNumber: 295,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/chat-showcase.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_s(ChatShowcase, "QlqwX60y4puFO97ScOOIJJxQRMo=");
_c = ChatShowcase;
var _c;
__turbopack_context__.k.register(_c, "ChatShowcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_components_5df07efe._.js.map