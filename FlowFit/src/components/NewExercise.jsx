import { Card, Textarea, TextInput, Text} from "@tremor/react";
import './App.css'

function NewExercise() {
    return (
        <div class="newexerciseheader">
            <div class="navbar"></div>

            <Card>
                <TextInput class="ExerciseName" placeholder="Exercise Name" />
            </Card>

            <Card>
                <TextInput class="ExerciseType" placeholder="Exercise Type"/>
            </Card>

            <Card>
                <TextInput class="ExerciseType" placeholder="Weight, Time, or etc."/>
            </Card>


        </div>
        
        

    )
}

export default NewExercise;