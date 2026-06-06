import React from 'react'
import {Timeline} from '../Ui/timeline'
import { TimelineItem } from '../Ui/timeline'
import Card from '../Ui/card'
export const CertificationCard = () => { 
  return (
    <Card title="My Certification">
      <Timeline>
        {EducationData.map((item, index) => (
            <TimelineItem
            key={index}
            date={item.date}
            title={item.title}
            subTitle={item.stream}
            tag={item.tag}
            />
        ))}
      </Timeline>
    </Card>
  )
}

const EducationData = [
    
    {
        date: "2019",
        title: "Graduation",
        stream: "BSc",
        tag:"Magadh University"
    }, 
    {
       date:"2014",
       title:"Intermediate",
       stream: "Science",
       tag:"Jagdam College"
    },
    {
        date:"2012",
        title:"10'th",
        stream: "All Subject",
        tag:"Middle School Nanda Mura & High School Chanpur"
     }
]

