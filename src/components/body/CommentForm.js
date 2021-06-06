import React, {Component} from 'react';
import {Form, Button, Input} from 'reactstrap'

// const mapDispatchToProps = dispatch =>{
//     return{
//         addComment:(dishId, author, rating, comment) => dispatch({
//                 type: "ADD_COMMENT",
//                 payload: {
//                     dishId: dishId,
//                     author: author,
//                     rating: rating,
//                     comment: comment
//                 }
//         }),
//     }
// }

class CommentForm extends Component{
    constructor (props) {
        super(props)
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
       this.props.addComment(
            this.props.dishId,
            this.state.author,
            this.state.rating,
            this.state.comment
        )

        this.setState({
            author: '',
            rating: '',
            comment: ''
        })
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input 
                    type="text"
                    name="author"
                    value={this.state.author}
                    placeholder="Your Name" 
                    onChange={this.handleInputChange}
                    required />
                    <br/>
                    <label  htmlFor="rating">Give a rating</label>
                    <Input
                        type="select"
                        name="rating"
                        onChange={this.handleInputChange}
                        value={this.state.rating} required>
                            <option></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                    </Input>
                    <br/>
                    <Input 
                        type="textarea"
                        name="comment"
                        value={this.state.comment}
                        placeholder="Your Comment"
                        onChange={this.handleInputChange}
                        required />
                    <br/>
                    <Button type="submit">Submit Comment</Button>
                </Form>
            </div>
        )
    }
}

// export default connect(null,mapDispatchToProps)(CommentForm);
export default CommentForm