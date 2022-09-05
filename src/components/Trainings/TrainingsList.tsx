import { useNavigate } from "react-router-dom"
import { List, TrainingItem } from "./Trainings.styled"
import {ITraining} from "types/types"

interface IProps {
    items: ITraining[],
    weekId: number
}

export const TrainingsList = ({items, weekId}: IProps) => {
    const navigate=useNavigate()

    return <List>
        {items.map(({title,id, workout_duration})=>
        <TrainingItem key={id} onClick={()=>navigate(`/trainings/${weekId}/${id}`)}>
            <span>{title}</span>
            <p>{workout_duration}</p>
        </TrainingItem>)}
    </List>
}