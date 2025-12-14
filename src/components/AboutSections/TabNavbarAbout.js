import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const TabNavbarAbout = ({ data }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="" className='custom-navbar-tab'>
                        <Tab className='tabvar-button-about' label="MISION" {...a11yProps(0)} />
                        <Tab className='tabvar-button-about' label="VISION" {...a11yProps(1)} />
                        <Tab className='tabvar-button-about' label="CORE VALUES" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Container className='d-flex justify-content-center'>
                        <Row className='justify-content-center'>
                            <Col xs={10}>
                                <p className='text-about-tab-des'>

                                    {data?.mission?.description || "At Legal Associates, we strive to provide exceptional legal services through expert guidance and personalized attention. Our mission is to advocate fiercely for our clients' rights, navigate complex legal challenges, and contribute positively to our communities, ensuring that everyone receives fair representation and support in their legal journeys."}
                                </p>
                                <hr />
                            </Col>
                        </Row>
                    </Container>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Container className='d-flex justify-content-center'>
                        <Row className='justify-content-center'>
                            <Col xs={10}>
                                <p className='text-about-tab-des'>

                                    To be regarded as the top law firm in our area, known for our knowledge, moral character, and dedication to the success of our clients
                                </p>
                                <hr />
                            </Col>
                        </Row>
                    </Container>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Container>
                        <Grid container spacing={2} className='justify-content-center'>
                            <Grid item xs={10}>
                                <Typography variant='h5' className='core-values-tabs'> Experienced Professionals</Typography>
                                <p className='tab-navbar-aboutus'>Our team comprises seasoned attorneys with extensive  knowledge in various areas of law. We bring years of experience  and a proven track record to every case, ensuring that you  receive the best legal counsel available.</p>
                                <Typography variant='h5' className='core-values-tabs'> Client-Centered Approach</Typography>
                                <p className='tab-navbar-aboutus'>We prioritize your needs and goals. Our commitment to  personalized service means that we take the time to understand  your unique situation, allowing us to tailor our strategies  specifically to you.</p>
                                <Typography variant='h5' className='core-values-tabs'> Transparent Communication</Typography>
                                <p className='tab-navbar-aboutus'>We believe in keeping you informed every step of the way. Our  attorneys are dedicated to providing clear, honest  communication, so you always know what to expect and can  make informed decisions.</p>
                                <Typography variant='h5' className='core-values-tabs'> Proven Results</Typography>
                                <p className='tab-navbar-aboutus'>Our success stories reflect our ability to achieve favorable  outcomes for our clients. We are passionate about advocating  for your rights and will work tirelessly to ensure that your  interests are protected.</p>
                                <Typography variant='h5' className='core-values-tabs'> Compassionate Support</Typography>
                                <p className='tab-navbar-aboutus'>Legal issues can be overwhelming, and we’re here to support  you. Our team approaches each case with empathy and  understanding, providing the reassurance and guidance you  need during challenging times.</p>
                                <Typography variant='h5' className='core-values-tabs'> Comprehensive Legal Services</Typography>
                                <p className='tab-navbar-aboutus'>Whether you need assistance in family law, business disputes,  personal injury claims, or real estate transactions, we offer a  wide range of services to address all your legal needs under one  roof.</p>
                                <Typography variant='h5' className='core-values-tabs'> Strong Community Commitment</Typography>
                                <p className='tab-navbar-aboutus'>We believe in giving back to the community we serve. Our  involvement in local initiatives and organizations reflects our  commitment to making a positive impact beyond the courtroom.</p>
                            </Grid>
                            <p className='tab-navbar-aboutus'>{data?.closingStatement || "Choosing Legal Associates means partnering with a dedicated team that puts your interests first. Let us guide you through your legal journey with confidence and expertise. Contact us today to learn more about how we can assist you!"}</p>
                        </Grid>
                        <hr />
                    </Container>
                </CustomTabPanel>

            </Box>
            <div className='container mt-3 mb-5'>
                <div className='row'>
                    <div className='col-md-12'>

                        <h1 className='ourteam-heading'>our team</h1>
                        <p className='ourfirm-para'>Our firm is comprised of seasoned legal professionals with expertise in various fields of law. Each member of our team brings a wealth of knowledge and experience, enabling us to handle complex legal issues with confidence and precision.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabNavbarAbout
