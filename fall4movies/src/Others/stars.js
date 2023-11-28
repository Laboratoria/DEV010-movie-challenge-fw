import oneStar from "../images/oneStar.png" 
import twoStars from "../images/twoStars.png" 
import TreeStars from "../images/ThreeStars.png" 
import fourStars from "../images/fourStars.png" 
import fiveStars from "../images/fiveStars.png" 



function stars(rating){
  if (rating >= 9 ){
    return fiveStars
  } else if (rating >= 7) {
    return fourStars
  } else if (rating >= 5) {
    return TreeStars
  } else if (rating >= 3){
    return twoStars
  } else {
    return oneStar
  }
}

export default stars;