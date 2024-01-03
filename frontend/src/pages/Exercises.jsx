import NavBar from '../components/NavBar.jsx';
import { useState } from "react";
import { TextField} from "@mui/material";
import { Button, Card, CardContent } from "@mui/material";


function handleClick() {
    let exerciseObj = {
        name: exerciseName,
        type: exerciseType,
        numeric:  exerciseNumeric
    };
    
    // DO SQL STUFF
}


function NewExercise() {


    const [exerciseName, setExerciseName] = useState("");
    const [exerciseType, setExerciseType] = useState("");
    const [exerciseNumeric, setExerciseNumeric] = useState("");

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
                    variant="contained" onClick={handleClick}>Add Custom Exercise</Button>

                

            </div>
        </div>
        

    )

    // const x = {
        //     who: "test"
        // };

        // function handleSubmit(){
        //     let exercise = {
        //         name: exerciseName, 
        //         type: exerciseType
        //     };    

        // }

}

export default NewExercise;