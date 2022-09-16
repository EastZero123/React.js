import { Button, Grid, Paper, TextField } from "@mui/material"
import { useState } from "react"

const AddTodo = (props) => {
  const [title, setTitle] = useState()

  const onInputChange = (e) => {
    setTitle(e.target.value)
  }

  const onButtonClick = () => {
    props.add({ title: title, id: "ID-" + props.itemList, done: false })
    setTitle("")
  }

  const enterkeyEvent = (e) => {
    if (e.key === "Enter") {
      onButtonClick()
    }
  }

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder="Add Todo here"
            fullWidth
            onChange={onInputChange}
            value={title}
            onKeyDown={enterkeyEvent}
          />
        </Grid>
        <Grid xs={1} md={1} item>
          <Button
            fullWidth
            color="secondary"
            variant="outlined"
            onClick={onButtonClick}
          >
            +
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default AddTodo
