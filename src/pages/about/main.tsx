import { defineComponent } from 'vue'
import './index.scss'
export default defineComponent({
    name: 'About',
    setup() {
        return () => {
            return (
                <div class='about'>
                    <h1 class='title'>about hello</h1>
                    <a href="./home.html">去home</a>
                </div>
            )
        }
    }
})