import React from "react"

import { ContainerWrapper } from "./index.style"

const Container = (props) => {
    return <ContainerWrapper>{props.children}</ContainerWrapper>
}

export default Container
