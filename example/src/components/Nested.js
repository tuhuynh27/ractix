import { onMounted, reactive, ref } from '@reactif/core'
import useDebug from '../hooks/common/useDebug'

const Child = {
  setup(props) {
    useDebug('Child')

    const state = reactive({
      count: 0,
      text: ''
    })

    onMounted(() => {
      setInterval(() => {
        state.count++
      }, 1000)
    })

    return {
      state,
      heading: props.heading,
      coin: props.coin
    }
  },
  render() {
    return `
      <div style="margin: 1rem; padding: 1rem; border: 1px solid black;">
        <h3>{{ heading }}</h3>
        <div>Internal Count State: {{ state.count }}</div>
        <div>Coin: {{ coin }}</div>
        <input model="state.text"/> -> <span if="state.text">{{ state.text }}</span><span else>Empty</span>
      </div>
    `
  }
}

const Parent = {
  components: {
    'child-component': Child
  },
  setup() {
    useDebug('Parent')

    const state = reactive({
      childToggle: true
    })

    const toggleChild = () => (state.childToggle = !state.childToggle)

    const coin = ref(0)
    const increaseCoin = () => (coin.value += 1000)

    return {
      state,
      coin,
      toggleChild,
      increaseCoin
    }
  },
  render() {
    return `
      <div>
        <h2>Parent Component</h2>
        <button @click="increaseCoin">+1000 coin</button>
        <p>This is parent component</p>
        
        <button @click="toggleChild">Toggle Child</button>

        <child-component if="state.childToggle" heading="This is child" :coin="coin">
          <p>Slot</p>
        </child-component>
        <div>{{ coin }}</div>
        
        <div else>Child is unmounted, click "Toggle Child" to re-mount it</div>
      </div>
    `
  }
}

export default Parent
