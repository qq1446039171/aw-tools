const copy = {
  bind(el, binding, vnode) {
    el.$value = binding.value
    el.handler = () => {
      let text
      if (typeof binding.value == 'function') {
        text = binding.value()
      } else {
        text = el.$value
      }
      if (text) {
        let transfer = document.createElement('input')
        document.body.appendChild(transfer)
        transfer.value = text // 这里表示想要复制的内容
        transfer.focus()
        transfer.select()
        document.execCommand('copy', false, null)
        transfer.blur()
        document.body.removeChild(transfer)
        vnode.context.$Message.success('复制成功')
        // if (this.$message) {
        //   this.$message.success('复制成功')
        // }
        console.log('复制成功')
      }
    }
    el.addEventListener('click', el.handler)
  },
  componentUpdated(el, binding) {
    el.$value = binding.value
  },
  unbind(el) {
    el.removeEventListener('click', el.handler)
  }
}

export default copy
