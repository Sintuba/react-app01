import { Global } from '@emotion/react'

const Fonts = () => (
    <Global
        styles={`
            @font-face{
                font-family:'Black Ops One';
                src:url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');;
            }
        `}
    />
)

export default Fonts;