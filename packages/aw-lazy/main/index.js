const lazy = {
  inserted(el, binding) {
    const DOM = el.querySelector(binding.value.class)
    DOM.addEventListener('scroll', function () {
      const CONDITION = this.scrollHeight - this.scrollTop <= this.clientHeight
      if (CONDITION) {
        binding.value.loadFun()
      }
    })
  }
}

export default lazy
