
import React, { createRef } from 'react';
import Routers from './routers/app';

export default class AppNavigationState extends React.Component {
    constructor(props) {
        super(props)
        this.root = createRef()
    }
    render() {
        return <Routers ref={this.root}/>
    }
}