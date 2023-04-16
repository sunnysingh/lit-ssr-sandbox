# 🔥 Lit SSR Sandbox

This is a testing sandbox for [Lit](https://lit.dev/) and [SSR](https://lit.dev/docs/ssr/overview/).

The purpose of this is to explore the possibility of an alternative to the currently popular meta-frameworks for proprietary UI libraries. What if we could build an app with just standard web components?

## Usage

Currently this sandbox is a bare bones example of server side rendering a simple component.

To get started, ensure you have Node.js 18 and install dependencies:

```sh
npm install
```

We have a component defined in [components/ui-alert.mjs](./components/ui-alert.mjs), and our entry file which runs SSR is [index.mjs](./index.mjs). We can run it now:

```sh
npm start
```

You should see the following output:

```
Rendering...
Done ✨

Result HTML:
<!--lit-part QVXr6EG7LjU=--><ui-alert  message="It&#39;s lit!"><template shadowroot="open" shadowrootmode="open"><!--lit-part y1KkPXWsCxI=--><p aria-role="alert"><!--lit-part-->It&#39;s lit!<!--/lit-part--></p><!--/lit-part--></template></ui-alert><!--/lit-part-->
```

The result HTML can be provided on the server side. Note the template and special comments which enables [client side hydration](https://lit.dev/docs/ssr/client-usage/).

## Caveats

There are many, but most notably:

1. Lit is a dependency. While this is a conscious choice to reduce boilerplate and provide useful features that other UI libraries provide, it's technically not pure web components.
2. Lit's SSR feature is experimental, but there are integrations with popular frameworks including [Eleventy](https://github.com/lit/lit/tree/main/packages/labs/eleventy-plugin-lit#lit-labseleventy-plugin-lit) and [Astro](https://docs.astro.build/en/guides/integrations-guide/lit/).
3. Developing a meta-framework for Lit would be extremely time consuming, but it would be a great option to have for anyone wishing to build evergreen websites.
