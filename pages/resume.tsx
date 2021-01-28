import React from 'react'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import Head from 'next/head'

import ResumeSection from '../components/ResumeSection'


type ResumeProps = {
  work: WorkData[],
  education: EducationData[],
  projects: ProjectData[],
  skills: Skill[],
  languages: LanguageData[]
}
type WorkData = {
  company: string,
  location: string,
  title: string,
  startDate: string,
  endDate: string,
  description: string[]
}
type EducationData = {
  faculty: string,
  location: string,
  qualification: string,
  startDate: string,
  endDate: string,
  description: string[]
}
type ProjectData = {
  name: string,
  subtitle: string,
  description: string[]
}
type Skill = string
type LanguageData = {
  name: string,
  description: string[]
}

function Resume(props: ResumeProps): React.ReactElement {
  const { work, education, projects, skills, languages } = props

  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <h1 className="text-4xl">Louis Chan</h1>
      <div className="italics mb-8">Hi! I'm a software developer.</div>
      <article className="flex flex-wrap md:flex-nowrap md:space-x-16 max-w-6xl">
        <div className="w-full space-y-8 md:w-2/3">
          <ResumeSection title="Experience">
            {work.map(({ company, location, title, startDate, endDate, description }, index) => (
              <React.Fragment key={index}>
                <h3 className="space-x-1.5">
                  <span className="font-semibold">{company},</span>
                  <span>{location}</span>
                  <span>—</span>
                  <span className="italics">{title}</span>
                </h3>
                <h4 className="text-sm">{startDate} - {endDate}</h4>
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </React.Fragment>
            ))}
          </ResumeSection>
          <ResumeSection title="Education">
            {education.map(({ faculty, location, qualification, startDate, endDate, description }, index) => (
              <React.Fragment key={index}>
                <h3 className="space-x-1.5">
                  <span className="font-semibold">{faculty},</span>
                  <span>{location}</span>
                  <span>—</span>
                  <span className="italics">{qualification}</span>
                </h3>
                <h4 className="text-sm">{startDate} - {endDate}</h4>
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </React.Fragment>
            ))}
          </ResumeSection>
          <ResumeSection title="Projects">
            {projects.map(({ name, subtitle, description }, index) => (
              <React.Fragment key={index}>
                <h3 className="space-x-1.5">
                  <span className="font-semibold">{name}</span>
                  <span>—</span>
                  <span className="italics">{subtitle}</span>
                </h3>
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </React.Fragment>
            ))}
          </ResumeSection>
        </div>
        <div className="w-full space-y-8 mt-8 md:mt-0 md:w-1/3">
          <ResumeSection title="Skills">
            <ul className="list-none">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </ResumeSection>
          <ResumeSection title="Languages">
            {languages.map(({ name, description }, index) => (
              <React.Fragment key={index}>
                <h3 className="font-semibold">{name}</h3>
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </React.Fragment>
            ))}
          </ResumeSection>
        </div>
      </article>
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<ResumeProps>> {

  return {
    props: {
      work: [
        {
          company: 'BottleTech Limited (平科技)',
          location: 'Macau',
          title: 'Full-Stack Engineer',
          startDate: 'February 2018',
          endDate: 'PRESENT',
          description: [
            'This has been my main career since graduating my degree. The company is quite small and has a wide range of focuses, allowing me the freedom to gain experience with an equally wide range of technologies. During my time here, I have built websites, apps, and VR experiences, usually from scratch.',
            'The bulk of the websites were written using Laravel as a backend, and React or Vue as the frontend. We currently use AWS Lightsail to host these websites (previously we used a shared host).',
            'I wrote a native Android app called Parker, where I was able to learn modern Android development techniques. I have also done work to upgrade an old (version 4X) React Native app to the latest version of RN, where I learned a little about iOS mobile development.',
            'We also create VR Experiences using Unity, running on Oculus Quest now, and Daydream before then',
          ],
        },
      ],
      education: [
        {
          faculty: 'Imperial College London',
          location: 'UK',
          qualification: 'Computing MEng',
          startDate: 'September 2013',
          endDate: 'July 2017',
          description: [
            'The computing degree in ICL focuses on providing useful practical experience to students, with group projects working with large codebases, and considerable workloads, such as writing a compiler from scratch, or adding features to an operating system. It was a useful combination of both theory and practical.'
          ],
        },
        {
          faculty: 'Tapton School',
          location: 'Sheffield, UK',
          qualification: '4 A-Levels A*A*AA',
          startDate: 'September 2006',
          endDate: 'July 2013',
          description: [
            'I achieved two A*s and two As in Maths, Further Maths, Physics, and Chemistry during my A-Levels.'
          ],
        },
      ],
      projects: [
        {
          name: 'Personal Website',
          subtitle: 'louischan.dev',
          description: [
            'This website! It is hosted on AWS Lightsail, behind a Cloudflare proxy, and uses Next.js, React, Typescript, and Tailwind CSS.'
          ]
        }
      ],
      skills: [
        'Laravel/PHP',
        'HTML/CSS/Javascript',
        'React',
        'Vue',
        'Android/Kotlin/React Native',
        'Unity/C#',
        'Java',
        'Python',
        'Haskell/Purescript',
        'Linux/Bash/Vim',
      ],
      languages: [
        {
          name: 'English',
          description: ['I grew up in England, so I am fluent in English.'],
        },
        {
          name: 'Chinese',
          description: ['My parents are from Macau, so I speak everyday conversational level of Cantonese Chinese. I can also read enough Written Chinese to get by in everyday life, as I have been living in Macau for the past 3 years.']
        },
        {
          name: 'Japanese',
          description: ["I consume Japanese media regularly, and have studied Japanese in the past to the level where I can understand about 80% of everyday conversations."]
        },
      ],
    }
  }
}


export default Resume
