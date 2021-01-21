import { defineComponent } from 'vue'
import '@/styles/author.scss'

export default defineComponent({
  name: 'Author',
  props: {
    name: { type: String, default: 'if(){}else{}' }
  },
  setup(props) {
    return () => {
      return (
        <div id='author'>
          <span>Written by {props.name}</span>
        </div>
      )
    }
  }
})
