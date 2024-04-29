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
      <div className=' absolute  w-1/2 h-1/2 left-0 animate-spin-slow'>
      <svg className='blur-2xl' id="visual" viewBox="0 0 500 500" width="600" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(248.63581286129147 248.19407386605502)"><path d="M80.4 -143.1C108.7 -122.9 139.2 -110.4 163.7 -87.9C188.2 -65.3 206.6 -32.7 204 -1.5C201.4 29.7 177.8 59.3 161.1 95.4C144.4 131.5 134.7 174 109 190.2C83.3 206.3 41.7 196.2 3.8 189.7C-34.2 183.2 -68.3 180.4 -102.4 169C-136.5 157.7 -170.4 137.8 -186 108.3C-201.6 78.7 -198.8 39.3 -199.9 -0.7C-201.1 -40.7 -206.2 -81.3 -188.7 -107.6C-171.2 -133.9 -131.1 -145.7 -95.9 -161.9C-60.7 -178.1 -30.3 -198.5 -2.1 -194.8C26 -191.1 52.1 -163.2 80.4 -143.1" fill="#6600FF"></path></g></svg>
      </div>
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