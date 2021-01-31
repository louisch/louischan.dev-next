import React, { useEffect, useState } from 'react'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import Head from 'next/head'
import path from 'path'
import fs from 'fs-extra'
import unified from 'unified'
import parse from 'remark-parse'
// @ts-ignore
import remark2react from 'remark-react'


interface ResumeProps {
  sections: Section[],
}
interface Section {
  filename: string,
  content: string,
}
interface SectionWithReact {
  filename: string,
  content: React.ReactElement,
}

const parser = unified().use(parse).use(remark2react)

function Resume(props: ResumeProps): React.ReactElement {
  const { sections } = props
  const [sectionsProcessed, setSectionsProcessed] = useState<SectionWithReact[]>([])

  useEffect(() => {
    async function process() {
      let newSections: SectionWithReact[] = []
      for (const section of sections) {
        const { filename, content } = section
        const processed = await parser.process(content)
        const contentAsReact = processed.result as React.ReactElement
        const merged = { filename, content: contentAsReact }
        newSections = ([...newSections, merged])
      }
      setSectionsProcessed(newSections)
    }
    process()
  }, [sections])

  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <div className="flex flex-col items-center w-full">
        <div>
          <h1 className="text-4xl">Louis Chan</h1>
          <div className="italics mb-8">Hi! I'm a software developer.</div>
          <div className="max-w-screen-2xl md:two-columns xl:three-columns space-y-4">
            {sectionsProcessed.map((section) => {
              const { filename, content } = section
              return (
                <section className="inline-block" key={filename}>
                  {content}
                </section>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<ResumeProps>> {
  const resumeDirectory = path.join(process.cwd(), 'resume')
  const filenames = await fs.readdir(resumeDirectory);
  const sections: Section[] = await Promise.all(filenames.map((filename) => {
    async function readFile() {
      const filePath = path.join(resumeDirectory, filename)
      const fileContents = await fs.readFile(filePath, 'utf8')
      return { filename, content: fileContents }
    }
    return readFile()
  }))

  return {
    props: {
      sections
    }
  }
}


export default Resume
