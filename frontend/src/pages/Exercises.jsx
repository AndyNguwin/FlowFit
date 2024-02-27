import NavBar from '../components/NavBar.jsx';
import { useState } from "react";
import { TextField} from "@mui/material";
import { Button, Card, CardContent } from "@mui/material";
import axios from 'axios';



function Setup(e_name, e_type, e_numeric) {

    // Need to check if these parameters are non void

    let exercise = createExercise(e_name, e_type, e_numeric)

    console.log(exercise)

    const handleSetup = async() => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/exercise', {message: {e_name: exercise.name, e_type: exercise.type, e_numeric: exercise.numeric}});

            let serverResponse = response.data.response;
        }

        catch (error) {
            console.log(error)
        }
    }

    handleSetup()


}


function NewExercise() {
    const [exerciseName, setExerciseName] = useState("");
    const [exerciseType, setExerciseType] = useState("");
    const [exerciseNumeric, setExerciseNumeric] = useState("");

    const handleSetup = async() => {
        // console.log(exerciseName)
        // console.log(exerciseType)
        // console.log(exerciseNumeric)
        try {
            const response = await axios.post('http://127.0.0.1:5000/exercise', {message: {e_name: exerciseName, e_type: exerciseType, e_numeric: exerciseNumeric}});

            // let serverResponse = response.data.response;

        }

        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col gap-10 h-full w-full">
            <NavBar/>

            
            {/* <div className="grid grid-cols-1 justify-items-center gap-y-5 object-fit"> */}
            <div className="flex flex-col justify-center gap-y-5 items-center content-around h-full">
                <Card variant="outlined">
                    <CardContent>   
                        <TextField id="exercise-name" label="Exercise Name" variant="outlined" onChange={(e) => setExerciseName(e.target.value)}/>
                    </CardContent>
                </Card>

                <Card variant="outlined">
                    <CardContent>   
                        <TextField id="exercise-type" label="Exercise Type" variant="outlined" onChange={(e) => setExerciseType(e.target.value)}/>
                    </CardContent>
                </Card>

                <Card variant="outlined">
                    <CardContent>   
                        <TextField id="exercise-numeric" label="Exercise Numeric" variant="outlined" onChange={(e) => setExerciseNumeric(e.target.value)}/>
                    </CardContent>
                </Card>

                <Button sx={{color: '#ffffff',backgroundColor: '#4682A9','&:hover':{backgroundColor: '#4682A9'},'&:active':{backgroundColor: '#749BC2'}}}
                    variant="contained" onClick={handleSetup}>Add Custom Exercise</Button>

                

            </div>
        </div>
        

    )

}

export default NewExercise;