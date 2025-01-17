import style from "./ErrorMessage.module.css";
const ErrorMessage = ({ fi }) => {
  return (
    <>
      {fi.length === 0 && (
        <h3 className={style.ErrorMessage}>
          I'm Still Hungry Bring me some Food
        </h3>
      )}
    </>
  );
};

export default ErrorMessage;
