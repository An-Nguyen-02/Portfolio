import {Box, Text, Heading, UnorderedList, ListItem} from "@chakra-ui/react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool, MdWork } from "react-icons/md";
import {AiFillStar} from "react-icons/ai"
export const Bio = () => {

    return (
        <Box id="bio" marginTop="100px">
            <Box margin="0 0 5% 2%">
                <Heading as="h1" size="3xl" textAlign={"left"}>Bio</Heading>
            </Box>
            <Box background={"gray.300"}>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="6/2023 - Present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <Heading as={"h3"} size="md" className="vertical-timeline-element-title">Full-stack web developer</Heading>
                        <Heading as={"h4"} size="sm" className="vertical-timeline-element-subtitle" whiteSpace="nowrap">Tampere, Finland</Heading>
                        <Box textAlign={"left"}>
                            <Text>
                                Worked on several production-grade web applications across frontend and backend using React, Ruby on Rails, and SQL. Highlights include:
                            </Text>
                            <UnorderedList>
                                <ListItem>
                                    <Text>
                                        Implemented and optimized complex features for SmartME Global, improving backend performance by up to 10x through SQL and service-level optimizations, and enhancing user experience through better workflows and data visualization.
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text>
                                        Contributed to the Farmer's Work Ability Scale, an ISSA award-winning service, by managing production deployments and ensuring robust versioning and backups.
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text>
                                        Regularly integrate third-party APIs, improve system scalability, and contribute across the stack in fast-paced, customer-focused environments.
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle = {{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        date="9/2023 - 6/2025"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <Heading as={"h3"} size="md" className="vertical-timeline-element-title">Tampere University, Science and Engineering</Heading>
                        <Heading as={"h4"} size="sm" className="vertical-timeline-element-subtitle">Master Degree</Heading>
                        <Text>
                            Software, Web, and Cloud
                        </Text>
                    </VerticalTimelineElement>  
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="10/2021 - 5/2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <Heading as={"h3"} size="md" className="vertical-timeline-element-title">Research Assistant</Heading>
                        <Heading as={"h4"} size="sm" className="vertical-timeline-element-subtitle" whiteSpace="nowrap">Tampere, Finland</Heading>
                        <Text>
                            Mechanical design and implementation, Semiconductor Laser test and simulation
                        </Text>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="1/2020 - 8/2020"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <Heading as={"h3"} size="md" className="vertical-timeline-element-title">Research Trainee</Heading>
                        <Heading as={"h4"} size="sm" className="vertical-timeline-element-subtitle">Tampere, Finland</Heading>
                        <Text>
                            Mechanical design, Matlab optimization
                        </Text>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle = {{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        date="9/2020 - 6/2023"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <Heading as={"h3"} size="md" className="vertical-timeline-element-title">Tampere University, Science and Engineering</Heading>
                        <Heading as={"h4"} size="sm" className="vertical-timeline-element-subtitle">Bachelor Degree</Heading>
                        <Text>
                            Web development, Human-Technology Interaction, Machine Learning
                        </Text>
                    </VerticalTimelineElement>  
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="5/2017 - 7/2020"
                        contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <Heading as={"h3"} size="md" className="vertical-timeline-element-title">VNU-HCM High School for The Gifted</Heading>
                        <Heading as={"h4"} size="sm" className="vertical-timeline-element-subtitle">High School Degree</Heading>
                        <Text>
                            Physics major
                        </Text>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<AiFillStar />}
                    />
                </VerticalTimeline>
            </Box>
        </Box>
    )
}