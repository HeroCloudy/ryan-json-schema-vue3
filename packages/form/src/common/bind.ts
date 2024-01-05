import type { SetupContext } from 'vue'

export const bindMethod = (getFormRef: any) => {
  // 重置表单
  const reset = () => {
    const formRef = getFormRef()
    formRef && formRef.reset()
  }

  const validate = (callback: any) => {
    const formRef = getFormRef()
    formRef && formRef.validate(callback)
  }

  return {
    reset,
    validate
  }
}

export const bindEvent = (context: SetupContext, formData: Record<string, any>) => {
  const onChange = (key: string, value: any): void => {
    context.emit('data-change', key, value, formData)
  }

  const onEnterUp = (e: KeyboardEvent): void => {
    context.emit('enter-up', e, formData)
  }

  return {
    onDataChange: onChange,
    onEnterUp
  }
}
