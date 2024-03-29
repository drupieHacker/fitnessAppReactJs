import React from 'react';
import exerciseImg from '../images/lunges.png';
import circlesImg from '../images/circles.png';
import './styles/Card.css'

const styles={
backgroundImage:'url('+circlesImg+'),linear-gradient(to right,  #A74CF2, #617BFB)'
};

class Card extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         image :'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
            
    //     }
    // }
    //se ejecuta después de que un componente es montado
// componentDidMount(){
//     setTimeout(()=>{
//      this.setState({
//          image:'http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c319.png'
//      })   
//     },5000)
// } 
render(){
    return (
      <div className="card mx-auto Fitness-Card " 
      style={styles}
      >
         
          <div className="card-body">
          <div className="row center">
          <div className="col-6">
            <img src={this.props.img} className="float-right"/>
            </div>
            <div className="col-6 Fitness-Card-Info">
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
                </div>
            </div>
          </div>

      </div>
      
    )
}
}


export default Card;