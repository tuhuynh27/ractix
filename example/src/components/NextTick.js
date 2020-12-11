import { reactive, onMounted, nextTick } from '@oddx/reactive'

function NextTick() {
  const state = reactive({
    a: 0,
    b: 0,
    c: 0
  })

  onMounted(() => {
    const el = document.querySelector('#nextTick')
    console.log(el.textContent)

    state.a = 1
    nextTick(() => {
      console.log(el.textContent)
      state.b = 2
    })
    state.b = 3
    state.c = 4
  })

  return () => `
    <div id="nextTick">
        ${state.a} ${state.b} ${state.c}
    </div>
  `
}

export default NextTick