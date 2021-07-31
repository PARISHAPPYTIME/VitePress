---
title: Docs with VitePress
editLink: true
---

<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Times from './components/time.vue';
</script>

<HelloWorld />
<Times />

![An image](./lib/a1.png)

:tada: :100:

::: warning
warning
:::

::: danger
danger
:::

# {{ $frontmatter.title }}

1. 123123
2. 123123123

- 5848
- 89898

```javascript {1}
export default defineComponent {
    name: 'HelloWorld',
    render() {
        return (
            <h1>Hello World</h1>
        )
    }
}
```

<<< @/lib/test.js
