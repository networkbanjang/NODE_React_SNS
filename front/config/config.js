const backurl=()=>{
  if(process.env.NODE_ENV ==="production"){
    return "http://54.180.128.214";
  }else{
    return "http://localhost:3065";
  }
}   //계속 바뀌는거 주의

export default backurl;