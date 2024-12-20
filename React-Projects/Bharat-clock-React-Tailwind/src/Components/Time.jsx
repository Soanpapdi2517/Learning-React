function Time() {
  let time = new Date();
  return <h2 class='tracking-wide my-1.5 font-sans hover:font-serif'>This is the Current Date & time:
     <span class="my-1" > {time.toLocaleDateString()} - {time.toLocaleTimeString()}</span></h2>;
}

export default Time;
