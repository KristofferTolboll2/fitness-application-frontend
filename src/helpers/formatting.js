export const setContent = (content) =>{
    if(content.length >= 76){
      return content.slice(0, 74).concat("...")
    }else{
      return content
    }
  }