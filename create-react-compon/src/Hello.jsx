function Hello(){
    let num = 789;
    let alien = 'alien X';
    let fullName = () => {
        return 'PK';
    }
    return <p>{fullName()} hello your number is {num} this is future created by {alien}</p>
}
export default Hello;