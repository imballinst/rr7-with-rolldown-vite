# Build comparison

A difference of almost ~2x speedup.

## Rollup

```
➜  tanstack-start git:(main) ✗ yarn build
vite v6.3.5 building for production...
Generated route tree in 328ms
✓ 185 modules transformed.
.tanstack/start/build/client-dist/.vite/manifest.json                       7.50 kB │ gzip:  0.89 kB
.tanstack/start/build/client-dist/assets/app-DACsPwZv.css                   7.33 kB │ gzip:  2.10 kB
.tanstack/start/build/client-dist/assets/posts._postId-C3WfO6Qh.js          0.11 kB │ gzip:  0.12 kB
.tanstack/start/build/client-dist/assets/posts_._postId.deep-JDL-8PaR.js    0.11 kB │ gzip:  0.12 kB
.tanstack/start/build/client-dist/assets/PostError-C9uxhXzv.js              0.11 kB │ gzip:  0.11 kB
.tanstack/start/build/client-dist/assets/route-b-sRfXPKVQ.js                0.12 kB │ gzip:  0.13 kB
.tanstack/start/build/client-dist/assets/route-a-CErtjFqZ.js                0.12 kB │ gzip:  0.13 kB
.tanstack/start/build/client-dist/assets/users._userId-Bim6v2PK.js          0.13 kB │ gzip:  0.13 kB
.tanstack/start/build/client-dist/assets/posts._postId-X7sBZwja.js          0.13 kB │ gzip:  0.13 kB
.tanstack/start/build/client-dist/assets/posts.index-CU4-DlkQ.js            0.13 kB │ gzip:  0.14 kB
.tanstack/start/build/client-dist/assets/users._userId-DvfR4Qpe.js          0.13 kB │ gzip:  0.13 kB
.tanstack/start/build/client-dist/assets/index-Dc7UmZNU.js                  0.17 kB │ gzip:  0.16 kB
.tanstack/start/build/client-dist/assets/_pathlessLayout-BI5aPtW4.js        0.24 kB │ gzip:  0.19 kB
.tanstack/start/build/client-dist/assets/users.index-Bl6qD-id.js            0.25 kB │ gzip:  0.21 kB
.tanstack/start/build/client-dist/assets/posts_._postId.deep-Dd8AizTM.js    0.41 kB │ gzip:  0.29 kB
.tanstack/start/build/client-dist/assets/users._userId-BElydVy2.js          0.44 kB │ gzip:  0.28 kB
.tanstack/start/build/client-dist/assets/_nested-layout-Dz3x0hBZ.js         0.44 kB │ gzip:  0.25 kB
.tanstack/start/build/client-dist/assets/posts._postId-DOFbqzts.js          0.49 kB │ gzip:  0.32 kB
.tanstack/start/build/client-dist/assets/users-D2cCbFau.js                  0.60 kB │ gzip:  0.39 kB
.tanstack/start/build/client-dist/assets/posts-BROhaVDQ.js                  0.60 kB │ gzip:  0.39 kB
.tanstack/start/build/client-dist/assets/deferred-1fr58m3R.js               0.82 kB │ gzip:  0.39 kB
.tanstack/start/build/client-dist/assets/main-CfC-_zyl.js                 281.96 kB │ gzip: 90.22 kB
✓ built in 3.19s
vite v6.3.5 building SSR bundle for production...
"H3Error", "MIMES", "callNodeListener", "createApp", "createAppEventHandler", "createError", "createEvent", "createRouter", "defineLazyEventHandler", "defineNodeListener", "defineNodeMiddleware", "defineRequestMiddleware", "defineResponseMiddleware", "defineWebSocket", "dynamicEventHandler", "fromNodeMiddleware", "fromPlainHandler", "fromWebHandler", "isCorsOriginAllowed", "isError", "isEventHandler", "isStream", "isWebResponse", "lazyEventHandler", "promisifyNodeListener", "sanitizeStatusCode", "sanitizeStatusMessage", "serveStatic", "splitCookiesString", "toEventHandler", "toNodeListener", "toPlainHandler", "toWebHandler" and "useBase" are imported from external module "h3" but never used in "node_modules/@tanstack/start-server-core/dist/esm/h3.js" and "node_modules/@tanstack/start-server-core/dist/esm/index.js".
✓ 89 modules transformed.
[plugin vite:css-post] Sourcemap is likely to be incorrect: a plugin (vite:css-post) was used to transform files, but didn't generate a sourcemap for the transformation. Consult the plugin documentation for help
✓ built in 801ms
✔ Generated public .output/public                                                                                                                                                             nitro 10:35:02 AM
ℹ Building Nitro Server (preset: node-server, compatibility date: 2024-11-19)                                                                                                                 nitro 10:35:02 AM
✔ Nitro Server built                                                                                                                                                                          nitro 10:35:06 AM
  ├─ .output/server/chunks/_/_nested-layout-BZIh3VuL.mjs (817 B) (375 B gzip)
  ├─ .output/server/chunks/_/_nested-layout-BZIh3VuL.mjs.map (800 B) (353 B gzip)
  ├─ .output/server/chunks/_/_pathlessLayout-orBP5_LJ.mjs (487 B) (296 B gzip)
  ├─ .output/server/chunks/_/_pathlessLayout-orBP5_LJ.mjs.map (477 B) (287 B gzip)
  ├─ .output/server/chunks/_/_tanstack-start-manifest_v-BieyMO3E.mjs (2.54 kB) (698 B gzip)
  ├─ .output/server/chunks/_/_tanstack-start-manifest_v-BieyMO3E.mjs.map (126 B) (125 B gzip)
  ├─ .output/server/chunks/_/_tanstack-start-server-fn-manifest_v-BMMrDyMn.mjs (893 B) (293 B gzip)
  ├─ .output/server/chunks/_/_tanstack-start-server-fn-manifest_v-BMMrDyMn.mjs.map (153 B) (130 B gzip)
  ├─ .output/server/chunks/_/deferred-BRcPEU1J.mjs (1.8 kB) (646 B gzip)
  ├─ .output/server/chunks/_/deferred-BRcPEU1J.mjs.map (1.59 kB) (654 B gzip)
  ├─ .output/server/chunks/_/deferred-CoYfd9o9.mjs (3.17 kB) (975 B gzip)
  ├─ .output/server/chunks/_/deferred-CoYfd9o9.mjs.map (3.32 kB) (1.14 kB gzip)
  ├─ .output/server/chunks/_/index-CSucwgOv.mjs (300 B) (234 B gzip)
  ├─ .output/server/chunks/_/index-CSucwgOv.mjs.map (343 B) (233 B gzip)
  ├─ .output/server/chunks/_/PostError-DeP0212Z.mjs (284 B) (205 B gzip)
  ├─ .output/server/chunks/_/PostError-DeP0212Z.mjs.map (258 B) (197 B gzip)
  ├─ .output/server/chunks/_/posts_._postId.deep-BSLYuExa.mjs (1.02 kB) (512 B gzip)
  ├─ .output/server/chunks/_/posts_._postId.deep-BSLYuExa.mjs.map (682 B) (384 B gzip)
  ├─ .output/server/chunks/_/posts_._postId.deep-C9z5TBp-.mjs (287 B) (201 B gzip)
  ├─ .output/server/chunks/_/posts_._postId.deep-C9z5TBp-.mjs.map (266 B) (196 B gzip)
  ├─ .output/server/chunks/_/posts-A_GU9A3r.mjs (1.74 kB) (606 B gzip)
  ├─ .output/server/chunks/_/posts-A_GU9A3r.mjs.map (1.76 kB) (706 B gzip)
  ├─ .output/server/chunks/_/posts-D6szX2ha.mjs (1.34 kB) (629 B gzip)
  ├─ .output/server/chunks/_/posts-D6szX2ha.mjs.map (1.1 kB) (520 B gzip)
  ├─ .output/server/chunks/_/posts._postId-B1FQkWM-.mjs (1.12 kB) (543 B gzip)
  ├─ .output/server/chunks/_/posts._postId-B1FQkWM-.mjs.map (787 B) (422 B gzip)
  ├─ .output/server/chunks/_/posts._postId-C9z5TBp-.mjs (281 B) (193 B gzip)
  ├─ .output/server/chunks/_/posts._postId-C9z5TBp-.mjs.map (254 B) (191 B gzip)
  ├─ .output/server/chunks/_/posts._postId-WDGB28Eq.mjs (625 B) (338 B gzip)
  ├─ .output/server/chunks/_/posts._postId-WDGB28Eq.mjs.map (318 B) (223 B gzip)
  ├─ .output/server/chunks/_/posts.index-8K46EVme.mjs (261 B) (220 B gzip)
  ├─ .output/server/chunks/_/posts.index-8K46EVme.mjs.map (307 B) (215 B gzip)
  ├─ .output/server/chunks/_/route-a-DDIOWP5Y.mjs (246 B) (213 B gzip)
  ├─ .output/server/chunks/_/route-a-DDIOWP5Y.mjs.map (326 B) (230 B gzip)
  ├─ .output/server/chunks/_/route-b-CVm3vQe0.mjs (246 B) (212 B gzip)
  ├─ .output/server/chunks/_/route-b-CVm3vQe0.mjs.map (326 B) (229 B gzip)
  ├─ .output/server/chunks/_/ssr.mjs (89.3 kB) (20.4 kB gzip)
  ├─ .output/server/chunks/_/ssr.mjs.map (275 B) (192 B gzip)
  ├─ .output/server/chunks/_/users-BPWZknTi.mjs (1.35 kB) (631 B gzip)
  ├─ .output/server/chunks/_/users-BPWZknTi.mjs.map (1.14 kB) (524 B gzip)
  ├─ .output/server/chunks/_/users._userId-BbgV2cuz.mjs (625 B) (335 B gzip)
  ├─ .output/server/chunks/_/users._userId-BbgV2cuz.mjs.map (319 B) (221 B gzip)
  ├─ .output/server/chunks/_/users._userId-CG2IqJzb.mjs (350 B) (229 B gzip)
  ├─ .output/server/chunks/_/users._userId-CG2IqJzb.mjs.map (401 B) (258 B gzip)
  ├─ .output/server/chunks/_/users._userId-D6KW2TXg.mjs (1.04 kB) (504 B gzip)
  ├─ .output/server/chunks/_/users._userId-D6KW2TXg.mjs.map (711 B) (383 B gzip)
  ├─ .output/server/chunks/_/users.index-BoVPxpKb.mjs (427 B) (306 B gzip)
  ├─ .output/server/chunks/_/users.index-BoVPxpKb.mjs.map (431 B) (264 B gzip)
  ├─ .output/server/index.mjs (155 kB) (38.3 kB gzip)
  └─ .output/server/package.json (746 B) (319 B gzip)
Σ Total size: 2.02 MB (446 kB gzip)
✔ You can preview this build using node .output/server/index.mjs                                                                                                                              nitro 10:35:06 AM
✔ Client and Server bundles for TanStack Start have been successfully built.
```

