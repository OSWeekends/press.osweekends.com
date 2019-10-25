# Hello VuePress
 [[toc]]


::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```


``` js{4,5}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```


::: v-pre
`{{ This will be displayed as-is }}`
:::


### Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/> <Badge text="default theme"/>
