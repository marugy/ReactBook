import React from "react";
const styles = {
  wrapper:{
    margin:8,
    padding : 8,
    display:"flex",
    flexDirection:"row",
    border:"1px solid grey",
    borderRadius : 16, 
  },
  imageContainer : {},
  image : {
    width:50,
    height:50,
    borderRadius:25,
  },
  contentContainer : {
    marginLeft : 8,
    display:"flex",
    flexDirection:"column",
    justifyContent:"Center",
  },
  nameText:{
    color:"black",
    fontSize: 16,
    fontWeight:"bold"
  },
  commentText:{
    color:"black",
    fontSize: 16,
  }
}
function Comment(probs){
  return (
  <div style={styles.wrapper}>
    <div style={styles.imageContainer}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" style={styles.image} alt={""}/>
    </div>
    <div style={styles.contentContainer}>
      <div style={styles.nameText}>{probs.name}</div>
      <div style={styles.commentText}>{probs.comment}</div>
    </div>
  </div>)
}
export default Comment;