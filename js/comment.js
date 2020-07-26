function render(data) {
    // const element = comment[i];
    const name = data.name;
    const time = data.time;
    const body = data.body;
    const html = `<div class="comment-box">
    <div class="right-panel">
      <span><h5>${name}</h5></span>
      <div class="comment-date">${time}</div>
      <p>${body}</p>
    </div>
    
  </div>`
    
  $('#comment-container').append(html)
  }
  
  $(document).ready(function() {
    let comment=[];
    if(!localStorage.commentData){
      localStorage.commentData = [];
    }else{
        comment = JSON.parse(localStorage.commentData)
    }
    
    
  
  
  for (let i = 0; i < comment.length; i++) {
    render(comment[i]);
  }
  
  $('#removeComment').click(function(){
  
    
    localStorage.removeItem('commentData');
    
    location.reload();
  })
  
  
  
  $('#addComment').click(function() {
    const addObj = {
      "name": $('#name').val(),
      "time": $('#time').val(),
      "body": $('#bodyText').val(),
    };
    console.log(addObj);
    // comment.push(addObj);
    localStorage.commentData = JSON.stringify(comment);
    render(addObj);
    // $('#name').val('');
    // $('#time').val(''),
    // $('#bodyText').val('');
  })
  })
  
  