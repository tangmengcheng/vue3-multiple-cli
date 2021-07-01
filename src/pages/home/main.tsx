import { defineComponent } from 'vue'
import './index.scss'
import img from '../../assets/images/logo.png'
export default defineComponent({
    name: 'Home',
    setup() {
        return () => {
            return (
                <div class='home'>
                    <h1 class='title'>home hello</h1>
                    <a href="./about.html">去about</a>
                    <div class="image-box"></div>
                    {/* <img src="./assets/images/logo.png" /> */}
                    <img src={img} />
                </div>
            )
        }
    }
})