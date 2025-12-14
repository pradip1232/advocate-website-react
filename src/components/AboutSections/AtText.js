import { Typography } from '@mui/material'
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ff from '../img/Group 9.webp';

const AtText = ({ data }) => {
    return (
        <div>
            <Container className='about-pages-text-cont'>

                <Row className='justify-content-center'>
                    <div className="col-md-11 text-center">

                        <Typography variant='h6'>
                            {data?.mainContent?.description || "At Legal Associates, we believe that every legal challenge is an opportunity for resolution, justice, and growth. Since our establishment, we have been dedicated to providing expert legal services with a focus on personalized client care."}
                        </Typography>
                        <Typography variant='h6'>
                            With a team of experienced attorneys, we offer comprehensive legal solutions across a variety of practice areas including personal injury, business law, and real estate disputes. Our commitment to excellence, ethical standards, and client-focused approach ensures that each case is handled with the utmost attention to detail and compassion.
                        </Typography>
                        <Typography variant='h6'>
                            We take pride in guiding our clients through complex legal matters, ensuring clear communication at every step. Our track record of success is a testament to our dedication and expertise, making us a trusted partner for individuals and businesses alike.
                        </Typography>
                    </div>
                </Row>
            </Container>

            {/* <section>
                <img src={ff} className='img-fluid mission-vision-about-images' />
            </section> */}

        </div>
    )
}

export default AtText
