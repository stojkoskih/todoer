import {Button, Typography} from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';
import Paper from '@material-ui/core/Paper/Paper';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField/TextField';
import React from 'react';
import './App.css';

const useStyles = makeStyles({
	card: {
		maxWidth: '700px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '10px 10px',
	},
	input: {
		margin: '10px 0px',
	},
	btn: {
		marginRight: '10px',
	},
});

function App() {
	const classes = useStyles();
	const [tasks, setTasks] = React.useState([]);
	const [currentText, setCurrentText] = React.useState('');
	const handleChange = (e) => {
		setCurrentText(e.target.value);
	};
	const handleSave = (e) => {
		e.preventDefault();
		setTasks([...tasks, {text: currentText}]);
		setCurrentText('');
	};
	return (
		<Container maxWidth="lg" fixed>
			<Typography>Want to work on something cool?</Typography>
			{tasks.map((task) => (
				<Box>
					<Paper>{task.text}</Paper>
				</Box>
			))}

			<Box display="flex" justifyContent="center" alignItems="center">
				<Paper className={classes.card}>
					<TextField
						className={classes.input}
						variant="standard"
						label="Task"
						value={currentText}
						onChange={handleChange}
					/>
					<Button
						variant="contained"
						color="primary"
						className={classes.btn}
						onClick={handleSave}
					>
						Save
					</Button>
				</Paper>
			</Box>
		</Container>
	);
}

export default App;
