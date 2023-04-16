import Head from 'next/head'

import {Card} from '@/components/Card'
import {SimpleLayout} from '@/components/SimpleLayout'
import SliderCertificate from "@/components/SliderCertificate";

function Appearance({title, description, cta, href}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Expertise() {
  return (
    <>
      <Head>
        <title>Expertise - Budi Rahmawan</title>
        <meta
          name="description"
          content="I’ve spoken at events all around the world and been interviewed for many podcasts."
        />
      </Head>
      <SimpleLayout
        title="My Expertise"
        intro="Your expertise may also include knowledge of software development methodologies, such as Agile or Waterfall, and experience working in collaborative team environments. You may be skilled in identifying and troubleshooting software bugs, optimizing code for performance, and creating technical documentation for projects. Additionally, you may have specialized expertise in a particular area of software engineering, such as web development, mobile app development, database management, or machine learning. You may have a deep understanding of specific technologies or tools commonly used in your area of expertise, and may have completed specialized training or certification programs to develop your skills."
      >
        <div className="space-y-20">
          <SliderCertificate/>

          <Appearance
            href="#"
            title="Software Development"
            description="Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript."
            cta="Read More"
          />
          <Appearance
            href="#"
            title="Frontend Dev React, NextJS"
            description="Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks."
            cta="Read More"
          />
          <Appearance
            href="#"
            title="Backend Dev"
            description="Backend development involves building and maintaining the server-side of web applications, which includes creating and managing databases, managing server resources, and handling server-side programming languages such as Python, Java, PHP, or Ruby."
            cta="Read More"
          />
          <Appearance
            href="#"
            title="Flutter Dev and Android Kotlin"
            description="Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework."
            cta="Read More"
          />

        </div>
      </SimpleLayout>
    </>
  )
}