## Rolldown

```
➜  tanstack-start git:(main) yarn build
[vite:react-babel] We recommend switching to `@vitejs/plugin-react-oxc` for improved performance. More information at https://vite.dev/rolldown
[vite:react-babel] We recommend switching to `@vitejs/plugin-react-oxc` for improved performance. More information at https://vite.dev/rolldown (x2)
[vite:react-babel] We recommend switching to `@vitejs/plugin-react-oxc` for improved performance. More information at https://vite.dev/rolldown (x3)
rolldown-vite v6.3.19 building for production...
Generated route tree in 280ms
✓ 164 modules transformed.
.tanstack/start/build/client-dist/.vite/manifest.json                       7.39 kB │ gzip:  0.89 kB
.tanstack/start/build/client-dist/assets/app-UHeV3Yx0.css                   7.66 kB │ gzip:  2.17 kB
.tanstack/start/build/client-dist/assets/posts._postId-E8bh-5iu.js          0.10 kB │ gzip:  0.09 kB
.tanstack/start/build/client-dist/assets/posts_._postId.deep-BNYqglFp.js    0.10 kB │ gzip:  0.09 kB
.tanstack/start/build/client-dist/assets/route-a-CIrwZB8f.js                0.17 kB │ gzip:  0.17 kB
.tanstack/start/build/client-dist/assets/route-b-pLr2Gbbs.js                0.17 kB │ gzip:  0.17 kB
.tanstack/start/build/client-dist/assets/posts.index-Da3pkEmQ.js            0.18 kB │ gzip:  0.17 kB
.tanstack/start/build/client-dist/assets/posts._postId-CF88A6pX.js          0.18 kB │ gzip:  0.17 kB
.tanstack/start/build/client-dist/assets/users._userId-BZNqzpPu.js          0.18 kB │ gzip:  0.17 kB
.tanstack/start/build/client-dist/assets/PostError-B4ivMx5j.js              0.19 kB │ gzip:  0.16 kB
.tanstack/start/build/client-dist/assets/users._userId-B8zUnhSd.js          0.19 kB │ gzip:  0.17 kB
.tanstack/start/build/client-dist/assets/routes-DvnE_pkW.js                 0.22 kB │ gzip:  0.20 kB
.tanstack/start/build/client-dist/assets/_pathlessLayout-BVCzdoqn.js        0.30 kB │ gzip:  0.23 kB
.tanstack/start/build/client-dist/assets/users.index-B-H03Ot9.js            0.30 kB │ gzip:  0.25 kB
.tanstack/start/build/client-dist/assets/posts_._postId.deep-CExx8xlP.js    0.47 kB │ gzip:  0.33 kB
.tanstack/start/build/client-dist/assets/users._userId-kfe_qW_E.js          0.50 kB │ gzip:  0.32 kB
.tanstack/start/build/client-dist/assets/_nested-layout-CF66fsYQ.js         0.52 kB │ gzip:  0.29 kB
.tanstack/start/build/client-dist/assets/posts._postId-Bu9YsXlr.js          0.56 kB │ gzip:  0.37 kB
.tanstack/start/build/client-dist/assets/users-DzRzeOtq.js                  0.68 kB │ gzip:  0.43 kB
.tanstack/start/build/client-dist/assets/posts-Cr-dwEan.js                  0.68 kB │ gzip:  0.43 kB
.tanstack/start/build/client-dist/assets/deferred-Dt3JOuLy.js               0.95 kB │ gzip:  0.45 kB
.tanstack/start/build/client-dist/assets/main-C6kBd7rq.js                 277.38 kB │ gzip: 87.44 kB
✓ built in 1.64s
rolldown-vite v6.3.19 building SSR bundle for production...
✓ 89 modules transformed.
✓ built in 716ms
✔ Generated public .output/public                                                                                                                                                             nitro 10:33:58 AM
ℹ Building Nitro Server (preset: node-server, compatibility date: 2024-11-19)                                                                                                                 nitro 10:33:58 AM
✔ Nitro Server built                                                                                                                                                                          nitro 10:34:02 AM
  ├─ .output/server/chunks/_/_nested-layout-BRj9Q4iM.mjs (847 B) (386 B gzip)
  ├─ .output/server/chunks/_/_nested-layout-BRj9Q4iM.mjs.map (832 B) (367 B gzip)
  ├─ .output/server/chunks/_/_pathlessLayout-B0PcJ3FQ.mjs (501 B) (303 B gzip)
  ├─ .output/server/chunks/_/_pathlessLayout-B0PcJ3FQ.mjs.map (511 B) (286 B gzip)
  ├─ .output/server/chunks/_/_tanstack-start-manifest_v-YcbvbfjV.mjs (2.9 kB) (732 B gzip)
  ├─ .output/server/chunks/_/_tanstack-start-manifest_v-YcbvbfjV.mjs.map (2.44 kB) (571 B gzip)
  ├─ .output/server/chunks/_/_tanstack-start-server-fn-manifest_v-CoE7Xpn6.mjs (917 B) (299 B gzip)
  ├─ .output/server/chunks/_/_tanstack-start-server-fn-manifest_v-CoE7Xpn6.mjs.map (615 B) (273 B gzip)
  ├─ .output/server/chunks/_/deferred-CSsTrLob.mjs (3.37 kB) (997 B gzip)
  ├─ .output/server/chunks/_/deferred-CSsTrLob.mjs.map (3.12 kB) (1.09 kB gzip)
  ├─ .output/server/chunks/_/deferred-D9k19grT.mjs (2.05 kB) (680 B gzip)
  ├─ .output/server/chunks/_/deferred-D9k19grT.mjs.map (1.58 kB) (623 B gzip)
  ├─ .output/server/chunks/_/PostError-Bq6RSYtm.mjs (284 B) (205 B gzip)
  ├─ .output/server/chunks/_/PostError-Bq6RSYtm.mjs.map (264 B) (197 B gzip)
  ├─ .output/server/chunks/_/posts_._postId.deep-3SoufaNs.mjs (1.12 kB) (525 B gzip)
  ├─ .output/server/chunks/_/posts_._postId.deep-3SoufaNs.mjs.map (727 B) (371 B gzip)
  ├─ .output/server/chunks/_/posts_._postId.deep-CzDCgoK5.mjs (287 B) (198 B gzip)
  ├─ .output/server/chunks/_/posts_._postId.deep-CzDCgoK5.mjs.map (266 B) (195 B gzip)
  ├─ .output/server/chunks/_/posts-Bdj07po4.mjs (1.5 kB) (649 B gzip)
  ├─ .output/server/chunks/_/posts-Bdj07po4.mjs.map (1.15 kB) (531 B gzip)
  ├─ .output/server/chunks/_/posts-D1AEgC52.mjs (1.7 kB) (604 B gzip)
  ├─ .output/server/chunks/_/posts-D1AEgC52.mjs.map (1.62 kB) (670 B gzip)
  ├─ .output/server/chunks/_/posts._postId-CmQySGEn.mjs (281 B) (192 B gzip)
  ├─ .output/server/chunks/_/posts._postId-CmQySGEn.mjs.map (254 B) (190 B gzip)
  ├─ .output/server/chunks/_/posts._postId-DRY7Yef2.mjs (620 B) (332 B gzip)
  ├─ .output/server/chunks/_/posts._postId-DRY7Yef2.mjs.map (319 B) (224 B gzip)
  ├─ .output/server/chunks/_/posts._postId-jwwTTZ0q.mjs (1.22 kB) (552 B gzip)
  ├─ .output/server/chunks/_/posts._postId-jwwTTZ0q.mjs.map (847 B) (426 B gzip)
  ├─ .output/server/chunks/_/posts.index-CJZTsGw2.mjs (261 B) (220 B gzip)
  ├─ .output/server/chunks/_/posts.index-CJZTsGw2.mjs.map (285 B) (210 B gzip)
  ├─ .output/server/chunks/_/route-a-D3XJyyQ8.mjs (246 B) (214 B gzip)
  ├─ .output/server/chunks/_/route-a-D3XJyyQ8.mjs.map (303 B) (225 B gzip)
  ├─ .output/server/chunks/_/route-b-B4FwH11d.mjs (246 B) (212 B gzip)
  ├─ .output/server/chunks/_/route-b-B4FwH11d.mjs.map (303 B) (225 B gzip)
  ├─ .output/server/chunks/_/routes-DG8MTNab.mjs (311 B) (237 B gzip)
  ├─ .output/server/chunks/_/routes-DG8MTNab.mjs.map (317 B) (228 B gzip)
  ├─ .output/server/chunks/_/ssr.mjs (80.5 kB) (19.7 kB gzip)
  ├─ .output/server/chunks/_/ssr.mjs.map (7.88 kB) (2.15 kB gzip)
  ├─ .output/server/chunks/_/users-DZK5hYqn.mjs (1.51 kB) (650 B gzip)
  ├─ .output/server/chunks/_/users-DZK5hYqn.mjs.map (1.15 kB) (532 B gzip)
  ├─ .output/server/chunks/_/users._userId-DOk5ZYmj.mjs (350 B) (230 B gzip)
  ├─ .output/server/chunks/_/users._userId-DOk5ZYmj.mjs.map (407 B) (261 B gzip)
  ├─ .output/server/chunks/_/users._userId-DShmscxW.mjs (620 B) (329 B gzip)
  ├─ .output/server/chunks/_/users._userId-DShmscxW.mjs.map (320 B) (222 B gzip)
  ├─ .output/server/chunks/_/users._userId-NJOcwrxf.mjs (1.14 kB) (511 B gzip)
  ├─ .output/server/chunks/_/users._userId-NJOcwrxf.mjs.map (757 B) (390 B gzip)
  ├─ .output/server/chunks/_/users.index-xvhXnoWN.mjs (449 B) (310 B gzip)
  ├─ .output/server/chunks/_/users.index-xvhXnoWN.mjs.map (423 B) (257 B gzip)
  ├─ .output/server/index.mjs (155 kB) (38.3 kB gzip)
  └─ .output/server/package.json (746 B) (319 B gzip)
Σ Total size: 2.02 MB (448 kB gzip)
✔ You can preview this build using node .output/server/index.mjs                                                                                                                              nitro 10:34:02 AM
✔ Client and Server bundles for TanStack Start have been successfully built.
```
