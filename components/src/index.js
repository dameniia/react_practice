import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from "../src/CommentDetail.js"
import ApprovalCard from './ApprovalCard.js'


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Nate"
                    timeAgo="Today at 1:34pm"
                    comment={faker.commerce.productName()}
                    image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Kate"
                    timeAgo="Today at 9:05am"
                    comment={faker.commerce.productName()}
                    image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 4:45pm"
                    comment={faker.commerce.productName()}
                    image={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))