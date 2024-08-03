import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Error = ({ message }) => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {message}
    </Alert>
  );
};

export default Error;
