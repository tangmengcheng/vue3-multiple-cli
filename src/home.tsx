import { defineComponent } from 'vue'
import './index.sass'
export default defineComponent({
    name: 'Home',
    setup() {
        return () => {
            return (
                <div class='home'>
                    <h1 class='title'>home hellow</h1>
                </div>
            )
        }
    }
})