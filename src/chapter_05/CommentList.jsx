import React from "react";
import Comment from "./Comment";


const comments = [
  {
    name : "얍얍1",
    comment : "오늘의 날짜 11월 1일",
  },
  {
    name : "얍얍2",
    comment : "오늘의 날짜 11월 2일",
  },
  {
    name : "얍얍3",
    comment : "오늘의 날짜 11월 3일",
  }
]

function CommentList(probs){
  return <div>
    {comments.map((comment)=>{
      return (
        <Comment name={comment.name} comment={comment.comment}/>
      )
    })}
  </div>
}

export default CommentList;
