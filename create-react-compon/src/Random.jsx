function Random(){
    let number = Math.random() * 100;
    return <h3 style={{'background-color':'#659569', 'color':'#755485'}}>Random numbers {Math.round(number)}</h3>
}
export default Random;