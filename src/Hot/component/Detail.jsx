import React from 'react';

export default class Detail extends React.Component {
    constructor(props, context) {
        super(props, context)
        console.info(props)
        this.userList = props.location.state.data
    }
    render() {
        var userList = {}
        return (
            <div>
                <p>详情页面</p>
            </div>
        )
    }
}