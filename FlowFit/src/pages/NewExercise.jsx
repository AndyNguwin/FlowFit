import NavBar from '../components/NavBar.jsx';
import { useState } from "react";
import { TextField} from "@mui/material";
import { Card, CardContent } from "@mui/material";

function NewExercise() {

    const [exerciseName, setExerciseName] = useState("");
    const [exerciseType, setExerciseType] = useState("");

    // const x = {
    //     who: "test"
    // };

    // function handleSubmit(){
    //     let exercise = {
    //         name: exerciseName, 
    //         type: exerciseType
    //     };    

    // }

    return (
        <div className="flex flex-col gap-10 h-full w-full">
            <NavBar/>

            
            {/* <div className="grid grid-cols-1 justify-items-center gap-y-5 object-fit"> */}
            <div className="flex flex-col justify-center gap-y-5 items-center content-around h-full">
                <Card variant="outlined">
                    <CardContent>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => exerciseName = e.target.value}/>
                        {/* <button onSubmit={handleSubmit}/> */}
                    </CardContent>
                </Card>

            </div>
        </div>
        
        

    )
}

export default NewExercise;