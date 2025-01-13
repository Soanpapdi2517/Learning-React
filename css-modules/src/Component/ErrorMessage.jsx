const ErrorMessage = ({ fi }) => {
  return (
    <>
      {fi.length === 0 && (
        <h3 className="text-center">I'm Still Hungry Bring me some Food</h3>
      )}
    </>
  );
};

export default ErrorMessage;
