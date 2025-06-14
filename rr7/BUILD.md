# Build comparison

A difference of almost ~3x speedup.

## Rollup

```
@imballinst ➜ /workspaces/rr7-with-rolldown-vite/rr7 (main) $ yarn build
vite v6.3.3 building for production...
✓ 45 modules transformed.
build/client/.vite/manifest.json                  1.60 kB │ gzip:  0.43 kB
build/client/assets/logo-dark-pX2395Y0.svg        6.10 kB │ gzip:  2.40 kB
build/client/assets/logo-light-CVbx2LBR.svg       6.13 kB │ gzip:  2.41 kB
build/client/assets/root-CvCYfJBc.css            12.09 kB │ gzip:  3.16 kB
build/client/assets/with-props-BurUXKPG.js        0.35 kB │ gzip:  0.21 kB
build/client/assets/root-DO6tUESC.js              1.13 kB │ gzip:  0.64 kB
build/client/assets/home-UcGtx_1Q.js              4.00 kB │ gzip:  1.83 kB
build/client/assets/chunk-AYJ5UCUI-BJpQ5qTT.js  116.32 kB │ gzip: 39.12 kB
build/client/assets/entry.client-B8hJqc04.js    181.43 kB │ gzip: 57.32 kB
✓ built in 4.19s
vite v6.3.3 building SSR bundle for production...
✓ 10 modules transformed.
build/server/.vite/manifest.json                0.58 kB
build/server/assets/logo-dark-pX2395Y0.svg      6.10 kB
build/server/assets/logo-light-CVbx2LBR.svg     6.13 kB
build/server/assets/server-build-CvCYfJBc.css  12.09 kB
build/server/index.js                          11.78 kB
✓ built in 496ms
```

## Rolldown

```
@imballinst ➜ /workspaces/rr7-with-rolldown-vite/rr7 (main) $ yarn build
rolldown-vite v6.3.19 building for production...
✓ 26 modules transformed.
build/client/.vite/manifest.json                1.58 kB │ gzip:  0.42 kB
build/client/assets/logo-dark-pX2395Y0.svg      6.10 kB │ gzip:  2.40 kB
build/client/assets/logo-light-CVbx2LBR.svg     6.13 kB │ gzip:  2.41 kB
build/client/assets/root-DxGxw3kV.css          15.23 kB │ gzip:  3.60 kB
build/client/assets/with-props-CS96dznC.js      0.48 kB │ gzip:  0.27 kB
build/client/assets/root-B9VwRiS9.js            1.42 kB │ gzip:  0.74 kB
build/client/assets/home-8ywpuMkh.js            4.13 kB │ gzip:  1.87 kB
build/client/assets/jsx-runtime-kBPBrzFz.js   117.37 kB │ gzip: 38.26 kB
build/client/assets/entry.client-Afv07RTL.js  179.57 kB │ gzip: 56.39 kB
✓ built in 1.43s
rolldown-vite v6.3.19 building SSR bundle for production...
✓ 10 modules transformed.
build/server/.vite/manifest.json                0.58 kB
build/server/assets/logo-dark-pX2395Y0.svg      6.10 kBq
build/server/assets/logo-light-CVbx2LBR.svg     6.13 kB
build/server/assets/server-build-DxGxw3kV.css  15.23 kB
build/server/index.js                          11.38 kB
✓ built in 434ms
```
