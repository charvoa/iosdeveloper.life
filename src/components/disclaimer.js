import React from "react"
import ProductHunt from "../components/producthunt"

class Disclaimer extends React.Component {
    render() {
        return (
            <footer class="footer">
                <div class="content has-text-centered">
                <ProductHunt />
                    <p>
                        <strong>iOS Developer.life</strong> by <a href="https://twitter.com/NicolasCharvoz">Nicolas Charvoz</a>. Based on an original idea by <a href="https://twitter.com/florianmari">Florian Mari</a><br/>
                        © No-Copyright
                    </p>
                </div>
            </footer>
        )
    }
}

export default Disclaimer