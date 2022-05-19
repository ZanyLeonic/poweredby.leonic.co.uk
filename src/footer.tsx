import { Component } from "react"

interface FooterProps {
    author: string,
    authorURL: string,
    photo: boolean
}
class Footer extends Component<FooterProps> {

    constructor(props: FooterProps) {
        super(props)
    }

    render() {
        return ( 
            <div className="footer-copyright">
                <div className="container center">
                © {(new Date().getFullYear())} Leo Durrant
                </div>
            </div>
        ) 
    }
}

export default Footer