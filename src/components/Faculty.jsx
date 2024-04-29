import React from 'react'
import Card from './Card'

function Faculty() {
  const faculty = [
    {
      name: 'Dr.Mohan SG',
      image: 'http://ncops.ac.in/admin/photo/7/faculty/18/209.jpg',
      description: 'Professor & Head of the dept ISE',
      social: ['link1', 'link2', 'link3']
    },
    {
      name: 'Dr. Sudhir Shenai',
      image: 'http://ncops.ac.in/admin/photo/7/faculty/18/704.jpg',
      description: 'Associate Professor',
      social: ['link1', 'link2', 'link3']
    },
    {
      name: 'Deepika K M',
      image: 'http://ncops.ac.in/admin/photo/7/faculty/18/224.jpg',
      description: 'Assistant Professor',
      social: ['link1', 'link2', 'deepika.km@nmit.ac.in']
    },
    {
      name: 'Dr. Manjunath B A',
      image: 'http://ncops.ac.in/admin/photo/7/faculty/18/222.jpg',
      description: 'Associate Professor',
      social: ['link1', 'link2', 'manjunatha.ba@nmit.ac.in']
    },]

  return (
    <div id='team' className=' w-[90%] h-[90vh] m-auto my-40 text-white relative p-5'>
      <div className=' w-[30%] flex items-center justify-center absolute right-4'>
        <h1 className=' text-5xl font-extrabold leading-[4vw] underline'>
          Our <br /> Co-Ordinators
        </h1>
      </div>
      <div className='flex relative'>
        {faculty.map((value, index) => <Card key={index} value={value} index={index} />)}
      </div>
    </div>
  )
}

export default Faculty