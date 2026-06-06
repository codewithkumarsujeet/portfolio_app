import React from 'react'
import {Timeline} from '../Ui/timeline'
import { TimelineItem } from '../Ui/timeline'
import Card from '../Ui/card'
export const EducationCard = () => { 
  return (
    <Card title="My Education">
      <Timeline>
        {EducationData.map((item, index) => (
            <TimelineItem
            key={index}
            date={item.date}
            title={item.title}
            subTitle={item.stream}
            />
        ))}
      </Timeline>
    </Card>
  )
}

const EducationData = [
    {
        date:"2022-2024",
        title:"Full Stack Developement",
        stream: "Develpment"
    },
    {
        date: "2016-2019",
        title: "Graduation",
        stream: "BSc"
    }, 
    {
       date:"2012-2014",
       title:"Intermediate",
       stream: "Science"
    },
    {
        date:"2010-2012",
        title:"Schooling",
        stream: "Science, Social Science, Math, English, Hindi"
     }
]

