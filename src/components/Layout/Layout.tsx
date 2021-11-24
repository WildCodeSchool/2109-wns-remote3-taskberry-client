import { Fragment, ReactFragment } from 'react'

const Layout = (props: ReactFragment) => {
    return (
        <Fragment><main>(props.children)</main></Fragment>
    )
}

export default Layout