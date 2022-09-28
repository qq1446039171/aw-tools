const copy = {
  inserted(el, binding) {
    el.copyData = binding.value
    el.addEventListener('click', handleClick(el))
  },
  updated(el, binding) {
    el.copyData = binding.value
  },
  // beforeUnmount(el) { componentUpdated
  //   el.removeEventListener('click', el.__handleClick__)
  // }
}

function handleClick(el) {
	const input = document.createElement("input");
	input.value = el.copyData.toLocaleString();
	document.body.appendChild(input);
	input.select();
	document.execCommand("Copy");
	document.body.removeChild(input);
	console.log('复制成功！');
}
export default copy
