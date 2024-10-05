# NEXT JS w. VEDA UI

This is a test NEXT JS instance to understand the requirement for [VEDA-UI](https://github.com/nasa-IMPACT/veda-ui) to be used with a NEXT JS instance.

This repo is based on Portfoilo Blog starter from NEXT JS: https://portfolio-blog-starter.vercel.app

## How to install veda-ui

VEDA UI package is on Verdaccio instance until its experimental phase is done. You need to scope `@developmentseed/veda-ui` to Verdaccio instance to successfully install it. To do so, run the command below before `yarn install`.

```
yarn config set @developmentseed:veda-ui http://verdaccio.ds.io:4873/
```
