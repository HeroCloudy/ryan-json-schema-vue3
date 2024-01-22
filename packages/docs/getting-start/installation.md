---
title: 安装使用
description: ryan json schema 安装使用
---

# Ryan Json Schema 组件库安装使用

Ryan Json Schema 组件库包含三个模块：

| package                      | description                                                      |
|------------------------------|------------------------------------------------------------------|
| @ryan-json-schema-vue3/utils | 提供 JSON Schema 组件相关的通用类型定义、通用的属性 props 定义、常量、通用工具方法              |
| @ryan-json-schema-vue3/form  | 提供表单相关的组件，如 json-form、pro-form、json-description 等组件，依赖于 utils 模块 |
| @ryan-json-schema-vue3/table | 提供列表相关的组件，如 json-table、pro-table，依赖于 utils 模块                    |

## 使用 JSON Schema 表单

JSON Schema 表单基于 Element Plus 提供的 ElForm 等组件实现，故需要引入 Element Plus。

1. 安装依赖：

```bash
# 添加 Element Plus
pnpm add element-plus
# 添加 utils 模块
pnpm add @ryan-json-schema-vue3/utils
# 添加 json-schema-form
pnpm add @ryan-json-schema-vue3/form
```

2. 在 `main.ts` 中引入 Element Plus 和 JSON Schema Form:

```typescript
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import RyanForm from '@ryan-json-schema-vue3/form'

// ...

app.use(ElementPlus);
app.use(RyanForm);
```

由于 `@ryan-json-schema-vue3/form` 中提供了多个组件，可以按需引入使用到的组件：
```typescript
import { RyJsonForm, RyJsonFormDescription } from '@ryan-json-schema-vue3/form'
```

3. 使用组件

```vue
<ry-json-form :schema="" :ui-schema="" :model=""
></ry-json-form>
```

## 使用 JSON Schema 列表

JSON Schema 列表基于 vxe-table 实现，故需要引入 vxe-table。

1. 安装依赖：

```bash
# 添加 vxe-table
pnpm add vxe-table xe-utils
# 添加 utils 模块
pnpm add @ryan-json-schema-vue3/utils
# 添加 json-schema-table
pnpm add @ryan-json-schema-vue3/table
```

2. 在 `main.ts` 中引入 Element Plus 和 JSON Schema Form:

```typescript
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import RyanTable from '@ryan-json-schema-vue3/table'

// ...

app.use(VXETable);
app.use(RyanTable);
```

由于 `@ryan-json-schema-vue3/form` 中提供了多个组件，可以按需引入使用到的组件：
```typescript
import { RyJsonTable } from '@ryan-json-schema-vue3/table'
```

3. 使用组件

```vue
<ry-json-table :schema="" :ui-schema="" :model=""
></ry-json-table>
```