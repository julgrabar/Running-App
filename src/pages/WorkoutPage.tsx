import { Timer } from "components/Timer/Timer"
import { Heading } from "components/Trainings/Trainings.styled"
import { makeWorkout } from "helpers/workoutMaker"
import { useState } from "react"
import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import { fetchWorkout } from "services/api-service"
import styled from "styled-components"
import playImg from "images/play.svg"
import finishedImg from "images/finished.svg"
import { Button } from "styles/Button.styled"
import { CenteredWrapper, CenteringWrapper } from "styles/CenteredWrapper"
import { IExercise, ITraining, IWarming } from "types/types"

const Status = {
  IDLE: 'idle',
  INPROGRESS: 'inProgress',
  FINISHED: 'finished'
};

export const WorkoutPage =() => {
    const [status, setStatus] = useState(Status.IDLE)
    const [currentExersice, setCurrentExersice] = useState(0)
    const { workoutId, weekId } = useParams()
    const navigate = useNavigate()
    let workout: (IWarming | IExercise)[] = [] 
    const {data, isLoading, isSuccess, isError} = useQuery<ITraining, Error>(["workout", workoutId], ()=>fetchWorkout(workoutId))
    
    if(data && workout.length === 0) {
        workout = makeWorkout(data)
    }

    const onTimerFinished= () => {
        if(currentExersice===workout.length-1){
            setStatus(Status.FINISHED)
            return
        }
        setCurrentExersice(prev => prev + 1)
    }


    return <CenteringWrapper><WorkoutWrapper>
        {isLoading && <p>Loading...</p>}

        {isError && <p>Something went wrong...</p>}

        {isSuccess && data && <>
            

            {status === Status.IDLE && <>
            <Heading dark>{data.title}</Heading>
            <Button type="button" onClick={()=> setStatus(Status.INPROGRESS)} round={{diameter: 160}} primary><img src={playImg} alt="Play"/></Button>
            </>}
            
            {status === Status.INPROGRESS && workout.length > 0 && <>
            
                <Heading dark>{workout[currentExersice].exercise_type.title}</Heading>

                <img className="exercise-img" src={workout[currentExersice].exercise_type.image} alt={workout[currentExersice].exercise_type.title}/>
                
                <Timer exersice ={workout[currentExersice]}
                onTimerFinished={onTimerFinished}/>

                
                <Controls>
                <Button  primary onClick={
                currentExersice===0 
                    ? ()=>navigate(`/trainings/${weekId}`) 
                    : ()=> setCurrentExersice(prev=>prev-1)}
                >{currentExersice===0? "Go back" : "Previous"}</Button>

                <Button  primary 
                onClick={workout.length === currentExersice+1 
                    ? ()=> setStatus(Status.FINISHED) 
                    : ()=> setCurrentExersice(prev=>prev+1)}
                >{workout.length === currentExersice+1? "Finish workout" : "Next"}</Button>
                </Controls>

                </>}
            {status === Status.FINISHED && <>
            <Heading dark>Well done! Workout is finished.</Heading>
                <img src={finishedImg} alt="Workout is finished"/>
                <Button type="button" primary onClick={()=>navigate("/trainings") } style={{marginTop: "20px"
                }}> Go back</Button>
            </>}
        </>
        }
        
    </WorkoutWrapper>
    </CenteringWrapper>
}

const WorkoutWrapper = styled(CenteredWrapper)`
    text-align: center;
    width: 100%;
    max-width: 360px;
    span {
         display: block;
    }

    img.exercise-img{
        max-height: 225px;
    }
`

const Controls = styled.div`
display: flex;
gap: 20px;
margin-top: 20px;
`