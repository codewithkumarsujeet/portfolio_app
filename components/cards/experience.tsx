import React from 'react'
import { Timeline } from '../Ui/timeline'
import { TimelineItem } from '../Ui/timeline'
import Card from '../Ui/card'
const ExperienceCard = () => {
  return (
    <Card title="MyExperience" className=''>
      <Timeline>
        <TimelineItem
          date="2020- Till Now"
          title="Full Stack Developer"
          subTitle="Fresher"
          link="/t"
          tag="new"
        />
      </Timeline>
    </Card>
  )
}

export default ExperienceCard
