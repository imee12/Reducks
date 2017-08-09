// incremement
export function increment(index){
  return {                      //actions take two things
    type: 'INCREMENT_LIKES',   // what happened
    index                       // what needs to change
  }
}


// add comments
export function addComment(postId, author, comment){
  console.log("dispatch comment");
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comments

export function removeComment(postId, i){
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
