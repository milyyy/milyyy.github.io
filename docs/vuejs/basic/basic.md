## 组件传值
### prop传值（在父组件中通过v-bind绑定定义在data中的数据，可以传递一个对象）

父组件

```html
<div :style="{fontSize: postFontSize + 'em'}">
  <HelloWorld
    v-for="post in posts"
    :key="post.id"
    :msg="post" />
</div>
```
```js
...
components: {
  HelloWorld
},
data() {
  return {
    posts: [
      { id: 1, title: "My journey with Vue", content: "content01" },
      { id: 2, title: "Blogging with Vue", content: "content02" },
      { id: 3, title: "Why Vue is so fun", content: "content03" }
    ],
    postFontSize: 1
  };
},
```

子组件：

```html
<section class="section">
  <h3>{{ msg.title }}</h3>
  <div v-html="msg.content"></div>
</section>
```
```js
export default {
  // ...
  // props接收定义在父组件中的属性
  props: {
    msg: Object
  }
};
```

### $emit监听事件  
* 在父组件中通过v-on绑定定义在methods中的自定义方法，子组件通过$emit监听/接收函数

父组件

```html
<HelloWorld
  v-for="post in posts"
  :key="post.id"
  :msg="post"
  v-on:enlarge-text="onEnlargeText" />
```
```js
methods: {
  onEnlargeText: function(enlargeAmount) {
    this.postFontSize += enlargeAmount
  }
}
```

子组件

```html
<!-- $emit接收（调用）定义在父组件中的事件enlarge-text,并传参-->
<button v-on:click="$emit('enlarge-text', 0.1)">enlarge text</button>
```

### prop单向数据流如何进行双向绑定    

>注意带有 .sync 修饰符的 v-bind 不能和表达式一起使用 (例如 v-bind:title.sync=”doc.title + ‘!’” 是无效的)。取而代之的是，你只能提供你想要绑定的属性名，类似 v-model。 详见[.sync修饰符](https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6)     

父组件
```html
<!-- prop属性的双向绑定 -->
<text-document
  v-on:update:title="doc.title = $event"
  v-bind:title="doc.title"
/>
<!-- 简写， sync对一个 prop 进行“双向绑定” -->
<text-document v-bind:title.sync="doc.title"></text-document>
```
```js
data() {
  return {
    // ...
    doc: {
      title: "this is a old title"
    }
  }
}
```

子组件

```html
<template>
  <div>
    <p>
      {{ title }}
    </p>
    <button @click="$emit('update:title', 'newTitle')">update</button>
  </div>
</template>
```
```js
export default {
  props: ["title"]
};
```
vue Devtools对比：  
更新前：title: "this is a old title"    
更新后：title: "newTitle"

## 插槽
```html
<!-- 父组件 --About.vue -->

<!-- 通过prop及传递了属性,又通过slot进行内容分发 -->
<NavigationLink url="/">
  <!-- slot的位置 可以插入任意内容-->
  <h1>first</h1>
  <h3>second</h3>
</NavigationLink>
``` 
```html
<!-- 子组件NavigationLink.vue -->

<a v-bind:href="url" class="nav-link">
  <!-- 如果没有包含一个 <slot> 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃 -->
  <slot>
    这里是默认显示的内容，如果父组件有内容将会替换这里默认内容。
  </slot>
</a>
```
```js
export default {
  props: ["url"]
};
```    
### 多插槽使用 v2.6+（具名插槽）    
> **有时我们需要多个插槽,对于这样的情况，slot 元素有一个特殊的特性：name。这个特性可以用来定义额外的插槽,一个不带 name 的 slot 出口会带有隐含的名字“default”。在向具名插槽提供内容的时候，我们可以在一个 template 元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供其名称。** 更多详见：[具名插槽](https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD)

```html
<!-- 父级About.vue -->

<BaseLayout>
  <template v-slot:header>
    header插槽显示的区域
  </template>

  <p>
    无命名，为默认区域，相当于v-slot:default
  </p>

  <template v-slot:footer>
    footer插槽显示的区域
  </template>
</BaseLayout>
```  

```html
<!-- 子级BaseLayout.vue -->

<div class="container">

  <header>
    <!-- 我们希望把页头放这里 -->
    <slot name="header"></slot>
  </header>

  <main>
    <!-- 我们希望把主要内容放这里 -->
    <slot></slot>
    <!-- 一个不带 name 的 <slot> 出口会带有隐含的名字“default”。 -->
  </main>

  <footer>
    <!-- 我们希望把页脚放这里 -->
    <slot name="footer"></slot>
  </footer>

</div>
```

## 编译作用域
```html
<!-- 父级about.vue -->

<!-- 子组件的作用域只在子组件内部 -->
<navigation-link url="/profile">
  Clicking here will send you to: {{ url }}
  <!--
  这里的 `url` 会是 undefined，因为 "/profile" 是
  _传递给_ <navigation-link> 的而不是
  在 <navigation-link> 组件*内部*定义的。
  -->
</navigation-link>
```
上面第一遍看也许不能够理解，那么我们可以参考官方文档最为重要的一句话：  
> **父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的**。 详见：[编译作用域](https://cn.vuejs.org/v2/guide/components-slots.html#%E7%BC%96%E8%AF%91%E4%BD%9C%E7%94%A8%E5%9F%9F)  

## 编程式导航
#### router.push(), router.replace()
* router.push()的几种用法 [官方文档说明](https://router.vuejs.org/zh/guide/essentials/navigation.html) 

```js
// 字符串
router.push('home')
router.push({ name: 'user', params: { userId: '123' }})
// 命名的路由
// 带查询参数，变成 /register?plan=private
router.push({ path: 'home' })
router.push({{ path: `/user/${userId}` }})
router.push({ path: 'register', query: { plan: 'private' }})
```  
<strong>小结：</strong>  
router.push：这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL  
router.replace：它不会向 history 添加新记录，而是跟它的方法名一样，替换掉当前的 history 记录。  
router.go(n)这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，如router.go(-1)后退一步，router.go(3)前进3步记录    

## 路由解耦  
>  [在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。](https://router.vuejs.org/zh/guide/essentials/passing-props.html#%E5%B8%83%E5%B0%94%E6%A8%A1%E5%BC%8F)  

### $route 的耦合  
```html
<!-- User中 -->
<p>使用$route未解耦前的id获取:{{ $route.params.id }}</p>
```  
### 通过 props 解耦
#### 只需在路由配置文件中加入props: true, User组件通过props可以接收到解耦所得数据
```js
// index.js
{
  path: "/user/:id",
  name: "user",
  component: () => import("@/views/User.vue"),
  // 解耦需在此加入props：true. 就可以在任何地方使用该组件，相当于公用组件的形式
  props: true
}  

// User.vue
<p>使用props解耦后直接获取的：{{ name }}</p>

export default {
  props: ['name']
}

```