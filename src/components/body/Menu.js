import React, {Component} from 'react';
import MenuItem from './Menuitem'
import DishDetail from './DishDetail';
import {CardColumns, Modal, ModalBody, ModalFooter, Button} from 'reactstrap';
import {connect} from 'react-redux';
import {addComment, fetchDishes} from '../../redux/actionCreators';
import Loading from './loading';


const mapStateToProps = state =>{
    return {
        dishes:state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addComment:(dishId, author, rating, comment) => dispatch(
            addComment(dishId, rating, author, comment)),

        fetchDishes: () => dispatch(fetchDishes())
    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish
        });
        this.toggleModal();
    }

    toggleModal = () =>{
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    componentDidMount() {
        this.props.fetchDishes()
    }
    render() {
        if (this.props.dishes.isLoading) {
            return (
                <Loading />
            )
        }
        else {
            document.title="Menu";
            const menu = this.props.dishes.dishes.map(item => {
                return (
                    <MenuItem 
                    dish={item} 
                    key={item.id}
                    DishSelect={() => this.onDishSelect(item)}/>
                )
            })

            let dishDetail = null
            if (this.state.selectedDish != null) {
                const comments = this.props.comments.filter(comment => comment.dishId === this.state.selectedDish.id)
                dishDetail = <DishDetail dish={this.state.selectedDish}
                comments= {comments}
                addComment={this.props.addComment} />
            }
            return (
                <div className="container">
                    <div className="row">
                            <CardColumns>
                                {menu}
                            </CardColumns>
                            <Modal isOpen={this.state.modalOpen}>
                                <ModalBody>
                                    {dishDetail}
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="secondary" onClick={this.toggleModal}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </Modal>
                    </div>
                </div>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);