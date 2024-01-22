import { Schema } from '@ryan-json-schema-vue3/utils'

export const demoSchema: Schema = {
  properties: {
    id: {
      type: 'string',
      description: 'ID'
    },
    username: {
      type: 'string',
      description: '姓名'
    },
    age: {
      type: 'number',
      description: '年龄'
    },
    gender: {
      type: 'string',
      description: '性别',
      oneOf: [
        { const: '0', title: '男' },
        { const: '1', title: '女' }
      ]
    },
    favor: {
      type: 'array',
      description: '兴趣',
      anyOf: []
    },
    validDate: {
      type: 'array',
      format: 'date',
      description: '有效日期'
    },
    timeOff: {
      type: 'array',
      format: 'datetime',
      description: '请假时间'
    },
    remark: {
      type: 'remark',
      description: '备注'
    }
  }
}
