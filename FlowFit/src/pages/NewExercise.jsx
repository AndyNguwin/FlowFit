import { Grid, Col, Card, Textarea, TextInput, Text, Button} from "@tremor/react";
import NavBar from '../components/NavBar.jsx';

function NewExercise() {
    return (
        <div className="flex flex-col gap-10">
            <NavBar/>

            <Grid numItems={1} numItemsSm={1} numItemsLg={1} className="gap-2 grid-cols-3">

                <Col>
                    <Card>
                        <TextInput class="ExerciseName" placeholder="Exercise Name" />
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <TextInput class="ExerciseType" placeholder="Exercise Type"/>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <TextInput class="ExerciseType" placeholder="Weight, Time, or etc."/>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Button>Add a Custom Exercise</Button>
                    </Card>
                </Col>

            </Grid>
        </div>
        
        

    )
}

export default NewExercise;