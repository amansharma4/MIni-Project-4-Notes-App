import React, { useState, useEffect } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const App = () => {
  const classes = useStyles();
  const [isFormOpen, triggerFormOpen] = useState("false");
  const [notes, setNotes] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });
  let arr = [];
  const { title, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    arr.push(formData);
    localStorage.setItem("note", JSON.stringify(arr));

    const data = JSON.parse(localStorage.getItem("note"));
    setNotes(data);
    console.log(data);
  };

  // useEffect(() => {

  // }, []);

  return (
    <div>
      {!notes ? (
        isFormOpen ? (
          <div className="text">No notes available</div>
        ) : (
          <div>
            {" "}
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <form
                  className={classes.form}
                  onSubmit={(e) => onSubmit(e)}
                  noValidate
                >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Title"
                    label="Title"
                    name="title"
                    onChange={(e) => onChange(e)}
                    // autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="description"
                    label="Description"
                    type="text"
                    onChange={(e) => onChange(e)}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Save Notes
                  </Button>
                </form>
              </div>
            </Container>
          </div>
        )
      ) : isFormOpen ? (
        <div>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <form
                className={classes.form}
                onSubmit={(e) => onSubmit(e)}
                noValidate
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="Title"
                  label="Title"
                  name="title"
                  onChange={(e) => onChange(e)}
                  // autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  type="text"
                  onChange={(e) => onChange(e)}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Save Notes
                </Button>
              </form>
            </div>
          </Container>
        </div>
      ) : (
        <div> card</div>
      )}
      {/* {isFormOpen && (
        <div>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <form
                className={classes.form}
                onSubmit={(e) => onSubmit(e)}
                noValidate
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="Title"
                  label="Title"
                  name="title"
                  onChange={(e) => onChange(e)}
                  // autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  type="text"
                  onChange={(e) => onChange(e)}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Save Notes
                </Button>
              </form>
            </div>
          </Container>
        </div>
      )} */}
      <div className="icon">
        <Fab
          onClick={() => triggerFormOpen(!isFormOpen)}
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};

export default App;
